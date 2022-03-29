import { client } from "../client/index.js"; 
import { checkErr } from "../util/responseError.js";
import Table from "cli-table3";

async function trending(){
    const coingeckoREQ = await client.trending();
    checkErr(coingeckoREQ)
    const table = new Table({
        head: ['trending rank', 'coin'],
    })
    table.push(
        { '1': [coingeckoREQ['coins'][0]['item']['name']] },
        { '2': [coingeckoREQ['coins'][1]['item']['name']] },
        { '3': [coingeckoREQ['coins'][2]['item']['name']] },
        { '4': [coingeckoREQ['coins'][3]['item']['name']] },
        { '5': [coingeckoREQ['coins'][4]['item']['name']] },
        { '6': [coingeckoREQ['coins'][5]['item']['name']] },
        { '7': [coingeckoREQ['coins'][6]['item']['name']] }
    )

    console.log(table.toString())
}

export {trending}