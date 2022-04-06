import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import Table from "cli-table3";
import { checkErr } from "../util/responseError.js";
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
        head: ['coin', 'Market Cap', 'Market Cap Change 24h'],
    })

    table.push([coingeckoREQ['name'], readableNumber(coingeckoREQ['market_data']['market_cap']['usd']) + ' $', 
    coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency']['usd'] > 0 ?
    chalk.green(coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency']['usd'] + ' %') 
    : chalk.red(coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency']['usd'] + ' %')
])
    console.log(table.toString())
}

export {marketcap}