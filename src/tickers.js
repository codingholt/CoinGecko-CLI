import { CoinGeckoClient } from 'coingecko-api-v3';
import Table from 'cli-table3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

async function tickers(coin){
    const coinDATA = await client.coinId(
        {
            id: coin,
        }
    )
    const table= new Table({
        head: ['Base', 'Target', 'Last Price', 'Volume', 'Bid&Ask spread', 'Trade link'],
        colWidths: [25,25,25,25,25, 50]
    })
    for(let i = 0; i < coinDATA['tickers'].length; i++){
        table.push(
            [coinDATA['tickers'][i]['base'], coinDATA['tickers'][i]['target'], coinDATA['tickers'][i]['last'], coinDATA['tickers'][i]['volume'], coinDATA['tickers'][i]['bid_ask_spread_percentage'], coinDATA['tickers'][i]['trade_url']]
            );
    }
    console.log(table.toString());
}

export {tickers}