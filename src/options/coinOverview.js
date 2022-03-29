import {client} from '../client/index.js';
import { checkErr } from '../util/responseError.js';

async function coinOverview(coin){
    const coingeckoREQ = await client.coinId(
        {
        'id': coin,
        'tickers': false,
        }
    )
    checkErr(coingeckoREQ)
}

export {coinOverview}