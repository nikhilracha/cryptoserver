const axios = require("axios");

//Axios object configuration
const config = {
  headers: { Authorization: `Bearer ${process.env.COIN_BASE_KEY}` }
};

const bodyParameters = {
  key: "value"
};

const findSmallestValue = (obj) => {
  const smallest = Object.keys(obj).reduce((acc, val) => {
    return Math.min(acc, obj[val]);
  }, Infinity);
  return smallest;
};

const findMaxValue = (obj) => {
  const largest = Object.keys(obj).reduce((acc, val) => {
    return Math.max(acc, obj[val]);
  }, Infinity);
  return largest;
};

exports.getBTC = async function (req, res) {
  var data = {};
  var suggest = {};
  let one = "https://api.coinbase.com/v2/prices/BTC-USD/buy";
  let two = "https://api.coinbase.com/v2/prices/BTC-USD/sell";
  let three =
    "https://api1.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT";

  let four =
    "https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT";

  const requestOne = axios.get(one, bodyParameters, config);
  const requestTwo = axios.get(two, bodyParameters, config);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responesThree = responses[2];
        const responesFour = responses[3];
        console.log("coinbase buy", responseOne.data.data);
        console.log("coinbase sell", responseTwo.data.data);
        console.log("binance", responesThree.data);
        console.log("Kucoin", responesFour.data.data);

        data.coinbase = {
          buyPrice: responseOne.data.data.amount,
          sellPrice: responseTwo.data.data.amount
        };

        data.binance = {
          buyPrice: parseFloat(responesThree.data.bidPrice).toFixed(2),
          sellPrice: parseFloat(responesThree.data.askPrice).toFixed(2)
        };

        data.kucoin = {
          buyPrice: responesFour.data.data.bestBid,
          sellPrice: responesFour.data.data.bestAsk
        };

        data.time = {
          lastUpdate: new Date().toLocaleString()
        };

        var bestBTCbuyprice = {
          coinbase: responseOne.data.data.amount,
          binance: parseFloat(responesThree.data.bidPrice).toFixed(2),
          kucoin: responesFour.data.data.bestBid
        };
        var bestBTCsellprice = {
          coinbase: responseTwo.data.data.amount,
          binance: parseFloat(responesThree.data.askPrice).toFixed(2),
          kucoin: responesFour.data.data.bestAsk
        };

        console.log("cheapest BTC to buy", findSmallestValue(bestBTCbuyprice));
        console.log("Best BTC price to sell", findMaxValue(bestBTCsellprice));

        res.status(200).json({ data: data });
      })
    )
    .catch((errors) => {
      res.status(400).json({ errors: errors });
    });
};

exports.getETH = async function (req, res) {
  var data = {};
  let one = "https://api.coinbase.com/v2/prices/ETH-USD/buy";
  let two = "https://api.coinbase.com/v2/prices/ETH-USD/sell";
  let three =
    "https://api1.binance.com/api/v3/ticker/bookTicker?symbol=ETHUSDT";

  let four =
    "https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETH-USDT";

  const requestOne = axios.get(one, bodyParameters, config);
  const requestTwo = axios.get(two, bodyParameters, config);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responesThree = responses[2];
        const responesFour = responses[3];
        console.log("coinbase buy", responseOne.data.data);
        console.log("coinbase sell", responseTwo.data.data);
        console.log("binance", responesThree.data);
        console.log("Kucoin", responesFour.data.data);

        data.coinbase = {
          buyPrice: responseOne.data.data.amount,
          sellPrice: responseTwo.data.data.amount
        };

        data.binance = {
          buyPrice: parseFloat(responesThree.data.bidPrice).toFixed(2),
          sellPrice: parseFloat(responesThree.data.askPrice).toFixed(2)
        };

        data.kucoin = {
          buyPrice: responesFour.data.data.bestBid,
          sellPrice: responesFour.data.data.bestAsk
        };

        data.time = {
          lastUpdate: new Date().toLocaleString()
        };

        res.status(200).json({ data: data });
      })
    )
    .catch((errors) => {
      res.status(400).json({ errors: errors });
    });
};
