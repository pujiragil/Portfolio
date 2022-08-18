import profile from '../../assets/profile.png'
import { AiOutlineMail } from 'react-icons/ai'

export const ProfilePic = () => {
  return (
    <div className="md:order-2 flex flex-1 justify-end items-center">
      <img className="w-60 md:w-80 lg:w-[400px] mb-16" src={profile} alt="profile" />
    </div>
  )
}

export const ProfileDesc = () => {
  return (
    <div className="flex flex-col md:order-1 text-center justify-center items-center md:justify-start md:text-left md:items-start md:w-1/2 lg:w-1/2 px-6 md:p-0">
      <h1 className="text-4xl lg:text-[64px] lg:leading-[70px] font-bold mb-5">Hi, I am Your Joko A Product Designer based in City.</h1>
      <p className="text-desc lg:text-2xl lg:w-4/5 font-medium font-lg mb-12 md:mb-16">I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.</p>
      <ProfileButton />
    </div>
  )
}

export const ProfileButton = () => {
  return (
    <button className="w-4/5 lg:w-[400px] md:w-9/12 flex gap-x-4 justify-center items-center bg-button text-lg font-medium text-white py-4 px-6 rounded border-none outline-none">
      <AiOutlineMail className="font-bold text-xl" />
      <span>joko@gmail.com</span>
    </button>
  )
}