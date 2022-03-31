import Fuse from 'fuse.js'
import { coins } from './coins.js'

async function search(coin){
  const options = {
    includeScore: true,
    // Search in `name` and in `symbol` array
    keys: ['name', 'symbol']
  }
  
  const fuse = new Fuse(coins, options)
  
  const result = fuse.search(coin)
  
  console.log(result)
}