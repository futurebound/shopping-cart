import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

const ProductCard = ({ product, quantity = 0, onUpdateQuantity }) => {
  const { id, title, price, image, description } = product

  const handleIncrement = () => {
    onUpdateQuantity(id, 1)
  }

  const handleDecrement = () => {
    onUpdateQuantity(id, -1)
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
              disabled={quantity === 0}
            >
              <MinusIcon className='h-4 w-4' />
            </Button>
            <span className='w-8 text-center'>{quantity}</span>
            <Button
              size='icon'
              variant='outline'
              onClick={handleIncrement}
              disabled={quantity >= 99}
            >
              <PlusIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
