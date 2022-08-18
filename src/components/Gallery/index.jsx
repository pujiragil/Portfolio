import { GalleryWrap } from "./GalleryElements"

const Gallery = () => {
  return (
    <div className="font-manrope text-primary flex flex-col px-6 justify-center items-center mb-[200px]">
      <h1 className="text-center font-bold text-3xl mb-8">Visual Explorations</h1>
      <GalleryWrap/>
    </div>
  )
}

export default Gallery