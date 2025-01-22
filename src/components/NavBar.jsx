import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CartContext from '@/contexts/CartContext'

export default function NavBar() {
  const { getTotalItems } = useContext(CartContext)

  return (
    <nav className='flex h-24 items-center justify-between bg-slate-500 px-4 text-white'>
      {/* Home Logo */}
      <div>
        <Link to='/'>ShopApp</Link>
      </div>

      {/* Nav Links */}
      <ul className='flex'>
        <li className='p-4'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4'>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>

      {/* Cart Section */}
      <div className='flex items-center space-x-4 text-white'>
        <div className='flex items-center'>
          <ShoppingCart className='h-5 w-5 text-white' />
          {getTotalItems() > 0 && (
            <span className='bg-primary ml-2 rounded-full px-2 py-0.5 text-sm text-red-500'>
              {getTotalItems()}
            </span>
          )}
        </div>
        <Button
          className='text-white'
          onClick={() => alert('Checkout coming soon!')}
        >
          Checkout
        </Button>
      </div>
    </nav>
  )
}
