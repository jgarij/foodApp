import React from 'react'
import { FaCartPlus } from "react-icons/fa";
function HeroSectionFooter() {
  return (
    <div className="px-2">
     
        <ul className='flex justify-between gap-3  overflow-hidden text-base md:text-xl text-bold '>
        <li className='flex items-center gap-1 md:gap-3 py-1 whitespace-nowrap'> <FaCartPlus/> ALWAYS REFRESH</li>
        <li  className='flex items-center gap-1 md:gap-3  py-1 whitespace-nowrap '> <FaCartPlus/>FAST DELIVERY</li>
        <li  className='flex items-center gap-1 md:gap-3  py-1 whitespace-nowrap'> <FaCartPlus/>SECURE PAYMENT</li>
        <li  className='flex items-center gap-1 md:gap-3   px-12 sm:px-0 py-1 whitespace-nowrap'> <FaCartPlus/>SUPPORT</li>
      </ul>
    </div>
  )
}

export default HeroSectionFooter