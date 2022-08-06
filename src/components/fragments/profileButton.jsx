import { HiDownload } from 'react-icons/hi'

export const ProfileButton = () => {
  return (
    <div className="flex w-full lg:w-1/2 mb-10 text-sm md:text-lg font-medium">
      <button className="bg-button hover:bg-buttonhov duration-300 ease-in-out text-button py-3 rounded-lg mr-4 w-full flex justify-center items-center">Download CV <HiDownload className="ml-2"/></button>
      <button className="bg-button2 hover:bg-button2hov hover:text-title duration-300 ease-in-out text-subtitle py-3 rounded-lg w-full">Contact me</button>
    </div>
  )
}

export const ProfileMenu = () => {
  return (
    <div className="flex w-full lg:w-4/5 p-2 bg-button2 rounded-lg mb-10 text-sm md:text-lg font-medium">
      <button className="bg-button3 hover:text-title duration-300 ease-in-out text-subtitle py-3 rounded-lg mr-4 w-full flex justify-center items-center">Portfolio</button>
      <button className="bg-button2 text-subtitle py-3 rounded-lg w-full">Skills</button>
    </div>
  )
}