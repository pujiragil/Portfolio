import Card from "./Card"
import { ProfileButton, ProfileMenu } from "./fragments/profileButton"
import { Profile, ProfileFact, ProfileInformation } from "./fragments/profileFragments"

const ProfileSection = () => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <div className="flex flex-col justify-center items-center">
            <Profile />
            <ProfileInformation />
            <ProfileFact />
            <ProfileButton />
            <ProfileMenu />
            <Card />
        </div>
      </div>
    </div>
  )
}

export default ProfileSection