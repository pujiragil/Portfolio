import profile from '../../assets/profile.png'
import { BsTwitter, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"

export const Profile = () => {
  return (
    <div className="w-32 h-32 bg-white rounded-full p-2 border-4 border-profile mb-10">
      <img src={profile} alt="profile" />
    </div>
  )
}

export const ProfileInformation = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center mb-10">
      <h1 className="text-title text-3xl font-medium mb-3">Puji Ragil</h1>
      <p className="text-subtitle text-base text-base mb-3">Frontend Engineer</p>
      <div className="flex text-subtitle justify-center items-center">
        <BsGithub className="mr-6 cursor-pointer text-lg"/>
        <BsTwitter className="mr-6 cursor-pointer text-lg"/>
        <BsLinkedin className="mr-6 cursor-pointer text-lg"/>
        <BsYoutube className="cursor-pointer text-lg"/>
      </div>
    </div>
  )
}

export const ProfileFact = () => {
  return (
    <div className="flex text-sm justify-center items-center mb-10">
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-lg">1</h2>
        <p className="text-subtitle">Year of work experience</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-lg">50+</h2>
        <p className="text-subtitle">Client side projects</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact text-lg">20+</h2>
        <p className="text-subtitle">Personal side projects</p>
      </div>
    </div>
  )
}