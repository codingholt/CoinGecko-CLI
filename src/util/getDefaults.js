import fs from 'fs';
import YAML from 'js-yaml';

// Get YAML or throw exception on error


  // Load the YAML
const raw = fs.readFileSync("./src/util/config.yaml");
const data = YAML.load(raw);



const default_vs_currency = data.vs_currency.default;
const default_symbol = data.vs_currency.default_symbol;

export {default_vs_currency, default_symbol}


//  // Saved the YAML
// const yaml = YAML.dump(data);
// fs.writeFileSync("./src/util/config.yaml", yaml, function (err, file) {
//     if (err) throw err;
//     console.log("Saved!");
// });
