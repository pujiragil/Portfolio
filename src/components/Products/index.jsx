import React from 'react'
import { ProductImages } from './ProductElements'

const Product = () => {
  return (
    <div className="flex flex-col justify-center items-center font-manrope text-primary px-6 mb-60">
      <h1 className="text-3xl font-bold mb-8">My Products</h1>
      <ProductImages/>
    </div>
  )
}

export default Product