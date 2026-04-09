
import type  { CoinData } from "../../types/api.types.ts"

export async function fetchCryptoPrices(): Promise<CoinData[]> {
  const res = await fetch("/api/crypto/getPrices")
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = await res.json()
  return json.data
}