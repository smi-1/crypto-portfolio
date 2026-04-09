export const getMinMax = (prices: number[][]) => {
    const values = prices.map(([, price]) => price)
    return {
        min: Math.min(...values),
        max: Math.max(...values)
    }
}

export const normalize = (value: number, min: number, max: number) => {
    return (value - min) / (max - min)
}