import { Copy, FooterIcons } from "./FooterElements"

const Footer = () => {
  return (
    <div className="md:flex justify-between items-center p-14 border-t border-footer">
      <FooterIcons/>
      <Copy/>
    </div>
  )
}

export default Footer