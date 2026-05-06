import { useState, useEffect, useRef } from "react"
import Spinner from "../components/Spinner"
import { useGetPrices } from "../hooks/useGetPrices"
import { Dashbar } from "./Dashbar"
import type { CoinData } from "../types/api.types"
import { ContentFilters } from "./ContentFilters"

function CoinRow({ coin, portfolioView }: { coin: CoinData, portfolioView: boolean }) {
    const [flash, setFlash] = useState(false)
    const prevPrice = useRef(coin.quote.USD.price)

    useEffect(() => {
        if (coin.quote.USD.price !== prevPrice.current) {
            prevPrice.current = coin.quote.USD.price
            setFlash(true)
            setTimeout(() => setFlash(false), 2000)
        }
    }, [coin.quote.USD.price])

    return (
        <div className="itemRow" key={coin.id} style={{ backgroundImage: `url(https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png` }}>
            <p>{coin.cmc_rank}</p>
            <img className="coin" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
            <div className="item-info">
                <div className="coin-row">{portfolioView ? <div className="portfolioItem">Owned: {checkAmount(coin.id)}</div> : ""}</div><p>{coin.name}<span>{coin.symbol}</span></p>
                <p className={flash ? "price-flash price" : "price"}>${coin.quote.USD.price.toFixed(4)}</p></div>

        </div>
    )
}
// coin db for testing
const coinDb = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
]
function checkOwned(coinId: number) {
    return coinDb.find(coin => coin.id === coinId) !== undefined;
}
function checkAmount(coinId: number) {
    return coinDb.find(coin => coin.id === coinId)?.amount;
}
export function Content() {
    const { data, loading, fetchPrices } = useGetPrices()
    const [listView, setListView] = useState(false);
    const [search, setSearch] = useState("");
    const [portfolioView, setPortfolioView] = useState<boolean>(false);

    useEffect(() => {
        fetchPrices() // fetch immediately on mount
        const interval = setInterval(fetchPrices, 30000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className={listView ? "content list" : "content"}>
                <div className="btn-wrap">
                    <button onClick={fetchPrices} disabled={loading}>
                        {loading ? <Spinner /> : <p>Get prices</p>}
                    </button>
                </div>
                <Dashbar data={data} />
                <ContentFilters listView={listView} setListView={setListView} search={search} setSearch={setSearch} portfolioView={portfolioView} setPortfolioView={setPortfolioView} />
                {data && data.filter(coin => portfolioView ? checkOwned(coin.id) : true)
                    .filter(coin =>
                        coin.name.toLowerCase().includes(search.toLowerCase()) ||
                        coin.symbol.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(coin => <CoinRow key={coin.id} coin={coin} portfolioView={portfolioView} />)
                }
            </div>
        </>
    )
}