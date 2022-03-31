import Fuse from 'fuse.js'

import { coins } from './coins.js'

async function search(coin){
  const options = {
    includeScore: true,
    // Search in `name` and in `symbol` array
    keys: ['name', 'symbol']
  }

  const fuse = new Fuse(coins, options)

  const result = await fuse.search(coin)
  if(result[0]['score'] > 1){
  coin = result[0]['item']['id']
  return coin
  }else{
    console.log('\nCoin not found in database please use the ticker as listed on coingecko. \n\nIf it still doesnt work please open an issue here:\n    \n  https://github.com/codingholt/CoinGecko-CLI/issues \n \nERROR COIN NOT FOUND')
    process.exit()
  }
}

export {search}

