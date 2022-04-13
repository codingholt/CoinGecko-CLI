import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import  Table  from "cli-table3";
import {default_vs_currency, default_symbol} from '../util/getDefaults.js'
import { checkErr } from "../util/responseError.js";

async function fdv(coin){
    const coingeckoREQ = await client.coinId(
        {
        id: coin,
        tickers: false,
        community_data: false,
        developer_data: false,
        }
    )

    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['coin', 'Fully Diluted Value'],
    })

    table.push([coingeckoREQ['name'], readableNumber(coingeckoREQ['market_data']['fully_diluted_valuation'][default_vs_currency])+default_symbol])

   return console.log(table.toString());
}

export {fdv}