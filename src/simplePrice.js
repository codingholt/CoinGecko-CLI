import { client } from './client/index.js';
import Table from 'cli-table3';



async function simplePrice(coin){

    const coingeckoREQ = await client.simplePrice({
        vs_currencies: 'usd',
        ids: coin,
    });


    if(coingeckoREQ.hasOwnProperty('error')) {
        console.error(coingeckoREQ['error'])
        return;
    }


    const table = new Table({
        head: ['', 'usd']
      , colWidths: [25, 10]
    });

    table.push(
    [coin, coingeckoREQ[coin]['usd']]
    );
    return console.log(table.toString());
    
}

export {simplePrice}