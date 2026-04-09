
export interface CoinData {
  id: number
  name: string
  symbol: string
  cmc_rank: string
  quote: {
      USD: {
          price: number
          market_cap: number
      }
  }
}