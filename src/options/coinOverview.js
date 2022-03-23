import {client} from '../client/index.js';

async function coinOverview(coin){
    const coingeckoREQ = await client.coinId(
        {
        'id': coin,
        'tickers': false,
        }
    )
    if(coingeckoREQ.hasOwnProperty('error')) {
        console.error(coingeckoREQ['error'])
        return;
    }
}

export {coinOverview}