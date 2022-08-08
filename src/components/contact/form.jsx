import { useState, useEffect } from 'react'
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { Dark } from '../fragments/dark'

const Form = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.getElementById("root")
    if(dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark])

  const toggle = () => {
    setDark(!dark)
  }

  return (
    <div className="flex flex-col bg-white dark:bg-button2 rounded-lg p-4 gap-y-6 mb-10 py-10">
      <div className="flex flex-col justify-center items-center">
        <Dark dark={dark} toggle={toggle} mb="mb-0"/>
      </div>
      <h2 className="text-title dark:text-dtitle text-2xl">Hi there 👋</h2>
      <div className="flex border border-zinc-900 dark:border-transparent gap-x-2 justify-center items-center bg-white rounded-lg p-2">
        <AiOutlineUser className="text-title"/>
        <input className="w-full focus:border-none focus:outline-none text-sm" type="text" placeholder="your name" />
      </div>
      <div className="flex border border-zinc-900 dark:border-transparent gap-x-2 justify-center items-center bg-white rounded-lg p-2">
        <AiOutlineMail className="text-title"/>
        <input className="w-full focus:border-none focus:outline-none text-sm" type="text" placeholder="your email" />
      </div>
      <div className="flex border border-zinc-900 dark:border-transparent gap-x-2 justify-start items-start bg-white rounded-lg p-2">
        <AiOutlineMessage className="text-title"/>
        <textarea className="w-full h-20 focus:border-none focus:outline-none text-sm" type="text" placeholder="your message" />
      </div>
      <button className="bg-dbutton text-button hover:bg-button hover:text-button2 duration-300 rounded-lg py-3">Send Message</button>
    </div>
  )
}

export default Form