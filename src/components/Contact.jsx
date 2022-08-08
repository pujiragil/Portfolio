import Form from './contact/form'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Contact, Logo, Title } from './contact/information'

const ContactComponent = () => {
  return (
    <div className="bg-light dark:bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <Form />
        <div className="flex flex-col bg-white dark:bg-button2 rounded-lg px-4 py-10 gap-y-6 mb-5">
          <Title />
          <Contact />
          <Logo />
        </div>
        <Link to="/" className="text-center text-subtitle underline mb-5 block">Back</Link>
        <Footer />
      </div>
    </div>
  )
}

export default ContactComponent