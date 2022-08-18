import { Link } from "react-router-dom"

const NavWrapper = () => {
  return (
    <div className="flex h-20 justify-between items-center md:p-0 p-7 text-primary">
      <NavLogo />
      <NavLink />
      <NavToggle/>
    </div>
  )
}

const NavLogo = () => {
  return (
    <h1 className="text-xl font-extrabold">Portfolio</h1>
  )
}

const NavLink = () => {
  return (
    <div className="hidden md:flex text-lg font-bold justify-center items-center gap-x-14">
      <Link to="/">Home</Link>
      <Link to="work">Work</Link>
      <Link to="about">About</Link>
    </div>
  )
}

const NavToggle = () => {
  return (
    <div className="md:hidden">
      <span className="bg-toggle block w-[21px] h-0.5 my-1"></span>
      <span className="bg-toggle block w-[21px] h-0.5 my-1"></span>
      <span className="bg-toggle block w-[21px] h-0.5 my-1"></span>
    </div>
  )
}

export default NavWrapper