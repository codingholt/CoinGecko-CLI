import acsiichart from 'asciichart'
import Table  from 'cli-table3';
import { client } from "../client/index.js";




async function makeChart(coin, days){
    const coingeckoREQ = await client.coinIdMarketChart({

        id: coin,
        vs_currency: 'usd',
        days: days,
    })
    let prices = coingeckoREQ['prices']

    let priceArr = [];
    prices.forEach(i => (priceArr.push(i[1])))

   const table = new Table({
       head: [coin]
   })
   console.log(`${coin} chart last ${days} days`)
   console.log((await acsiichart).plot(priceArr, { height: 40}))
 

}

export {makeChart}