import Axios from 'axios'
async function search(coin){
    const req = await Axios.get(`https://api.coingecko.com/api/v3/search?query=${coin}`, {method: 'GET',})


    return req['data']['coins'][0]['id']
}


export{search}