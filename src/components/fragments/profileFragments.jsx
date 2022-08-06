import profile from '../../assets/profile.jpg'
import { BsTwitter, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"

export const Profile = () => {
  return (
    <div className="w-36 md:w-44 h-36 md:h-44 bg-white rounded-full p-1 border-4 border-profile mb-10">
      <img src={profile} className="w-full h-full object-cover rounded-full grayscale hover:drop-shadow-yellow duration-300 ease-in-out cursor-pointer" alt="profile" />
    </div>
  )
}

export const ProfileInformation = () => {
  return (
    <div className="flex justify-center items-center md:items-start flex-col text-center mb-10">
      <h1 className="text-title dark:text-dtitle text-2xl font-medium mb-3">Puji Ragil Setyo</h1>
      <p className="text-subtitle dark:text-dsubtitle tracking-wider text-base md:text-lg text-base mb-3">Frontend Engineer</p>
      <div className="flex text-subtitle  dark:text-dsubtitle justify-center items-center">
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
    <div className="flex text-sm md:text-lg md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-2/5 md:gap-x-2 justify-center items-center mb-10">
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">1</h2>
        <p className="text-subtitle dark:text-dsubtitle">Year of work experience</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">50+</h2>
        <p className="text-subtitle dark:text-dsubtitle">Client side projects</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">20+</h2>
        <p className="text-subtitle dark:text-dsubtitle">Personal side projects</p>
      </div>
    </div>
  )
}