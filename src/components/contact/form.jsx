import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'

const Form = () => {
  return (
    <div className="flex w-full flex-col bg-white dark:bg-button2 rounded-lg px-4 py-10 gap-y-6 mb-10 lg:mb-0 sm:w-4/5 lg:order-2 lg:bg-button dark:lg:bg-white">
      <h2 className="text-title dark:text-dtitle text-2xl dark:lg:text-title">Hi there 👋</h2>
      <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineUser className="text-title dark:text-white dark:lg:text-title"/>
        <input className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your name" />
      </div>
      <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineMail className="text-title dark:text-white dark:lg:text-title"/>
        <input className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your email" />
      </div>
      <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-start items-start bg-white dark:bg-transparent rounded-lg p-2">
        <AiOutlineMessage className="text-title dark:text-white dark:lg:text-title"/>
        <textarea className="w-full h-20 focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" placeholder="your message" />
      </div>
      <button className="bg-dbutton text-button border border-transparent lg:bg-white dark:lg:bg-yellow-300 hover:dark:bg-button lg:border-zinc-900 hover:bg-button hover:text-button2 duration-300 rounded-lg py-3">Send Message</button>
    </div>
  )
}

export default Form