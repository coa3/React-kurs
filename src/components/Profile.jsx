import React from 'react'
import c from './Profile.module.css'

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://www.dirtconnections.com/wp-content/uploads/2020/03/japanese-garden-backyard.jpg"
          alt="."
        />
      </div>
      <div>
        <img
          src="https://imgfon.ru/Img/Crop/1280x1024/Gun/katana-mech-rukoyatka-shtativ-holodnoe_orujie.jpg?img.1"
          alt="."
        />
      </div>
      <div>ava+discripshen</div>
      <div>
        My posts
        <div>New post</div>
        <div className={c.posts}>
          <div className={c.item}>post1</div>
          <div className={c.item}>post2</div>
        </div>
      </div>
    </div>
  )
}
export default Profile
