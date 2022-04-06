import { client } from "../client/index.js";
import { checkErr } from "../util/responseError.js";
import Table from "cli-table3";
import chalk from "chalk";

async function sentiment(coin){
     const coingeckoREQ = await client.coinId({
        id: coin,
        market_data: false,
        tickers: false,
        localization: false,

     })
    checkErr(coingeckoREQ)
    const table = new Table({
        head: ['Coin', 'Bullish %', 'Bearish %']
    })
    table.push([
        coingeckoREQ['name'],
        chalk.green(coingeckoREQ['sentiment_votes_up_percentage'] + ' %'),
        chalk.red(coingeckoREQ['sentiment_votes_down_percentage'] + ' %')
    ])
    console.log(table.toString())
}

export{sentiment}