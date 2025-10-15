import React from 'react'
import { FaCartPlus } from "react-icons/fa";
function HeroSectionFooter() {
  return (
    <div className='mt-5  px-24'>
      <ul className='flex justify-between text-2xl text-bold'>
        <li className='flex items-center gap-3'> <FaCartPlus/> ALWAYS REFRESH</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>FAST DELIVERY</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>SECURE PAYMENT</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>SUPPORT</li>
      </ul>
    </div>
  )
}

export default HeroSectionFooter