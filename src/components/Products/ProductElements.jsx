import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'

export const ProductImages = () => {
  return (
    <div className="grid md:w-full grid-cols-1 md:grid-cols-3 grid-auto-rows gap-y-6 md:gap-6">
      <Images/>
    </div>
  )
}

const Images = () => {
  const images = [product1, product2, product3]
  return (
    images.map((image, index) => (
      <img className="md:w-full" key={index} src={image} alt="image" />
    ))
  )
}