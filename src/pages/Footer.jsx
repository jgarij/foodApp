import React from 'react'
import FooterSection from '../components/FooterSection'
    import { FaInstagram } from "react-icons/fa";
    import Button from '../components/Button';
function Footer() {
  return (
    <>
      <p className='border-2 border-gray-50'></p>
      <div className='mt-12  flex-col md:flex-row  h-[300px] justify-center items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-2 text-xl sm:text-2xl'>
          <h3 className=' font-bold'> MERAMICITY</h3>
          <p>⭐⭐⭐⭐⭐⭐</p>
          <p>4.5 <span>Google Review
          </span></p>
          <Button route="/menu" content="Write a review" />
          <div className='flex text-2xl md:text-3xl gap-5'>
          <div className='bg-pink-500 md:p-2 rounded-full'><FaInstagram/></div> 
          <div className='bg-pink-500 md:p-2 rounded-full'><FaInstagram/></div> 
          </div>
        </div>

        <div className='flex justify-between w-full md:w-1/2 flex-wrap'>
          <FooterSection></FooterSection>
          <FooterSection></FooterSection>
          <FooterSection></FooterSection>
        </div>
      </div>
      {/* <div className='border-2 border-gray-50 md:mt-0'></div> */}

      {/* <div className='flex justify-start items-center  text-base sm:text-xl py-3 md:mt-0'>
        <p className='text-center '>Copyright @ Cosmostaker </p>
          <p>  Created By Garima Jain</p>
      </div> */}
    </>
  )
}

export default Footer
