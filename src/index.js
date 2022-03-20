#! /usr/bin/env node
const { CoinGeckoClient } = require('coingecko-api-v3')
const { Command } = require('commander');
const program = new Command();

const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
  });

program
    .name('CoinGecko CLI')
    .description('CLI for reciving coingecko data right in your terminal 💻')
    .version('0.0.1');

program
    .command('list')
    .action(async()=>{
        const coinList = await client.coinList();
        console.log(coinList)
    })


program
    .command('price')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .action(async(coin)=>{
        const coinList = await client.simplePrice({
            vs_currencies: 'usd',
            ids: coin,
        });
        console.log(coinList)
    })



  program.parse()