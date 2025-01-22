import { createContext } from 'react'

const CartContext = createContext({
  cartItems: {},
  addToCart: () => {},
  getTotalItems: () => 0,
})

export default CartContext
