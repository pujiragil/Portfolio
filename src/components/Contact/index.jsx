import React from 'react'
import { ProfileButton } from '../Profile/ProfileElements'
import { ContactDesc, ContactTitle } from './ContactElements'

const Contact = () => {
  return (
    <div className="font-manrope text-center px-6 flex flex-col justify-center items-center">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactDesc>If you are looking to hire a product designer, I’m currently available for freelance work</ContactDesc>
      <ProfileButton/>
    </div>
  )
}

export default Contact