import { useState, useEffect } from 'react'

import NavBar from './NavBar'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/utils/api'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      const data = await fetchProducts()
      setProducts(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems((prev) => {
      const currentQty = prev[productId] || 0
      const newQty = Math.max(0, currentQty + delta)

      // if quantity reaches 0, remove [productID] from the cart
      if (newQty === 0) {
        const { [productId]: _, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [productId]: newQty,
      }
    })
  }

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p className='text-lg'>Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p className='text-lg text-red-500'>Error: {error}</p>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='mb-6 text-2xl font-bold'>Shop</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cartItems[product.id] || 0}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
