import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import Table from "cli-table3";
import {default_vs_currency, default_symbol} from '../util/getDefaults.js'
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
        head: ['Coin', 'MarketCap', 'FDV', 'MC/FDV']
    });

    table.push([coingeckoREQ['name'],
    readableNumber(coingeckoREQ['market_data']['market_cap'][default_vs_currency]) + default_symbol,
    readableNumber(coingeckoREQ['market_data']['fully_diluted_valuation'][default_vs_currency]) + default_symbol,
    coingeckoREQ['market_data']['market_cap'][default_vs_currency]/coingeckoREQ['market_data']['fully_diluted_valuation'][default_vs_currency]])

    console.log(table.toString())
}

export {marketcaptofdv}
