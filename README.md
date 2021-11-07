# cryptoAppServer

This is a node-express server.

* endpoint: https://3eqes.sse.codesandbox.io (BASEURL)


### Make sure you have node is installed on your machine before starting the project.

Start the server:

1) First install all the dependencies by running command within this directory.
 ```bash
 npm install
 ```

2) To start the server, run the following command: 
```bash
nodemon server.js
```

API

* /api/BTC - returns the buy and sell prices of BTC from all sources
* /api/ETH - returnsn the buy and sell prices of ETH from all sources

Additional end points:

Coinbase:

* /api/coinbase/BTC/buy - returns the Buy price of Bitcoin from coinbase exchange
* /api/coinbase/BTC/sell - returns the Sell price of Bitcoin from coinbase exchange
* /api/coinbase/ETH/buy - returns the Buy price of Etherium from coinbase exchange
* /api/coinbase/ETH/sell - returns the Sell price of Etherium from coinbase exchange

Binance:

* /api/binance/BTC/buysell - returns the Buy/Sell price of Bitcoin from binance exchange
* /api/binance/ETH/buysell - returns the Buy/Sell price of Etherium from binance exchange

Markets/Exchange sources used for this server:

1. Coinbase (https://developers.coinbase.com/api/v2?shell#exchange-rates)
2. Binance (https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker)
3. Kucoin (https://docs.kucoin.com/#get-ticker)
