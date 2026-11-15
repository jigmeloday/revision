export const FetchAPI = async (url: string, method: string, body?: unknown ) => {
  const baseURL = "http://localhost:3000"
  try {
    const response = await fetch(`${baseURL}/api/${url}`, {
      method,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json().catch(() => null)

    if(!response.ok) {
      return { data: null, error: json?.message ?? `Request failed (${response.status})` }
    }
    return { data: json, error: null }

  } catch {
    return { data: null, error: 'Cannot reach the server' }
  }
}