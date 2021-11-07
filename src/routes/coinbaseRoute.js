//This route has all the routes to retrieve
//the buy/sell prices from coinbase API

const axios = require("axios");

//Axios object configuration
const config = {
  headers: { Authorization: `Bearer ${process.env.COIN_BASE_KEY}` }
};

const bodyParameters = {
  key: "value"
};

//Returns the Buy price of BTC
exports.btcBuy = async function (req, res) {
  console.log("in body", req.body);

  axios
    .get(
      "https://api.coinbase.com/v2/prices/BTC-USD/buy",
      bodyParameters,
      config
    )
    .then((response) => {
      console.log("res", response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).json({ error: error });
    });
};

//Returns the Sell Price of BTC
exports.btcSell = async function (req, res) {
  console.log("in body", req.body);

  axios
    .get(
      "https://api.coinbase.com/v2/prices/BTC-USD/sell",
      bodyParameters,
      config
    )
    .then((response) => {
      console.log("res", response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).json({ error: error });
    });
};

//Returns the Buy Price of ETH
exports.ethBuy = async function (req, res) {
  console.log("in body", req.body);

  axios
    .get(
      "https://api.coinbase.com/v2/prices/ETH-USD/buy",
      bodyParameters,
      config
    )
    .then((response) => {
      console.log("res", response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).json({ error: error });
    });
};

//Returns the Sell Price of ETH
exports.ethSell = async function (req, res) {
  console.log("in body", req.body);

  axios
    .get(
      "https://api.coinbase.com/v2/prices/ETH-USD/sell",
      bodyParameters,
      config
    )
    .then((response) => {
      console.log("res", response.data);
      res.status(200).json({ price: response.data });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).json({ error: error });
    });
};
