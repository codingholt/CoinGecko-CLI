import fs from 'fs';
import toml from 'toml'

const data =  toml.parse(fs.readFileSync('./src/util/config.toml'));
const default_vs_currency = data.vs_currency.default
const default_symbol = data.vs_currency.default_symbol

export {default_vs_currency, default_symbol}