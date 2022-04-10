import acsiichart from 'asciichart'
import { client } from "../client/index.js";




async function makeChart(coin, days){

    // function calcInterval(days){
    //     const datapoints = 150
    //     const maxDay =  datapoints % days
    //     console.log(maxDay)
    //     return maxDay

    // }
    
    const coingeckoREQ = await client.coinIdMarketChart({

        id: coin,
        vs_currency: 'usd',
        days: days,
        // interval: calcInterval(days)
    })
    let prices = coingeckoREQ['prices']

    let priceArr = [];
    prices.forEach(i => (priceArr.push(i[1])))

 
   const sliced = priceArr.slice(-150)
   console.log(`${coin} chart last 150 datapoints`)
   console.log((await acsiichart).plot(sliced, { height: 15}))
 

}

export {makeChart}