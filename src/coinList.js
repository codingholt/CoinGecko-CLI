import { CoinGeckoClient } from 'coingecko-api-v3';
import Table from 'cli-table3';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

async function coinList(){
    const coinList = await client.coinList();
    
    const table = new Table({
        head: ['id', 'symbol', 'name']
      , colWidths: [25, 25, 100]
    });
    for(let i = 0; i < coinList.length; i++){
        table.push(
            [coinList[i]['id'], coinList[i]['symbol'], coinList[i]['name']]
            );
    }
    return console.log(table.toString());
}

export { coinList };
