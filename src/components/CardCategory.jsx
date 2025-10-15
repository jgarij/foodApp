import React from 'react'

export default function CardCategory() {
  return (
    <div className="h-[140px] w-[300px] flex p-3 border-1 border-amber-100  shadow-2xl rounded-2xl">
      <div className='w-1/2 font-bold'>SASHIMI</div>
      <div className='w-1/2   flex justify-center items-center'>
      <img src="/bg1.jpg" className="object-cover w-full h-full" alt="" />
      </div>

    </div>
  )
}
