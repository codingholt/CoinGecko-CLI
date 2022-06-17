
# CoinGecko-CLI 💻

A Command-Line tool to retrieve all CoinGecko data in your command line

![Small show case of the cli](smallpreview.gif)

## Installation

- This project requires node, you can install it [here](https://nodejs.org/en/)

- Once you have node installed, you can just run `npm i -g coingecko-cli` to install the coingecko-cli globally on your computer

- Congrats🥳 ! You now have the coingecko-cli installed.

To check if it's working, just run `cg btc -p`

If it works, the Bitcoin price and price change over the last 24 hours should appear in your command line!

---

## Features

- Display an overview of an coin by typing `cg COIN_NAME` 

- You can see the **current price of a coin** by running `cg COIN_NAME -p` or  `--price` or by running `cg price COIN_NAME`
  
- You can see the **marketcap of a coin** by running `cg COIN_NAME -mc` or `--marketcap`
  
- You can see **stats of the current supply of a coin** by running `cg COIN_NAME -s` or `--supply`

- You can see **trending coins on coingecko** by typing `cg trending` in your command line.

- You can see **a description of the coin** by typing `cg COIN_NAME -ds` or `--description`

- You can see stats about the developers of a certain project by typing `cg COIN_NAME -dev`

- You can see the Fully diluted valuation of a coin by typing `cg COIN_NAME -fdv`

- You can **see a chart of a coin in your command line** by typing `cg chart COIN_NAME INSERT_AMOUNT_OF_DAYS_BACK_HERE`

    for example by typing `cg chart eth 10` you get an ethereum chart displayed going back 10 days

- You can **see a chart of the market cap coin in your command line** by typing `cg chart COIN_NAME INSERT_AMOUNT_OF_DAYS_BACK_HERE -mc`

    for example by typing `cg chart eth 10 -mc` you get an ethereum market cap chart displayed going back 10 days

- You can see the **sentiment of a certain coin** by typing `cg COIN_NAME --sentiment`

- You can see **tickers of a coin and where you can trade** it by typing `cg COIN_NAME -t` or `--tickers`
  
- You can **see the top coins sorted by descending market cap** (biggest market cap fist) `cg top NUMBER`
  
  for example by typing `cg top 50` you get the top 50 coins by market cap.

## Edit Default settings

- Go into the node_modules folder where you installed the cli. and edit the `coingecko-cli/scr/util/config.js` file to your preffered defaults.

---

## Support the project

### Contribute

Please feel free to [create a GitHub issue](https://github.com/codingholt/CoinGecko-CLI/issues/new) or [send me a message on telegram](https:t.me/svenxbt) to report bugs, suggest features, or ask questions.

### Share

[Share the project with your friends and followers.](https://twitter.com/intent/tweet?text=https%3A%2F%2Fgithub.com%2Fcodingholt%2FCoinGecko-CLI%0AIm%20using%20this%20cool%20tool%20to%20get%20all%20sorts%20of%20data%20about%20cryptocurrency%20in%20my%20command%20line%21%F0%9F%92%BB%0D%0Acheck%20it%20out%20here%0D%0A)

### Donate

**BTC:** `bc1q5jrx8aw5c4wq76rl0etxfhvv69gtnj7v3ldstc`\
**ETH/ERC-20:** `0xb1dC2Cf172592bd2CdDCBD530A4a72a15b0D1ace`\
**SOL/SPL:** `holt.sol` or `BFqpAdbRkubMVSdKu2EwSE347Rv2zWucDTbAfDLQPbDb`

---

## Contact

[Twitter](https://twitter.com/traderholt) • [Email](mailto:codingholt@gmx.com) • [Telegram](https://t.me/svenxbt)

---

## Licence

[MIT](https://github.com/codingholt/CoinGecko-CLI/blob/main/licence.md) Ⓒ [holt.](https://github.com/codingholt/) [CoinGecko-CLI](https://coingecko-cli.vercel.app/)
