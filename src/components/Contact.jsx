import Form from './contact/form'
import { Contact, Logo, Title } from './contact/information'
import Footer from './Footer'

const ContactComponent = () => {
  return (
    <div className="bg-light dark:bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <Form />
        <div className="flex flex-col bg-white dark:bg-button2 rounded-lg p-4 gap-y-6 mb-10">
          <Title />
          <Contact />
          <Logo />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactComponent