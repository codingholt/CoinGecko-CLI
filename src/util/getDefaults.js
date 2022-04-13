import fs from 'fs';
import YAML from 'js-yaml';

// Load the YAML
const raw = fs.readFileSync("./src/util/config.yaml");
const data = YAML.load(raw);


//set constants from config
const default_vs_currency = data.vs_currency.default;
const default_symbol = data.vs_currency.default_symbol;
const chart_dataponts = data.chart.max_datapoints;


//export constants
export {default_vs_currency, default_symbol, chart_dataponts}


//  // Saved the YAML
// const yaml = YAML.dump(data);
// fs.writeFileSync("./src/util/config.yaml", yaml, function (err, file) {
//     if (err) throw err;
//     console.log("Saved!");
// });
