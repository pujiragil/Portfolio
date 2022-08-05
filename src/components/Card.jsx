import porto1 from '../assets/card.png'

const Card = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full mb-5">
        <img className="w-full rounded-lg" src={porto1} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full rounded-lg" src={porto1} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full rounded-lg" src={porto1} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full rounded-lg" src={porto1} alt="card" />
      </div>
    </div>
  )
}

export default Card