import { CoinGeckoClient } from 'coingecko-api-v3';
import Table from 'cli-table3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});


async function coinDATA(coin){
    const coinDATA = await client.coinId(
        {
            id: coin,
        }
    )
    console.log(coinDATA)

}

export {coinDATA}