import fs from 'fs';

const { config } = JSON.parse(fs.readFileSync('./config.json'));

//set constants from config
const default_vs_currency = config['vs_currency']['default']
console.log(default_vs_currency)
const default_symbol = config['vs_currency']['default_symbol']
const chart_dataponts = config['chart']['max_datapoints']


//export constants
export {default_vs_currency, default_symbol, chart_dataponts}
