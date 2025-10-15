import React from 'react'
import FooterSection from '../components/FooterSection'
    import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <p className='border-2 border-gray-50'></p>
      <div className='mt-12 px-12 flex  h-[300px] justify-center items-center'>
        <div className='w-1/2 flex flex-col gap-2 text-2xl'>
          <h3 className=' font-bold'> MERAMICITY</h3>
          <p>⭐⭐⭐⭐⭐⭐</p>
          <p>4.5 <span><a href="">Google Review</a>
          </span></p>
          <button class="text-pink-500 hover:bg-blue-700 text-xl w-[200px] bg-white font-bold py-2 px-4 rounded-full mt-5 herobtn">
            Write a review
          </button>
          <div className='flex text-3xl gap-5'>
          <div className='bg-pink-500 p-2'><FaInstagram/></div> 
          <div className='bg-pink-500 p-2'><FaInstagram/></div> 
          </div>
        </div>

        <div className='flex justify-between w-1/2'>
          <FooterSection></FooterSection>
          <FooterSection></FooterSection>
          <FooterSection></FooterSection>
        </div>
      </div>
      <p className='border-2 border-gray-50'></p>

      <div className='flex px-12 text-xl p-3'>
        <div className='w-1/2'>Copyright @ Murakami City</div>
        <div className='w-1/2'>Created By Garima Jain</div>
      </div>
    </>
  )
}

export default Footer
