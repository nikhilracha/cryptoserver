//This route has all the routes to retrieve
//the buy/sell prices from Binance API

const { Spot } = require("@binance/connector");

const client = new Spot();

//Returns the Buy and Sell price of BTC
exports.btcBuySell = async function (req, res) {
  console.log("in body", req.body);

  client
    .bookTicker("BTCUSDT")
    .then((response) => {
      client.logger.log(response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

//Returns the Buy and Sell price of ETH
exports.ethBuySell = async function (req, res) {
  console.log("in body", req.body);

  client
    .bookTicker("ETHUSDT")
    .then((response) => {
      client.logger.log(response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
