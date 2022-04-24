import acsiichart from 'asciichart'
import { client } from "../client/index.js";
import {default_vs_currency} from '../util/getDefaults.js'
import {checkDatapoints} from '../util/checkDatapoints.js'



async function makeChartMC(coin, days){
    const coingeckoREQ = await client.coinIdMarketChart({
        id: coin,
        vs_currency: default_vs_currency,
        days: days,
    })

    const mc = coingeckoREQ['market_caps']
    const mcArr = [];
    mc.forEach(i => (mcArr.push(i[1])))

    const Arr = await checkDatapoints(mcArr)

    console.log(`${coin} market cap chart last ${days} days`)
    console.log((await acsiichart).plot(Arr, { height: 15}))
 

}

export {makeChartMC}