import React from 'react'
import CardPic from '../assets/card1.png'

const Card = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full mb-5">
        <img className="w-full" src={CardPic} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full" src={CardPic} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full" src={CardPic} alt="card" />
      </div>
      <div className="flex w-full mb-5">
        <img className="w-full" src={CardPic} alt="card" />
      </div>
    </div>
  )
}

export default Card