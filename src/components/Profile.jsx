import { useEffect, useState } from "react"
import Card from "./Card"
import Footer from "./Footer"
import { Dark } from "./fragments/dark"
import { ProfileButton, ProfileMenu } from "./fragments/profileButton"
import { Profile, ProfileFact, ProfileInformation } from "./fragments/profileFragments"

const ProfileSection = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.getElementById("root")
    if(dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark])

  const toggle = () => {
    setDark(!dark)
  }

  return (
    <div className="bg-light dark:bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <Dark dark={dark} toggle={toggle}/>
          <div className="flex w-full md:w-3/5 justify-center items-center flex-col md:flex-row md:gap-x-8">
            <Profile />
            <ProfileInformation />
          </div>
          <ProfileFact />
          <ProfileButton />
          <ProfileMenu />
          <Card />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ProfileSection