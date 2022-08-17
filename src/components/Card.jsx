import porto1 from '../assets/card.png'
import porto2 from '../assets/card2.png'
import porto3 from '../assets/card3.png'
import porto4 from '../assets/card4.png'
import porto5 from '../assets/card5.png'

const Card = () => {
  return (
    <div className="flex flex-col lg:w-9/12 lg:flex-wrap gap-y-4 lg:flex-row w-full mb-20">
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1">
          <a href="https://mecode.vercel.app" target="_blank">
            <img className="w-full rounded-lg" src={porto5} alt="card" />
          </a>
        </div>
        <div className="lg:flex-1">
          <a href="https://rupia.vercel.app/" target="_blank">
            <img className="w-full rounded-lg" src={porto2} alt="card" />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 order-2">
          <a href="https://authentication-page-pujiragil.vercel.app/" target="_blank">
            <img className="w-full rounded-lg" src={porto4} alt="card" />
          </a>
        </div>
        <div className="lg:flex-1 order-1">
          <a href="https://pujiragil.github.io/ingfopc/" target="_blank">
            <img className="w-full rounded-lg" src={porto3} alt="card" />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 order-2">
          {/* <img className="w-full rounded-lg" src={porto5} alt="card" /> */}
        </div>
        <div className="lg:flex-1 order-1">
          <a href="https://hitech-pujiragil.vercel.app/" target="_blank">
            <img className="w-full rounded-lg" src={porto1} alt="card" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card