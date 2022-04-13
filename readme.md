
# CoinGecko-CLI 💻

A Command-Line tool to retrieve all CoinGecko data in your command line

## Installation

- This project requires node, you can install it [here](https://nodejs.org/en/)

- Once you have node installed, you can just run `npm i -g coingecko-cli` to install the coingecko-cli globally on your computer

- Congrats🥳 ! You now have the coingecko-cli installed.

To check if it's working, just run `cg btc -p`

If it works, the Bitcoin price and price change over the last 24 hours should appear in your command line!

## Features

- You can see the **current price of a coin** by running `cg INSERT_COIN_HERE -p` or by running `cg INSERT_YOUR_COIN_HERE --price` or `cg price INSERT_COIN_HERE`
  
- You can see the **marketcap of a coin** by running `cg INSERT_COIN_HERE -mc` or by running `cg INSERT_COIN_HERE --marketcap`
  
- You can see **stats of the current supply of a coin** by running `cg INSERT_COIN_HERE -s` or by running `cg INSERT_COIN_HERE --supply`

- You can see 