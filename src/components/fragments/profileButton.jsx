import { HiDownload } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const ProfileButton = () => {
  return (
    <div className="flex w-full lg:w-1/2 xl:w-2/5 2xl:w-2/5 mb-10 text-sm md:text-lg font-medium">
      <button className="bg-button dark:bg-dbutton hover:text-button2 dark:hover:bg-buttonhov duration-300 ease-in-out text-button py-3 rounded-lg mr-4 w-full flex justify-center items-center">Download CV <HiDownload className="ml-2"/></button>
      <Link to="contact" className="bg-white flex justify-center items-center dark:bg-button2 hover:text-button2 dark:hover:bg-button2hov dark:hover:text-dtitle duration-300 ease-in-out text-title dark:text-dsubtitle py-3 rounded-lg w-full">Contact me</Link>
    </div>
  )
}

export const ProfileMenu = ({ replace, active }) => {
  return (
    <div className="flex w-full lg:w-9/12 p-2 lg:p-3 bg-white dark:bg-button2 gap-x-5 rounded-lg mb-10 text-sm md:text-lg font-medium">
      <button onClick={replace} name="portfolio" className={`${active === "portfolio" ? "bg-button3 dark:bg-dbutton3 text-button2 dark:hover:text-dtitle duration-300 ease-in-out dark:text-dsubtitle" : "bg-white dark:bg-button2 text-title dark:text-dsubtitle"} hover:text-button2 py-3 rounded-lg w-full flex justify-center items-center`}>Portfolio</button>
      <button onClick={replace} name="skill" className={`${active === "skill" ? "bg-button3 dark:bg-dbutton3 text-button2 dark:hover:text-dtitle duration-300 ease-in-out dark:text-dsubtitle" : "bg-white dark:bg-button2 text-title dark:text-dsubtitle"} hover:text-button2 py-3 rounded-lg w-full`}>Skills</button>
    </div>
  )
}