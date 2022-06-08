import { client }from "../client/index.js";
import {default_vs_currency, default_symbol} from '../util/getDefaults.js'
import { readableNumber } from "../util/readableNumbers.js";
import { makeChart } from "../imports.js";
import Table from 'cli-table3';
import cfonts from 'cfonts';
import chalk from "chalk";

async function coinoverview(coin){

    const coingeckoREQ = await client.coinId({
        id: coin,
        developer_data: true,
        community_data: true,
        tickers: false,
    })

    //ascii art
    const coin_name = coingeckoREQ['name']
    cfonts.say(coin_name, {	gradient: ['#bdc3c7', '#2c3e50'],
    transitionGradient: true,
    independentGradient: true});

    //Chart
    await makeChart(coin, 5, 10, false)

    const price  =  coingeckoREQ['market_data']['current_price'][default_vs_currency]
    //market cap / fdv / max supply
    const mc = readableNumber(coingeckoREQ['market_data']['market_cap'][default_vs_currency]) + default_symbol
    const mc_rank = coingeckoREQ['market_cap_rank']
    const fdv = readableNumber(coingeckoREQ['market_data']['fully_diluted_valuation'][default_vs_currency]) + default_symbol
    const mc_fdv_ratio = coingeckoREQ['market_data']['market_cap'][default_vs_currency]/coingeckoREQ['market_data']['fully_diluted_valuation'][default_vs_currency];
    const circ_supply = coingeckoREQ['market_data']['circulating_supply']
    const max_supply = coingeckoREQ['market_data']['max_supply'];

    //sentiment
    const bull_sentiment =  chalk.green(coingeckoREQ['sentiment_votes_up_percentage'] + ' %')
    const bear_sentiment =  chalk.red(coingeckoREQ['sentiment_votes_down_percentage'] + ' %')


    const table = new Table()


    table.push(
        {'Current Price': price },
        {'Rank': mc_rank},
        {'Market Cap' : mc},
        {'Cirulating Supply' : circ_supply},
        {'Maximum Supply': max_supply},
        {'Fully Diluted Valuation': fdv},
        {'Market Cap FDV ratio': mc_fdv_ratio},
        {'Bullish Sentiment': bull_sentiment},
        {'Bearish Sentiment': bear_sentiment}
    )

    return console.log(table.toString())
}

export {coinoverview}