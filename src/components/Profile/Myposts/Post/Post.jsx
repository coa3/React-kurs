import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
  return (
    <div className={c.item}>
      <img
        src="https://m-chu.ru/wp-content/uploads/2019/03/samurai-18801.jpg"
        alt="."
      />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  )
}
export default Post
