import { useRef, useEffect } from "react"
import { prices } from "../assets/market_chart"
import { normalize, getMinMax } from "../utils/math"



export function CanvasComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const padding = 22
    const width = 844.5
    const height = 165

    const overlayRef = useRef<HTMLCanvasElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = overlayRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.clearRect(0, 0, width, height); // Rensa föregående linjer
        ctx.lineWidth = 0.5;
        ctx.setLineDash([1, 1]); // [strecklängd, mellanrum]
        ctx.strokeStyle = "rgba(255, 255, 255, 0.27)";
        // Vertikal linje
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        // Horisontell linje
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const amount = 90
        const drawWidth = width - padding * 2  // drawable area
        const pos = drawWidth / (amount - 1)
        const line: { x: number, y: number } = {
            x: pos,
            y: height
        }
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        // draw stuff here
        const prices_minmax: { min: number, max: number } = getMinMax(prices)
        const firstValue = normalize(prices[0][1], prices_minmax.min, prices_minmax.max) * height
        ctx.lineWidth = 1.25
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

    return (
        <div className="canvas-wrap" style={{ position: "relative", width, height }}>
            <canvas
                className="canvas-graph"
                ref={canvasRef}
                width={width}
                height={height}
            />
            <canvas
                ref={overlayRef}
                width={width}
                height={height}
                style={{ position: "absolute", top: 0, left: 0 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    const ctx = overlayRef.current?.getContext("2d");
                    ctx?.clearRect(0, 0, width, height); // Rensa när musen lämnar
                }}
            />
        </div>
    );
}