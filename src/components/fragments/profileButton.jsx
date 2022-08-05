import { HiDownload } from 'react-icons/hi'

export const ProfileButton = () => {
  return (
    <div className="flex w-full mb-10 text-sm font-medium">
      <button className="bg-button text-button py-3 rounded-lg mr-4 w-full flex justify-center items-center">Download CV <HiDownload className="ml-2"/></button>
      <button className="bg-button2 text-subtitle py-3 rounded-lg w-full">Contact me</button>
    </div>
  )
}

export const ProfileMenu = () => {
  return (
    <div className="flex w-full p-2 bg-button2 rounded-lg mb-10 text-sm font-medium">
      <button className="bg-button3 text-subtitle py-3 rounded-lg mr-4 w-full flex justify-center items-center">Portfolio</button>
      <button className="bg-button2 text-subtitle py-3 rounded-lg w-full">Skills</button>
    </div>
  )
}