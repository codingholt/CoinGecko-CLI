import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import Table from "cli-table3";
import { checkErr } from "../util/responseError.js";

async function marketcaptofdv(coin){
    const coingeckoREQ = await client.coinId({
        id: coin,
        developer_data: false,
        community_data: false,
        tickers: false,
    })
    checkErr(coingeckoREQ)
    const table = new Table({
        head: ['coin', 'MarketCap', 'FDV', 'MC/FDV']
    });

    table.push([coin,
    readableNumber(coingeckoREQ['market_data']['market_cap']['usd']) + ' $',
    readableNumber(coingeckoREQ['market_data']['fully_diluted_valuation']['usd']) + ' $',
    coingeckoREQ['market_data']['market_cap']['usd']/coingeckoREQ['market_data']['fully_diluted_valuation']['usd']])

    console.log(table.toString())
}

export {marketcaptofdv}
