import { RiStarSFill } from 'react-icons/ri'
import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiBulma, SiArchlinux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'


const Rate = ({ icon, stars, language }) => {
  const starLength = parseInt(stars)
  const arr = Array(starLength).fill("mwehe")
  return (
    <div className="flex w-full justify-between items-center bg-white dark:bg-button2 p-6 rounded-lg">
      <div className="flex justify-center items-center">
        {icon}
        <p className="dark:text-dsubtitle">{language}</p>
      </div>
      <div className="flex text-yellow-200">
        {arr.map((item, index) => (
          <RiStarSFill key={index} />
        ))}
      </div>
    </div>
  )
}

const Skill = () => {
  return (
    <div className="mb-20 lg:w-9/12 flex flex-col w-full gap-y-5 text-sm">
      <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-5">
        <Rate icon={<IoLogoHtml5 className="text-orange-500 text-3xl mr-2" />} stars="5" language="HTML 5" />
        <Rate icon={<IoLogoCss3 className="text-blue-500 text-3xl mr-2" />} stars="5" language="CSS 3" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-5">
        <Rate icon={<IoLogoJavascript className="text-yellow-500 text-3xl mr-2" />} stars="4" language="Javascript" />
        <Rate icon={<FaBootstrap className="text-purple-500 text-3xl mr-2" />} stars="5" language="Bootstrap" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-5">
        <Rate icon={<SiBulma className="text-green-500 text-3xl mr-2" />} stars="4" language="Bulma CSS" />
        <Rate icon={<SiTailwindcss className="text-sky-400 text-3xl mr-2" />} stars="4" language="Tailwind CSS" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-5">
        <Rate icon={<FaReact className="text-sky-500 text-3xl mr-2" />} stars="3" language="React JS" />
        <Rate icon={<TbBrandNextjs className="text-button2 dark:text-white text-3xl mr-2" />} stars="3" language="Next JS" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-5">
        <Rate icon={<FaNodeJs className="text-green-600 text-3xl mr-2" />} stars="3" language="Node JS" />
        <Rate icon={<SiArchlinux className="text-sky-600 text-3xl mr-2" />} stars="4" language="Arch Linux" />
      </div>
    </div>
  )
}

export default Skill