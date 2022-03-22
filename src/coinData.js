import Table from 'cli-table3';
import { client } from './client/index.js'

async function coinDATA(coin){
    const coinDATA = await client.coinId(
        {
            id: coin,
        }
    )

    console.info(coinDATA)

}

export {coinDATA}