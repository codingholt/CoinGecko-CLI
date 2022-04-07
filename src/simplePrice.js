import { client } from './client/index.js';
import Table from 'cli-table3';
import { checkErr } from './util/responseError.js';
import chalk from 'chalk';



async function simplePrice(coin){

    const coingeckoREQ = await client.simplePrice({
        vs_currencies: 'usd',
        include_24hr_change: true,
        ids: coin,
    });

    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['Coin', '$', '24h change']
    });

    table.push(
    [coin, coingeckoREQ[coin]['usd'],  coingeckoREQ[coin]['usd_24h_change'] > 0 ?  chalk.green(coingeckoREQ[coin]['usd_24h_change']+' %') : chalk.red(coingeckoREQ[coin]['usd_24h_change'] + ' %')]
    );
    return console.log(table.toString());
    
}

export {simplePrice}