import { client } from '../client/index.js';
import elasticlunr from 'elasticlunr'


async function coinList(){
    const coinList = await client.coinList();
    var index = elasticlunr(function () {
        this.addField('title');
        this.addField('body');
        this.setRef('id');
        this.saveDocument(true);
    });
    for(let i = 0; i < coinList.length; i++){
    coinList[i]['id'] = {
            "name": coinList[i]['name'],
            "symbol": coinList[i]['symbol']
        }
    index.addDoc(coinList[i]['id']);
    console.log(`added ${coinList[i]['id']}`)
    }

    const res = index.search("btc");
    console.log(res)


}

coinList()