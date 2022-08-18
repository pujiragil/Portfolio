import arrow from '../../assets/arrow.svg'
import featured1 from '../../assets/featured-1.png'
import featured2 from '../../assets/featured-2.png'
import featured3 from '../../assets/featured-3.png'
import featured4 from '../../assets/featured-4.png'

export const FeaturedIcon = () => {
  return (
    <div className="flex justify-start items-center gap-x-4 text-primary text-lg font-semibold mb-10">
      <img className="h-8" src={arrow} alt="arrow" />
      <p className="uppercase">featured work</p>
    </div>
  )
}

export const FeaturedImages = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-6">
      <div className="grid w-full grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-y-6 md:gap-x-6">
        <div className="flex flex-col gap-y-6">
          <Image imgLink={featured1} />
          <Image imgLink={featured2} />
        </div>
        <div className="flex flex-col gap-y-6 md:pt-16">
          <Image imgLink={featured3} />
          <Image imgLink={featured4} />
        </div>
      </div>
    </div>
  )
}

const Image = ({ imgLink }) => {
  const after = "after:absolute after:inset-0 after:bg-[#00000099] after:content-['InVersion'] after:text-[28px] after:transition-all after:duration-500 hover:after:transition-all hover:after:duration-500 after:text-primary after:font-bold after:flex after:opacity-0 hover:after:opacity-100 after:rounded after:justify-center after:items-center after:ease-in-out hover:after:ease-in-out"
  return (
    <div className={`h-[600px] lg:h-[500px] relative rounded cursor-pointer ${after}`}>
      <img className="object-cover h-full w-full rounded" src={imgLink} alt="featured" />
    </div>
  )
}