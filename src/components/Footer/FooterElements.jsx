import { FaWhatsapp, FaLinkedin, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa'

export const FooterIcons = () => {
  const icons = [FaWhatsapp, FaLinkedin, FaInstagram, FaTelegram, FaGithub]
  return (
    <div className="flex order-2 justify-center items-center gap-x-8 text-desc mb-10 md:mb-0">
      {icons.map((Icon, index) => {
        return <Icon className="text-2xl" key={index} />
      })}
    </div>
  )
}

export const Copy = () => {
  return (
    <p className="text-desc order-1 text-center text-xs md:text-lg font-bold">Made by <span className="text-primary">Puji Ragil</span> - Copyright 2022</p>
  )
}