import emailjs from '@emailjs/browser'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const notify = () => toast(`Hi ${name } 👋, thanks for your email`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })


  const emailHandler = (e) => {
    e.preventDefault()

    emailjs.send('service_2940vyo', 'template_5wg5pbk', {
      from_name: name,
      to_name: 'Puji Ragil',
      message,
      reply_to: email
    }, 'user_8jA5VIWhrYi5LjCVdSbyl')
      .then((result) => {
        console.log(result.text)
      }).catch((error) => {
        console.log(error.text)
      })

    notify()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex w-full flex-col bg-white dark:bg-button2 rounded-lg px-4 py-10 gap-y-6 mb-10 lg:mb-0 sm:w-4/5 lg:order-2 lg:bg-button dark:lg:bg-white">
      <h2 className="text-title dark:text-dtitle text-2xl dark:lg:text-title">Hi there 👋</h2>
      <form onSubmit={emailHandler.bind(this)} className="flex flex-col gap-y-6">
        <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
          <AiOutlineUser className="text-title dark:text-white dark:lg:text-title" />
          <input value={name} onChange={(e) => { setName(e.target.value) }} className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" required placeholder="your name" />
        </div>
        <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-center items-center bg-white dark:bg-transparent rounded-lg p-2">
          <AiOutlineMail className="text-title dark:text-white dark:lg:text-title" />
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full focus:border-none focus:outline-none text-sm dark:bg-transparent" type="email" required placeholder="your email" />
        </div>
        <div className="flex text-title dark:text-white dark:lg:text-title border border-zinc-900 dark:border-white dark:lg:border-zinc-900 gap-x-2 justify-start items-start bg-white dark:bg-transparent rounded-lg p-2">
          <AiOutlineMessage className="text-title dark:text-white dark:lg:text-title" />
          <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="w-full h-20 focus:border-none focus:outline-none text-sm dark:bg-transparent" type="text" required placeholder="your message" />
        </div>
        <input type="submit" className="bg-dbutton cursor-pointer text-button border border-transparent lg:bg-white dark:lg:bg-yellow-300 hover:dark:bg-button lg:border-zinc-900 hover:bg-button hover:text-button2 duration-300 rounded-lg py-3" value="Submit Mail" />
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default Form