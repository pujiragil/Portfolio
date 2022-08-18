import React from 'react'
import { ProfileButton } from '../Profile/ProfileElements'
import { ContactDesc, ContactTitle } from './ContactElements'

const Contact = () => {
  return (
    <div className="font-manrope text-center px-6 flex flex-col justify-center items-center w-full mb-[122px]">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactDesc>If you are looking to hire a product designer, I’m currently available for freelance work</ContactDesc>
      <div className="w-full md:w-7/12 flex justify-center items-center">
        <ProfileButton />
      </div>
    </div>
  )
}

export default Contact