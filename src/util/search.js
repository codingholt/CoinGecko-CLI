import Axios from 'axios'
import { client } from "../client/index.js";

async function search(coin){

    const req = await client.search({
        query: coin
    })


    return req['coins'][0]['id']
}


export{search}