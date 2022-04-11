import acsiichart from 'asciichart'
import { client } from "../client/index.js";




async function makeChart(coin, days){

    function calcInterval(days){
        const datapoints = 150
    /*    
        something * days =  150

        3*2 =6


        convert to min 
    */
        const hours = 24 * days
        const interval = datapoints/hours

        if(interval < 1){
            console.log( `${interval*60}m`)
        }
        console.log(`${interval}h`)
        return `${interval}h`

    }
    
    const coingeckoREQ = await client.coinIdMarketChart({

        id: coin,
        vs_currency: 'usd',
        days: days,
        interval: '15min'
    })
    const prices = coingeckoREQ['prices']
    console.log(prices.length)
    let priceArr = [];
    prices.forEach(i => (priceArr.push(i[1])))


   console.log(`${coin} chart last 150 datapoints`)
   console.log((await acsiichart).plot(priceArr, { height: 15}))
 

}

export {makeChart}