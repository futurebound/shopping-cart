import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const { id, title, price, image, description } = product

  const handleIncrement = () => {
    setSelectedQuantity((prev) => Math.min(prev + 1, 99))
  }

  const handleDecrement = () => {
    setSelectedQuantity((prev) => Math.max(prev - 1, 1))
  }

  const handleAddToCart = () => {
    onAddToCart(id, selectedQuantity)
  }

  return (
    <Card className='flex h-full flex-col'>
      <CardContent className='flex-grow p-4'>
        {/* Product Image */}
        <div className='relative mb-4 aspect-square overflow-hidden rounded-md bg-gray-50'>
          <img
            src={image}
            alt={title}
            className='h-full w-full object-contain p-4'
          />
        </div>

        {/* Product Details */}
        <div className='space-y-2'>
          <h3 className='line-clamp-2 text-lg font-semibold' title={title}>
            {title}
          </h3>
          <p className='line-clamp-2 text-sm text-gray-600' title={description}>
            {description}
          </p>
          <p className='text-lg font-semibold'>${price.toFixed(2)}</p>
        </div>
      </CardContent>

      <CardFooter>
        <div className='flex w-full items-center justify-between'>
          {/* Quantity Controls */}
          <div className='flex items-center gap-2'>
            <Button
              size='icon'
              variant='outline'
              onClick={handleDecrement}
              disabled={selectedQuantity === 0}
            >
              <MinusIcon className='h-4 w-4' />
            </Button>
            <span className='w-8 text-center'>{selectedQuantity}</span>
            <Button
              size='icon'
              variant='outline'
              onClick={handleIncrement}
              disabled={selectedQuantity >= 99}
            >
              <PlusIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
