import { client } from "../client/index.js";
import Table from "cli-table3";

async function dev(coin){
    const coingeckoREQ = await client.coinId({
        
        id: coin,
         developer_data: true,
         community_data: false,
         tickers: false,
        
    })


    if(coingeckoREQ.hasOwnProperty('error')) {
        console.error(coingeckoREQ['error'])
        return;
    }

    const table = new Table({
        head: [coin, 'Forks', 'Stars', 'Closed Issues/Total Issues', 'Code Additions/Deletions last 4wks', 'Commits 4wks']
    })
}