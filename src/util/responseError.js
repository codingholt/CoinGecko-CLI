import { search } from './search.js'

function checkErr(response){
    if(response.hasOwnProperty('error')) {
        console.error('COIN COULD NOT BE FOUND ON COINGECKO')
        process.exit();
}}

export {checkErr}