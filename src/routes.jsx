import App from './App'
import ShopPage from './components/ShopPage'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
]

export default routes
