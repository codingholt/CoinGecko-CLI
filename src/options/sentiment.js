import { client } from "../client/index.js";
import { checkErr } from "../util/responseError.js";
import Table from "cli-table3";

async function sentiment(coin){
     const coingeckoREQ = await client.coinId({
         id:coin,
     })
     checkErr(coingeckoREQ)
}

export{sentiment}