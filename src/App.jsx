import NavBar from './components/NavBar'
import ShopPage from './pages/ShopPage'
import CartContextProvider from '@/providers/CartProvider'

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <main className='flex-grow'>
          {/* <Routes>
          <Route path='/' element={<App />} />
          <Route
            path='/shop'
            element={<ShopPage cartItems={cartItems} onAddToCart={addToCart} />}
          />
        </Routes> */}
        </main>
      </CartContextProvider>
    </>
  )
}

export default App
