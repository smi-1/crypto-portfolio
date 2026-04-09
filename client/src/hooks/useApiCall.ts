import { useState } from "react"
import { postClick } from "../api/apiClient"

export function useApiCall(id: string) {
  const [message, setMessage]   = useState("")
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)
  const [num, setNum]           = useState<number | "">("")
  const [dataCount, setDataCount] = useState<number | "">("")
  const [count, setCount]       = useState<Record<string, number>>({})
  const [animationKey, setAnimationKey] = useState(0)

  const handleClick = async () => {
    setLoading(true)
    setError(null)
    setMessage("")
    setNum("")

    try {
      const data = await postClick(id)
      setMessage(data.message)
      setNum(data.num)
      setDataCount(data.count)
      setAnimationKey(prev => prev + 1)
      setCount(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Okänt fel")
    } finally {
      setLoading(false)
    }
  }

  return { message, loading, error, num, count, animationKey, dataCount, handleClick }
}

export function apiGetPrices() {
      interface CoinData {
        id: number
        name: string
        symbol: string
        quote: {
            USD: {
                price: number
                market_cap: number
            }
        }
    }
    const [data, setData] = useState<{ data: CoinData[] } | null>(null)
    const [loading, setLoading] = useState(false)
    const handleClick = async () => {
        setLoading(true)
        setData(null)
        const res = await fetch("/api/crypto/getPrices")
        if (!res.ok) { throw new Error("WTF") }
        const apiData = await res.json()
        setData(apiData)
        setLoading(false)
    }
    return {data, loading, handleClick}
}