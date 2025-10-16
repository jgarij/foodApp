import React from 'react'
import { Link } from 'react-router-dom'
function Button({content,route}) {
  return (
    <div>
    <Link to={route}>
    <div className='bg-white font-normal text-base   inline-block text-pink-600 rounded-full  p-2 mt-3  text-center'>
      {content}
    </div>
    </Link>
    </div>
  )
}

export default Button
