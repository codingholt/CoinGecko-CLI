import { client } from '../src/client/index.js';
import fs from 'fs'



async function coinList(){
    const coinList = await client.coinList();

    fs.writeFile(

        'coins.json',
    
        JSON.stringify(coinList),
    
        function (err) {
            if (err) {
                console.error('Crap happens');
            }
        }
    );


}



export { coinList }
