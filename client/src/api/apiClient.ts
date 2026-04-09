const BASE_URL = import.meta.env.VITE_API_URL ?? ""

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null)
    throw new Error(errorBody?.message ?? `HTTP ${res.status}`)
  }

  return res.json()
}

export async function postClick(id: string) {
  return request<import("../types/api.types").ClickResponse>(`/api/${id}/click`, {
    method: "POST",
  })
}
