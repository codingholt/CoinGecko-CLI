import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import Table from "cli-table3";
import { checkErr } from "../util/responseError.js";
import {default_vs_currency, default_symbol} from '../util/getDefaults.js'
import chalk from "chalk";

async function  marketcap(coin){
    const coingeckoREQ = await client.coinId({
        id: coin,
        developer_data: false,
        community_data: false,
        tickers: false,
    })
    checkErr(coingeckoREQ)
    const table = new Table({
        head: ['Coin', 'Rank', 'Market Cap', 'Market Cap Change 24h'],
    })

    table.push([coingeckoREQ['name'], coingeckoREQ['market_cap_rank'], readableNumber(coingeckoREQ['market_data']['market_cap'][default_vs_currency]) +  default_symbol, 
    coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency'][default_vs_currency] > 0 ?
    chalk.green(coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency'][default_vs_currency] + ' %') 
    : chalk.red(coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency'][default_vs_currency] + ' %'),
])
    console.log(table.toString())
}

export {marketcap}