import fs from 'fs';
import YAML from 'js-yaml';

async function config(changeVal, newVal){


try{
    // Load the YAML
    const raw = fs.readFileSync("./src/util/config.yaml");
    const data = await YAML.load(raw);

    if(changeVal === 'currency'){
        data.vs_currency.default = newVal
    }
    if(changeVal === 'symbol'){
        data.vs_currency.default_symbol = newVal
    }
    if(changeVal === 'chart_datapoints'){
        data.chart.max_datapoints = newVal
    }

    // Saved the YAML
    const yaml =  YAML.dump(data);
    fs.writeFileSync("./src/util/config.yaml", yaml, function (err, file) {
        if (err) throw err;
        console.log("Saved!");
    });
    console.log('New config: '+changeVal + ': ' + newVal)
}catch(err){
    console.log(err)
}

}

export {config}