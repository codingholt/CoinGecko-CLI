import { client } from "../client/index.js";
import { readableNumber } from "../util/readableNumbers.js";
import { checkErr } from "../util/responseError.js";
import Table  from "cli-table3";

async function topMC(coinCount){

    const coingeckoREQ = await client.coinMarket({
        vs_currency:'usd',
        order: 'market_cap_desc',
        per_page: coinCount,
    })
   

    checkErr(coingeckoREQ)

    const table = new Table({
        head: ['Rank', 'Coin', 'MarketCap', 'Price Change 24h', 'FDV', 'MC/FDV', 'Max Supply']
    });

    for(let i = 0; i<coingeckoREQ.length; i++){
        table.push([i + 1, 
            coingeckoREQ[i]['name'],
            readableNumber(coingeckoREQ[i]['market_cap'])+' $',
            coingeckoREQ[i]['price_change_percentage_24h']+' %',
            readableNumber(coingeckoREQ[i]['fully_diluted_valuation']) == 0 ? '∞' : readableNumber(coingeckoREQ[i]['fully_diluted_valuation']),
            readableNumber(coingeckoREQ[i]['market_cap']/coingeckoREQ[i]['fully_diluted_valuation']) == 0 ? '∞': readableNumber(coingeckoREQ[i]['market_cap']/coingeckoREQ[i]['fully_diluted_valuation']),
            readableNumber(coingeckoREQ[i]['max_supply']) == 0 ? '∞' :  readableNumber(coingeckoREQ[i]['max_supply'])
            ])
    }
    console.log(table.toString())


}


export {topMC}