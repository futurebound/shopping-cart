import { useState } from 'react'
import CartContext from '@/contexts/CartContext'

/**
 * Passing "through" the children
 */
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({})

  const addToCart = (productId, quantity) => {
    setCartItems((prev) => {
      const currentQty = prev[productId] || 0 // default 0 for empty cart
      const newQty = currentQty + quantity
      console.log(
        `added productId: ${productId} quantity: ${quantity} to cart, newQty: ${newQty}`
      )

      return {
        ...prev,
        [productId]: newQty,
      }
    })
  }

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0)
  }

  //
  const contextValue = {
    cartItems,
    addToCart,
    getTotalItems,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
