import { config } from './config.js'

//set constants from config
const default_vs_currency = config.vs_currency.default_currency
const default_symbol = config.vs_currency.symbol
const chart_dataponts = config.chart.max_datapoints


//export constants
export {default_vs_currency, default_symbol, chart_dataponts}
