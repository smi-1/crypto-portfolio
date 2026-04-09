import { useRef, useEffect } from "react"
import { prices } from "../assets/market_chart"

export function CanvasComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const padding = 24
    const width = 838.5
    const height = 179
    useEffect(() => {
        
        const canvas = canvasRef.current

        const amount = 60
        const pos = (width / amount)
        const line: {x: number, y: number} = {
            x:pos,
            y:height
        }
        if (!canvas) return
        const ctx = canvas.getContext("2d")

        if (!ctx) return

        // draw stuff here
        const initVal = Math.random() * (height - padding * 2.5) + padding
        ctx.strokeStyle = "#09ff00ce"
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        ctx.moveTo(line.x, initVal)

        for (let i = 1; i < amount-1; i++) {
            console.log(prices[i])
            const value = Math.random() * (height - padding * 2.5) + padding
            const new_pos = i * pos+(padding / 2)
            ctx.lineTo(new_pos, height - value)
        }
        ctx.stroke()
    }, [])

    return <canvas className="canvas-graph" ref={canvasRef} width={width} height={height} />
}