import Table from 'cli-table3';
import { client } from '../client/index.js'

async function coinDATA(coin){
    const coinDATA = await client.coinId(
        {
            id: coin,
        }
    )

    const table = new Table(
        {
            head: [, 'usd','eur', 'eth' ]
          , colWidths: [10, 10]
        }
    )  
    table.push(
        {
        coin : [coinDATA['market_data']['current_price']['usd'], coinDATA['market_data']['current_price']['eur']]
        }
    )
    console.log(table.toString())

}

export {coinDATA}