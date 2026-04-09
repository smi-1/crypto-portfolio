import { Request, Response } from "express"
import { increment } from "../utils/counter"


const CMC_API_KEY = process.env.CMC_API_KEY;
if (!CMC_API_KEY) throw new Error("CMC_API_KEY is not defined");
//const COINGECKO_URL = process.env.COINGECKO_URL;

export function handleClick(req: Request, res: Response) {
    const id = req.params.id as string
    const count = increment(id)
    res.json({
      message: `Klickade på ${id}`,
      num: Math.floor(Math.random() * 10000),
      count,
    })
}
export async function getPrices(req: Request, res: Response) {
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
    const response = await fetch(url, {
        headers: {
            "X-CMC_PRO_API_KEY": CMC_API_KEY ?? "",
            "Accept": "application/json"
        } as HeadersInit
    });
    const data = await response.json()
    console.log(data)
    res.json(data)
}