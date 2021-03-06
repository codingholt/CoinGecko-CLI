import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import { checkErr } from "../util/responseError.js";
import {default_vs_currency, default_symbol} from '../util/getDefaults.js'

import chalk from 'chalk';
import Table  from "cli-table3";

const head = chalk.white;


async function topMC(coinCount){

    const coingeckoREQ = await client.coinMarket({
        vs_currency: default_vs_currency,
        order: 'market_cap_desc',
        per_page: coinCount,
    })
   

    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['Rank', 'Coin', 'MarketCap', 'Price Change 24h', 'FDV', 'MC/FDV', 'Max Supply']
    });

    for(let i = 0; i<coingeckoREQ.length; i++){
        table.push([i + 1, 
            coingeckoREQ[i]['name'],
            readableNumber(coingeckoREQ[i]['market_cap']) + default_symbol,
            coingeckoREQ[i]['price_change_percentage_24h'] > 0 ? chalk.green(coingeckoREQ[i]['price_change_percentage_24h'] + ' %') : chalk.red(coingeckoREQ[i]['price_change_percentage_24h']+' %'),
            readableNumber(coingeckoREQ[i]['fully_diluted_valuation']) == 0 ? '∞' : readableNumber(coingeckoREQ[i]['fully_diluted_valuation']),
            readableNumber(coingeckoREQ[i]['market_cap']/coingeckoREQ[i]['fully_diluted_valuation']) == 0 ? '∞': readableNumber(coingeckoREQ[i]['market_cap']/coingeckoREQ[i]['fully_diluted_valuation']),
            readableNumber(coingeckoREQ[i]['max_supply']) == 0 ? '∞' :  readableNumber(coingeckoREQ[i]['max_supply'])
            ])
    }
    console.log(head(table.toString()))


}


export {topMC}