const BASE_URL = 'https://fakestoreapi.com'

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
}
