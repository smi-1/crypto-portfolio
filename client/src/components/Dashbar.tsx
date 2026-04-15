import { useState } from "react"
import Spinner from "../components/Spinner"
import { useGetPrices } from "../hooks/useGetPrices"
import type { CoinData } from "../types/api.types"
import { formatMarketCap } from "../utils/formatters"
import { CanvasComponent } from "../components/dash-canvas-graph"

interface DashItemProps {
    label: string
    value: string
}

interface DashbarProps {
    data: CoinData[] | null
}

function DashItem({ label, value }: DashItemProps) {
    return (
        <div className="dash-item">
            <p className="dash-label">{label}</p>
            <p className="dash-value">{value}</p>
        </div>
    )
}

export function Dashbar({ data }: DashbarProps) {
    //const { data, loading, fetchPrices  } = useGetPrices()
    const totalMarketCap = data?.reduce((sum, coin) => sum + coin.quote.USD.market_cap, 0)
    return (
        <>
            <div className="dashbar">
                
                <DashItem label="Market cap" value={totalMarketCap ? formatMarketCap(totalMarketCap) : "—"} />
                <DashItem label="Volume 24h" value="$48B" />
                <DashItem label="Active currencies" value="2941" />
                <CanvasComponent />
            </div>
        </>
    )
}