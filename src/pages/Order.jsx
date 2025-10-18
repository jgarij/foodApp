import React from 'react'
import Button from "../components/Button"
export default function Order() {
  return (
    <div className='px-2 md:px-8'>

    <div className="bg-[url('/order.png')]  z-2 m h-[350px] object-cover flex flex-col justify-center md:flex-row justify-right items-center  mt-12 rounded-2xl">
      <div className='w-full md:w-1/2'></div>
       <div className='w-full md:w-1/2   ' >
        <p className='text-xl  md:text-2xl font-bold'>ORDER,LEVEL US YOUR STATUS & GET MURAMONEY AS CASHBACK</p>
        <Button content="More Info" route="/"/>
       </div>

    </div>
    </div>
  )
}
