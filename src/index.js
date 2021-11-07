//Imports
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

//Setting up router
var router = express.Router();
var app = express();

//Routes of our server
var coinBase = require("./routes/coinbaseRoute");
var binance = require("./routes/binanceRoute");
var common = require("./routes/commonRoute");

//Setting up the middlewares.
app.use(
  bodyParser.urlencoded({
    extended: false
  }),
  cors() //To allow CORS policy in our server
);
app.use(bodyParser.json());

//Configuring the server and the port
app.use("/api", router);
app.listen(process.env.PORT);

//Router routes configuration
router.get("/", function (req, res) {
  res.json({ message: "Testing Route" });
});

//CoinBase routes for both Bitcoin and Etherium.
router.get("/coinbase/BTC/buy", coinBase.btcBuy); //Get the Buy price of Bitcoin
router.get("/coinbase/BTC/sell", coinBase.btcSell); //Get the Sell price of Bitcoin
router.get("/coinbase/ETH/buy", coinBase.ethBuy); //Get the Buy price of Etherium
router.get("/coinbase/ETH/sell", coinBase.ethSell); //Get the Sell price of Etherium

//CoinBase routes for both Bitcoin and Etherium.
router.get("/binance/BTC/buysell", binance.btcBuySell); //Get the Buy and Sell price of Bitcoin
router.get("/binance/ETH/buysell", binance.ethBuySell); //Get the Buy and Sell price of Etherium

router.get("/BTC", common.getBTC); //Get the buy and sell prices of BTC from all the sources.
router.get("/ETH", common.getETH); //Get the buy and sell prices of ETH from all the sources.
