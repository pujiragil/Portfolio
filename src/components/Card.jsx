import porto1 from '../assets/card.png'
import porto2 from '../assets/card2.png'

const Card = () => {
  return (
    <div className="flex flex-col lg:w-4/5 lg:flex-wrap lg:gap-4 lg:flex-row w-full">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="lg:flex-1">
          <img className="w-full rounded-lg" src={porto1} alt="card" />
        </div>
        <div className="lg:flex-1">
          <img className="w-full rounded-lg" src={porto2} alt="card" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="lg:flex-1 order-2">
          <img className="w-full rounded-lg" src={porto2} alt="card" />
        </div>
        <div className="lg:flex-1 order-1">
          <img className="w-full rounded-lg" src={porto1} alt="card" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="lg:flex-1 order-2">
          <img className="w-full rounded-lg" src={porto2} alt="card" />
        </div>
        <div className="lg:flex-1 order-1">
          <img className="w-full rounded-lg" src={porto1} alt="card" />
        </div>
      </div>
    </div>
  )
}

export default Card