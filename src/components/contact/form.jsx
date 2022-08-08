import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'

const Form = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-button2 rounded-lg p-4 gap-y-6 mb-10 py-10">
      <h2 className="text-title dark:text-dtitle text-2xl">Hi there 👋</h2>
      <div className="flex dark:text-white border border-zinc-900 dark:border-white gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineUser className="text-title dark:text-white"/>
        <input className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your name" />
      </div>
      <div className="flex dark:text-white border border-zinc-900 dark:border-white gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineMail className="text-title dark:text-white"/>
        <input className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your email" />
      </div>
      <div className="flex dark:text-white border border-zinc-900 dark:border-white gap-x-2 justify-start items-start bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineMessage className="text-title dark:text-white"/>
        <textarea className="w-full h-20 focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your message" />
      </div>
      <button className="bg-dbutton text-button hover:bg-button hover:text-button2 duration-300 rounded-lg py-3">Send Message</button>
    </div>
  )
}

export default Form