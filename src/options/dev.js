import { client } from "../client/index.js";
import Table from "cli-table3";
import { checkErr } from "../util/responseError.js";

async function dev(coin){
    const coingeckoREQ = await client.coinId({
        
        id: coin,
         developer_data: true,
         community_data: false,
         tickers: false,
        
    })


    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['coin', 'Forks', 'Stars', 'Closed Issues/Total Issues', 'Code Additions/Deletions last 4wks', 'Commits 4wks']
    })

    table.push([coin, coingeckoREQ['developer_data']['forks'],
        coingeckoREQ['developer_data']['stars'],
        coingeckoREQ['developer_data']['closed_issues'] + '/' + coingeckoREQ['developer_data']['total_issues'],
        coingeckoREQ['developer_data']['code_additions_deletions_4_weeks']['additions'] + '/' + coingeckoREQ['developer_data']['code_additions_deletions_4_weeks']['additions'],
        coingeckoREQ['developer_data']['commit_count_4_weeks']
    ],)

    console.log(table.toString())
}

export {dev}