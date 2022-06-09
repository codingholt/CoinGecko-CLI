import Fuse from 'fuse.js'

import { coins } from './coins.js'

async function legacy_search(coin){
  const options = {
    includeScore: true,
    // Search in `name` and in `symbol` array
    keys: ['id','name', 'symbol']
  }

  const fuse = new Fuse(coins, options)

  const result = fuse.search(coin)
  
  coin = result[0]['item']['id']

  return coin

}

export {legacy_search}

