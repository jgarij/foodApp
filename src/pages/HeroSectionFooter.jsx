import React from 'react'
import { FaCartPlus } from "react-icons/fa";
function HeroSectionFooter() {
  return (
    <div className="">
      <ul className='flex justify-between text-xl text-bold'>
        <li className='flex items-center gap-3'> <FaCartPlus/> ALWAYS REFRESH</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>FAST DELIVERY</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>SECURE PAYMENT</li>
        <li  className='flex items-center gap-3'> <FaCartPlus/>SUPPORT</li>
      </ul>
    </div>
  )
}

export default HeroSectionFooter