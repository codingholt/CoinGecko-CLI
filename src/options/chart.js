import acsiichart from 'asciichart'
import { client } from "../client/index.js";
import {composeNewInterval} from '../util/composeNewInterval.js'



async function makeChart(coin, days){

    function calcInterval(days){
       
    /*    
        claculate the interval we need in hours
    */

        const datapoints = 150
        const hours = 24 * days
        const interval = datapoints/hours

/*
this doesnt make any sense?
        //convert the interval to min if less than 1h
        if(interval < 1){
            console.log( `${interval*60}m`)
            return `${interval*60}m`;
        }

        //convert the interval to days if more than 24h
        if(interval >= 24){
            console.log( `${interval*24}d`)
            return `${interval*24}d`; 
        }
*/
        console.log(`${interval}h`)
        return `${interval}h`

    }
    
    const coingeckoREQ = await client.coinIdMarketChart({
        id: coin,
        vs_currency: 'usd',
        days: days,
        interval: 'weekly',
    })


    const prices = coingeckoREQ['prices']
    console.log(prices.length)
    let priceArr = [];
    prices.forEach(i => (priceArr.push(i[1])))


   console.log(`${coin} chart last ${days} days`)
   console.log((await acsiichart).plot(priceArr, { height: 15}))
 

}

export {makeChart}