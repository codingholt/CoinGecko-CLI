import { CoinGeckoClient } from 'coingecko-api-v3';
import Table from 'cli-table3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});


async function simplePrice(coin){
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


}

export {simplePrice}