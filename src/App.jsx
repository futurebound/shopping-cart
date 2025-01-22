import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import CartContextProvider from '@/providers/CartProvider'

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </CartContextProvider>
    </>
  )
}

export default App
