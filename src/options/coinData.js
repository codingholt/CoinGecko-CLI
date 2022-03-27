import Table from 'cli-table3';
import { client } from '../client/index.js'

async function coinDATA(coin){
    const coingeckoREQ = await client.coinId(
        {
            id: coin,
        }
    )

    if(coingeckoREQ.hasOwnProperty('error')) {
        console.error(coingeckoREQ['error'])
        return;
    }

    const table = new Table(
        {
            head: [, 'usd','eur', 'eth' ]
        }
    )  
    table.push(
        {
        coin : [coingeckoREQ['market_data']['current_price']['usd'], coingeckoREQ['market_data']['current_price']['eur']]
        }
    )
    return console.log(table.toString());

}

export {coinDATA}