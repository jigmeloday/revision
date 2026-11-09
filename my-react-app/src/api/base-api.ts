export const FetchAPI = async (url: string, method: string, body?: BodyInit | undefined | null ) => {
  const baseURL = "http://localhost:3000"
  try {
    const response = await fetch(`${baseURL}/api/${url}`, {
      method,
      body,
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json().catch(() => null)

    if(!response.ok) {
      return { data: null, error: json.message  }
    }
    return { data: json, error: null }

  } catch {
    console.log('err')
  }
}