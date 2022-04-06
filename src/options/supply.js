import { client } from "../client/index.js";
import Table from "cli-table3";
import { checkErr } from "../util/responseError.js";

async function supply(coin){
     const coingeckoREQ = await client.coinId({
         id: coin,
         developer_data: false,
         community_data: false,
         tickers: false,
     })

     checkErr(coingeckoREQ)

     const table = new Table({
         head: ['Coin', 'Circulating Supply', 'Max Supply', 'Total Supply'],
     })

     table.push([coingeckoREQ['name'], coingeckoREQ['market_data']['circulating_supply'], coingeckoREQ['market_data']['max_supply'], coingeckoREQ['market_data']['total_supply']])
    
     console.log(table.toString())
}

export {supply};