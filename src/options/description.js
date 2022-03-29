import { client } from "../client/index.js";
import {checkErr} from '../util/responseError.js'
import Table from "cli-table3";
import { convert } from 'html-to-text';

async function description(coin){
    const coingeckoREQ = await client.coinId({
        id: coin,
        market_data: false,
        tickers: false,
        localization: false,

     })
    checkErr(coingeckoREQ)
    const table = new Table({
        head: [coin]
    })
    const descr =  convert(coingeckoREQ['description']['en'], {
          wordwrap: 130
         });

    table.push([descr])
    console.log(table.toString())
}

export {description}