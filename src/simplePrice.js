import { client } from './client/index.js';
import Table from 'cli-table3';
import { checkErr } from './util/responseError.js';
import {default_vs_currency, default_symbol} from './util/getDefaults.js'
import chalk from 'chalk';



async function simplePrice(coin){

    const coingeckoREQ = await client.simplePrice({
        vs_currencies: default_vs_currency,
        include_24hr_change: true,
        ids: coin,
    });
    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['Coin', default_symbol, '24h change']
    });

    table.push(
    [coin, coingeckoREQ[coin][default_vs_currency],  coingeckoREQ[coin][default_vs_currency+'_24h_change'] > 0 ?  chalk.green(coingeckoREQ[coin][default_vs_currency+'_24h_change']+' %') : chalk.red(coingeckoREQ[coin][default_vs_currency+'_24h_change'] + ' %')]
    );
    return console.log(table.toString());
    
}

export {simplePrice}