import React from 'react'
import c from './Myposts.module.css'
import Post from './Post/Post'

const Myposts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi" like="like 10" />
        <Post message="Hello" like="like 25" />
      </div>
    </div>
  )
}
export default Myposts
