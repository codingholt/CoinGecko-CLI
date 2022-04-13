import { client } from '../client/index.js';
import { checkErr } from "../util/responseError.js";
import Table from 'cli-table3';


async function tickers(coin){
    const coingeckoREQ = await client.coinIdTickers(
        {
            id: coin,
            include_exchange_logo: false,
            order: "volume_desc"
        }
    )
    
    checkErr(coingeckoREQ)

    const table= new Table({
        head: ['Base', 'Target', 'Last Price', 'Volume', 'Bid&Ask spread', 'Trade link'],
    })
    for(let i = 0; i < coinDATA['tickers'].length; i++){
        table.push(
            [coingeckoREQ['tickers'][i]['base'], coingeckoREQ['tickers'][i]['target'], coingeckoREQ['tickers'][i]['last'], coingeckoREQ['tickers'][i]['volume'], coingeckoREQ['tickers'][i]['bid_ask_spread_percentage'], coingeckoREQ['tickers'][i]['trade_url']]
            );
    }
    console.log(table.toString());
}

export {tickers}