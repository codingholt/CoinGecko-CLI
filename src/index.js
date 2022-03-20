#! /usr/bin/env node
const { CoinGeckoClient } = require('coingecko-api-v3')
const { Command } = require('commander');
var Table = require('cli-table3');
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
    .description('Be carefull this returns a list with the name of each coin on coingecko')
    .action(async ()=>{
        const coinList = await client.coinList();
        
        const table = new Table({
            head: ['id', 'symbol', 'name']
          , colWidths: [25, 25, 100]
        });
        for(let i = 0; i < coinList.length; i++){
            table.push(
                [coinList[i]['id'], coinList[i]['symbol'], coinList[i]['name']]
                );
        }
        console.log(table.toString());
    })


program
    .command('price')
    .description('Get the price of a coin, use id as listed on coingecko (most likely the full name)')
    .argument('coin', 'id of the coin as mentioned on coingecko')
    .action(async(coin)=>{
        const coinPrice = await client.simplePrice({
            vs_currencies: 'usd',
            ids: coin,
        });

        const table = new Table({
            head: ['', 'usd']
          , colWidths: [25, 10]
        });

        table.push(
        [coin, coinPrice[coin]['usd']]
        );
        console.log(table.toString());


    })



  program.parse()