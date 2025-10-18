import React from 'react'
import { Link } from 'react-router-dom'
function Button({content,route}) {
  return (
    <div>
    <Link to="/menu">
    <div className='bg-white text-base py-2 px-2 md:p-4 hover:bg-pink-600 hover:text-white inline-block text-pink-600 rounded-full   mt-3  text-center font-bold'>
      {content}
    </div>
    </Link>
    </div>
  )
}

export default Button
