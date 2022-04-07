#! /usr/bin/env node
import { Command } from 'commander';
import { search } from './util/search.js';
import { simplePrice } from './simplePrice.js';
import { tickers } from './options/tickers.js';
import { coinOverview } from './options/coinOverview.js';
import { fdv } from './options/fdv.js';
import { marketcap } from './options/marketcap.js';
import { supply } from './options/supply.js';
import { dev } from './options/dev.js';
import { marketcaptofdv } from './options/marketcaptoFdv.js'
import { trending } from './options/trending.js';
import { sentiment } from './options/sentiment.js';
import { description } from './options/description.js';
import { makeChart } from './options/chart.js'
import { topMC } from './options/topMC.js';

const program = new Command();


program
    .name('CoinGecko CLI')
    .description('CLI for reciving coingecko data right in your terminal 💻')
    .version('0.0.1');

program
    .description('get coin data, use id as listed on coingecko (most likely the full name)')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .option('-p, --price', 'get the price of the coin and the 24h change')
    .option('-t, --tickers', 'get the tickers of a coin and some extra data')
    .option('-o, --overview')
    .option('-fdv, --FullyDilutedValue')
    .option('-mc, --marketcap')
    .option('-mcfdv, --marketcaptofdv')
    .option('-s, --supply')
    .option('-dev, --developerdata')
    .option('-st, --sentiment')
    .option('-ds, --description')
    .option('-c, --chart')
    .action(async(coin, options)=>{
        options.price && simplePrice(await search(coin));
        options.tickers && tickers(await search(coin));
        options.overview && coinOverview(await search(coin));
        options.FullyDilutedValue && fdv(await search(coin));
        options.marketcap && marketcap(await search(coin));
        options.supply && supply(await search(coin));
        options.developerdata && dev(await search(coin));
        options.marketcaptofdv && marketcaptofdv(await search(coin));
        options.sentiment && sentiment(await search(coin));
        options.description && description(await search(coin));

})


program
    .command('price')
    .description('Get the price of a coin')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .action(async(coin)=>{
        simplePrice( await search(coin))
    })


program
    .command('trending')
    .description('get the trending coins on coingecko')
    .action(()=>{
        trending()
    })

program
    .command('chart')
    .description('get a chart')
    .argument('coin', 'the coin you want to chart')
    .argument('days','number of days you want to have in your chart, default max amount of data available')
    .action(async(coin, days)=>{
        makeChart(await search(coin), days)
    })




 program
    .command('top')
    .description('get the top coins sorted by largest to smallest marketcap')
    .argument('how many coins', 'Amount of coins you want to have in your list')
    .action(async(coinCount)=>{
        topMC(coinCount)
    })




program.parse()