const counters: Record<string, number> = {}

export function increment(id: string): number {
  counters[id] = (counters[id] ?? 0) + 1
  return counters[id]
}

export function getCount(id: string): number {
  return counters[id] ?? 0
}
