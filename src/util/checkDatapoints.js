import {composeNewInterval} from './composeNewInterval.js';
import {chart_dataponts} from './getDefaults.js'

async function checkDatapoints(priceArr){
    const length = priceArr.length
//if the array is longer than 150 datapoints, make it exactly or less than 150 datapoints
    if(length > chart_dataponts){
        const interval = await Math.ceil(length/150)
        return composeNewInterval(priceArr, interval)
    }
    return priceArr
}
export {checkDatapoints}

/*


300
/2
150



*/