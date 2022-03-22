import {client} from '../client/index.js';

async function coinOverview(coin){
    const coingecko = await client.coinId(
        {
        'id': coin,
        'tickers': false,
        }
    )
}

export {coinOverview}