import React from 'react'

export default function CardCategory({item}) {
  return (
    <div className="h-[140px] w-[280px] flex p-3 border-1 border-amber-100  shadow-2xl rounded-2xl">
      <div className='w-1/2 font-semi-bold py-2 px-1'>{item}</div>
      <div className='w-1/2 flex justify-center items-center'>
      <img src="/plate2.png" className="object-cover w-full h-full rounded-2xl" alt="" />
      </div>

    </div>
  )
}
