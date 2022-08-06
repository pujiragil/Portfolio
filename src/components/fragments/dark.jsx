import { MdOutlineBrightness4, MdOutlineBrightness5 } from 'react-icons/md'

export const Dark = ({ toggle, dark }) => {
  return (
    <div onClick={toggle} className="flex justify-center items-center text-2xl md:text-3xl cursor-pointer bg-white dark:bg-button2 p-2 rounded-full dark:text-dsubtitle mb-10 hover:text-light dark:hover:text-white  title duration-300 ease-in-out">
      { dark ? <MdOutlineBrightness4 /> : <MdOutlineBrightness5/> }
    </div>
  )
}