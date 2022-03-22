#! /usr/bin/env node
import { Command } from 'commander';
import { simplePrice } from './simplePrice.js';
import { tickers } from './options/tickers.js';
import { coinDATA } from './options/coinData.js';
import { coinOverview } from './options/coinOverview.js'

const program = new Command();


program
    .name('CoinGecko CLI')
    .description('CLI for reciving coingecko data right in your terminal 💻')
    .version('0.0.1');

program
    .description('get coin data, use id as listed on coingecko (most likely the full name)')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .option('-t, --tickers', 'get the tickers of a coin and some extra data')
    .option('-c, --coindata')
    .option('-o, --overview')
    .action(async(coin, options)=>{
        options.tickers ? tickers(coin) : null;
        options.coindata ? coinDATA(coin) : null;
        options.overview ? coinOverview(coin): null;
})


program
    .command('price')
    .description('Get the price of a coin, use id as listed on coingecko (most likely the full name)')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .action((coin)=>{
        simplePrice(coin)
    })




/*
program
    .command('list')
    .description('Be carefull this returns a list with the name of each coin on coingecko')
    .action(
    coinList())
*/

program.parse()