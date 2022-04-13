import acsiichart from 'asciichart'
import { client } from "../client/index.js";
import {default_vs_currency} from '../util/getDefaults.js'
import {checkDatapoints} from '../util/checkDatapoints.js'



async function makeChart(coin, days){
    const coingeckoREQ = await client.coinIdMarketChart({
        id: coin,
        vs_currency: default_vs_currency,
        days: days,
    })

    const prices = coingeckoREQ['prices']
    const priceArr = [];
    prices.forEach(i => (priceArr.push(i[1])))

    const Arr = await checkDatapoints(priceArr)

    console.log(`${coin} chart last ${days} days`)
    console.log((await acsiichart).plot(Arr, { height: 15}))
 

}

export {makeChart}