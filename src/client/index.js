import { CoinGeckoClient } from 'coingecko-api-v3';

const client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
});


export { client }