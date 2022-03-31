import { client } from '../src/client/index.js';
import fs from 'fs'



async function coinList(){
    const coinList = await client.coinList();



}



export { coinList }
