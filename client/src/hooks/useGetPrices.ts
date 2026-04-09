import { useState } from "react";
import { fetchCryptoPrices } from "../components/ApiCall/ApiCall.tsx";
import type { CoinData } from "../types/api.types.ts";
export function useGetPrices() {
  const [data, setData] = useState<CoinData[] | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchPrices = async () => {
    setLoading(true)
    //setData(null)
    try {
      const coins = await fetchCryptoPrices()
      setData(coins)
    } finally {
      setLoading(false)
    }
  }
  return { data, loading, fetchPrices }
}