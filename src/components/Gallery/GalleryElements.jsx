import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import gallery5 from '../../assets/gallery-5.png'
import gallery6 from '../../assets/gallery-6.png'

export const GalleryWrap = () => {
  return (
    <div className="grid lg:w-full grid-cols-1 md:grid-cols-3 grid-rows-auto gap-y-4 md:gap-4 lg:gap-6">
      <Image/>
    </div>
  )
}

export const Image = () => {
  const imageList = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

  return (
    imageList.map((image, index) => (
      <img className="w-[366px] lg:w-full rounded" key={index} src={image} alt="image" />
    ))
  )
}