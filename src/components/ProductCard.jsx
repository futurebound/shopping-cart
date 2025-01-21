import React from 'react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'

const ProductCard = ({ product, quantity = 0 }) => {
  const { id, title, price, image, description } = product

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
    </Card>
  )
}

export default ProductCard
