#! /usr/bin/env node
import { Command } from 'commander';
import{ tickers,
    fdv,
    marketcap,
    supply,
    dev,
    marketcaptofdv,
    trending,
    sentiment,
    description,
    makeChart,
    topMC,
    makeChartMC,
    search,
    coinoverview,
    simplePrice
} from './imports.js'
const program = new Command();


program
    .name('CoinGecko CLI')
    .description('CLI for reciving coingecko data right in your terminal 💻')
    .version('0.1.5');


program
    .description('get coin data, use id as listed on coingecko (most likely the full name)')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .option('-p, --price', 'get the price of the coin and the 24h change')
    .option('-t, --tickers', 'get the tickers of a coin and some extra data')
    .option('-fdv, --FullyDilutedValue')
    .option('-mc, --marketcap')
    .option('-mcfdv, --marketcaptofdv')
    .option('-s, --supply')
    .option('-dev, --developerdata')
    .option('-st, --sentiment')
    .option('-ds, --description')
    .option('-src, --search')
    .action(async(coin, options)=>{
        options.price && simplePrice(await search(coin));
        options.tickers && tickers(await search(coin));
        options.FullyDilutedValue && fdv(await search(coin));
        options.marketcap && marketcap(await search(coin));
        options.supply && supply(await search(coin));
        options.developerdata && dev(await search(coin));
        options.marketcaptofdv && marketcaptofdv(await search(coin));
        options.sentiment && sentiment(await search(coin));
        options.description && description(await search(coin));
        options.search && newSearch(coin)
        if(Object.keys(options).length === 0 ){
            coinoverview(await search(coin)) 
        }
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
    .description('get a chart in your comamand line')
    .argument('coin', 'the coin you want to chart')
    .argument('days','number of days you want to have in your chart, default max amount of data available')
    .option('-mc', 'display marketcap chart')
    .action(async(coin, days, mc)=>{
        if(!mc){
        makeChart(await search(coin), days)
        }makeChartMC(await search(coin), days)

    })




program
    .command('top')
    .description('get the top coins sorted by largest to smallest marketcap')
    .argument('how many coins', 'Amount of coins you want to have in your list')
    .action(async(coinCount)=>{
       await topMC(coinCount)
    })



// program
//     .command('config')
//     .description('Change the default configuration for this tool')
//     .option('-curr, --currency', 'change the default currency')
//     .option('-sym, --symbol', 'change the default symbol')
//     .option('-ch, --chart_datapoints', 'change the maxium datapoints a chart can have')
//     .argument('What new value this configuration option should have', 'eg: eur, €, 150')
//     .action(async(newVal, options) =>{
//         options.currency && configuration('currency', newVal);
//         options.symbol && configuration('symbol', newVal);
//         options.chart_datapoints && configuration('chart_datapoints', newVal);
        
//     })


program.parse()