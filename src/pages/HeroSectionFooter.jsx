import React from 'react'
import { FaCartPlus } from "react-icons/fa";

import { GiFishCooked } from 'react-icons/gi';
import { FaBolt, FaMoneyCheckAlt, FaPhone } from 'react-icons/fa';
function HeroSectionFooter() {
  console.log('hro footer')
  return (
    <div className="px-2 mt-4 md:px-8">
     
        <ul className='flex justify-between gap-3  overflow-hidden text-base md:text-xl text-bold '>
        <li className='flex items-center gap-1 md:gap-3 py-1 whitespace-nowrap'> <GiFishCooked size={28} /> ALWAYS REFRESH</li>
        <li  className='flex items-center gap-1 md:gap-3  py-1 whitespace-nowrap '> <FaBolt size={24}/>FAST DELIVERY</li>
        <li  className='flex items-center gap-1 md:gap-3  py-1 whitespace-nowrap'> <FaMoneyCheckAlt size={24}/>SECURE PAYMENT</li>
        <li  className='flex items-center gap-1 md:gap-3   px-12 sm:px-0 py-1 whitespace-nowrap'> <FaPhone size={24}/>SUPPORT</li>
      </ul>
    </div>
  )
}

export default HeroSectionFooter