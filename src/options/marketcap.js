import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import Table from "cli-table3";

async function  marketcap(coin){
    const coingeckoREQ = await client.coinId({
        id: coin,
        developer_data: false,
        community_data: false,
        tickers: false,
    })

    if(coingeckoREQ.hasOwnProperty('error')) {
        console.error(coingeckoREQ['error'])
        return;
    }
    const table = new Table({
        head: ['coin', 'Market Cap', 'Market Cap Change 24h'],
        colWidths: [15, 25, 25]
    })

    table.push([coin, readableNumber(coingeckoREQ['market_data']['market_cap']['usd']) + ' $', coingeckoREQ['market_data']['market_cap_change_percentage_24h_in_currency']['usd'] + ' %'])
    console.log(table.toString())
}

export {marketcap}