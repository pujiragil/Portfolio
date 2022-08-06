import { HiDownload } from 'react-icons/hi'

export const ProfileButton = () => {
  return (
    <div className="flex w-full lg:w-1/2 xl:w-2/5 2xl:w-2/5 mb-10 text-sm md:text-lg font-medium">
      <button className="bg-button dark:bg-dbutton hover:text-button2 dark:hover:bg-buttonhov duration-300 ease-in-out text-button py-3 rounded-lg mr-4 w-full flex justify-center items-center">Download CV <HiDownload className="ml-2"/></button>
      <button className="bg-white dark:bg-button2 hover:text-button2 dark:hover:bg-button2hov dark:hover:text-dtitle duration-300 ease-in-out text-title dark:text-dsubtitle py-3 rounded-lg w-full">Contact me</button>
    </div>
  )
}

export const ProfileMenu = () => {
  return (
    <div className="flex w-full lg:w-4/5 p-2 lg:p-3 bg-white dark:bg-button2 rounded-lg mb-10 text-sm md:text-lg font-medium">
      <button className="bg-button3 dark:bg-dbutton3 text-button2 dark:hover:text-dtitle duration-300 ease-in-out dark:text-dsubtitle py-3 rounded-lg mr-4 w-full flex justify-center items-center">Portfolio</button>
      <button className="bg-white dark:bg-button2 text-title dark:text-dsubtitle py-3 rounded-lg w-full">Skills</button>
    </div>
  )
}