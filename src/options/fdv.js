import { client } from "../client/index.js";
import  Table  from "cli-table3";

async function fdv(coin){
    const coingeckoREQ = await client.coinId(
        {
        id: coin,
        tickers: false,
        community_data: false,
        developer_data: false,
        }
    )
      
    coingeckoREQ['error'] ? console.error(coingeckoREQ['error']): null


   
    const table = new Table({
        head: ['coin', 'Fully Diluted Value'],
        colWidths: [20, 30]
    })

    table.push([coin, coingeckoREQ['market_data']['fully_diluted_valuation']['usd']+' $'])

    console.log(table.toString())
}

export {fdv}