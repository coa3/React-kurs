import React from 'react'
import Myposts from './Myposts/Myposts'
import c from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.dirtconnections.com/wp-content/uploads/2020/03/japanese-garden-backyard.jpg"
          alt="."
        />
      </div>
      <div>ava+discripshen</div>
      <Myposts />
    </div>
  )
}
export default Profile
