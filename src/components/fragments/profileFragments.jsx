import profile from '../../assets/profile.jpg'
import { BsTwitter, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"

export const Profile = () => {
  return (
    <div className="w-36 md:w-44 h-36 md:h-44 bg-white rounded-full p-1 border-4 border-profile mb-10">
      <img src={profile} className="w-full h-full object-cover rounded-full grayscale" alt="profile" />
    </div>
  )
}

export const ProfileInformation = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center mb-10">
      <h1 className="text-title text-3xl font-medium mb-3">Puji Ragil</h1>
      <p className="text-subtitle tracking-wider text-base md:text-lg text-base mb-3">Frontend Engineer</p>
      <div className="flex text-subtitle justify-center items-center">
        <BsGithub className="mr-6 cursor-pointer text-xl hover:text-title duration-300 ease-in-out"/>
        <BsTwitter className="mr-6 cursor-pointer text-xl hover:text-title duration-300 ease-in-out"/>
        <BsLinkedin className="mr-6 cursor-pointer text-xl hover:text-title duration-300 ease-in-out"/>
        <BsYoutube className="cursor-pointer text-xl hover:text-title duration-300 ease-in-out"/>
      </div>
    </div>
  )
}

export const ProfileFact = () => {
  return (
    <div className="flex text-sm md:text-lg justify-center items-center mb-10">
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-xl">1</h2>
        <p className="text-subtitle">Year of work experience</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-xl">50+</h2>
        <p className="text-subtitle">Client side projects</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-xl">20+</h2>
        <p className="text-subtitle">Personal side projects</p>
      </div>
    </div>
  )
}