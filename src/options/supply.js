import { client } from "../client/index.js";
import Table from "cli-table3";

async function supply(coin){
     const coingeckoREQ = await client.coinId({
         id: coin,
         developer_data: false,
         community_data: false,
         tickers: false,
     })

     console.log(coingeckoREQ)

     if(coingeckoREQ.hasOwnProperty('error')) {
         console.error(coingeckoREQ['error'])
         return;
     }

     const table = new Table({
         head: ['coin', 'Circulating Supply', 'Max Supply', 'Total Supply'],
         colWidths: [15, 25, 25]
     })

     table.push([coin, coingeckoREQ['market_data']['circulating_supply'], coingeckoREQ['market_data']['max_supply'], coingeckoREQ['market_data']['total_supply']])
    
     console.log(table.toString())
}

export {supply};