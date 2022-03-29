import { client } from "../client/index.js";
import { checkErr } from "../util/responseError.js";
import Table from "cli-table3";

async function sentiment(coin){
     const coingeckoREQ = await client.coinId({
        id: coin,
        market_data: false,
        tickers: false,
        localization: false,

     })
    checkErr(coingeckoREQ)
    const table = new Table({
        head: ['coin', 'Bullish %', 'Bearish %']
    })
    table.push([coin, coingeckoREQ['sentiment_votes_up_percentage'] + ' %', coingeckoREQ['sentiment_votes_down_percentage'] + ' %'])
    console.log(table.toString())
}

export{sentiment}