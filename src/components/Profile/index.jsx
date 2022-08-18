import React from 'react'
import { ProfileDesc, ProfilePic } from './ProfileElements'

const Profile = () => {
  return (
    <div className="max-w-screen-2xl mb-32 md:mb-[157px] text-primary flex flex-col md:flex-row justify-center md:justify-between items-center">
      <ProfilePic/>
      <ProfileDesc/>
    </div>
  )
}

export default Profile