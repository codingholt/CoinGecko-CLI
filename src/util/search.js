import { client } from '../client/index.js';
import elasticlunr from 'elasticlunr'
import path from 'path';
import fs from 'fs'

async function coinList(){
    const coinList = await client.coinList();

    var index = elasticlunr(function () {
        this.addField('symbol');
        this.addField('name');
        this.setRef('id');
    });
    const PATH='./coins.json'
    fs.readFile(PATH, function (err, data) {
        if (err) throw err;
      
        var raw = JSON.parse(data);
      
        var coins = raw.coins.map(function (c) {
          return {
            id: c.id,
            title: c.name,
            body: c.symbol,
          };
        });
      
        coins.forEach(function (question) {
          index.addDoc(question);
        });
      
        fs.writeFile('./example/example_index.json', JSON.stringify(index), function (err) {
          if (err) throw err;
          console.log('done');
        });

    
    });



}

coinList()