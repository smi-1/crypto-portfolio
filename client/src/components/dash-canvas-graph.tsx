import { useRef, useEffect } from "react"
import { prices } from "../assets/market_chart"
import { normalize, getMinMax } from "../utils/math"

export function CanvasComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const padding = 22
    const width = 844.5
    const height = 165
    useEffect(() => {
        const canvas = canvasRef.current
        const amount = 90
        const drawWidth = width - padding * 2  // drawable area
        const pos = drawWidth / (amount - 1) 
        const line: {x: number, y: number} = {
            x:pos,
            y:height
        }
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        // draw stuff here
        const prices_minmax: { min: number, max: number} = getMinMax(prices)
        const firstValue = normalize(prices[0][1], prices_minmax.min, prices_minmax.max) * height
        ctx.lineWidth = 1.5
        ctx.strokeStyle = "#09ff00ce"
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        ctx.moveTo(padding, height - firstValue)
        
        for (let i = 1; i < amount; i++) {
            const value = normalize(prices[i][1], prices_minmax.min, prices_minmax.max) * height
            const x = padding + i * pos           // end at width - padding
            ctx.lineTo(x, height - value)
        }
        ctx.stroke()
    }, [])

    return <canvas className="canvas-graph" ref={canvasRef} width={width} height={height} />
}