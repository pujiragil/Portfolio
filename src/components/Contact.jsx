import Form from './contact/form'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Contact, Logo, Title } from './contact/information'

const ContactComponent = () => {
  return (
    <div className="bg-light dark:bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <div className="flex flex-col lg:flex-row lg:p-10 justify-center items-center w-full sm:h-screen lg:h-screen lg:rounded-lg lg:bg-white dark:lg:bg-button2 lg:mb-5">
          <Form />
          <div className="order-1 flex flex-col bg-white dark:bg-button2 rounded-lg px-4 lg:px-10 py-10 gap-y-6 mb-5 sm:w-4/5">
            <Title />
            <Contact />
            <Logo />
          </div>
        </div>
        <Link to="/" className="text-center text-subtitle dark:text-dtitle underline mb-5 block">Back</Link>
        <Footer />
      </div>
    </div>
  )
}

export default ContactComponent