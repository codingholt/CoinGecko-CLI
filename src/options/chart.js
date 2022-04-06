// import gnuplot from 'gnu-plot'
// import { client } from "../client/index.js";




async function makeChart(coin, days){
    const coingeckoREQ = await client.coinIdMarketChart({
    
        id: coin,
        vs_currency: 'usd',
        days: days,
    })

    gnuplot().plot([{
        data:[coingeckoREQ['prices'][0],coingeckoREQ['prices'][1]]
    }])
    
}

export {makeChart}