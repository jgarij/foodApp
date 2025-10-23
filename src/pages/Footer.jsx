import React from 'react'
import FooterSection from '../components/FooterSection'
    import { FaInstagram } from "react-icons/fa";
    import Button from '../components/Button';

const data=[
  {
    "Shop":['Menu','Muramoney','Sign in','Create account']

  },
  {
    "Help":['About us','Contact us','Blog','Privacy policy']

  }
]

const services = [
  'DELIVERY AND PICK UP EVERY DAY',
  '10:00 AM - 02:00 AM',
  '+374 11 388888',
   'HERATSI 16',
   'YEREVAN 0025'
]

function Footer() {
  return (
    <div className='px-2 mt-24 md:px-8'>
     
      <div className='mt-6  flex md:flex-row flex-col'>
        <div className='md:w-1/2 w-full   flex flex-col gap-4'>
        <div className=' font-bold text-3xl'>
                <p>MURAM<span className='text-pink-900'>I</span>CITY</p>
         </div>
         <div className='flex gap-2'>
          <p>⭐⭐⭐⭐⭐⭐</p>
          <p>4.5 <span>Google Review</span></p>
</div>
          <Button route="/menu" content="Write a review" />
          <div className='flex  gap-5'>
          <div className='text-3xl'><FaInstagram/></div> 
          <div className=' text-3xl'><FaInstagram/></div> 
          </div>
        </div>

        <div className='flex md:flex-row flex-col md:gap-0 gap-4  justify-between w-full md:w-1/2 '>
        <div className="flex  w-full md:w-2/3 ">
        {data.map((item)=>(
        <FooterSection item={item}></FooterSection>
        ))  
        }  
        </div>
      <div className='w-full text-base md:w-1/3 '>
                {
                  services.map((m)=>(
                    <p className='font-semibold sm:font-bold'>{m}</p>
                  ))
                }
      </div>
        </div>
      </div>

      <div className='border-1 border-gray-400 mt-6 '></div>
      <div className='flex md:flex-row flex-col items-center justify-between py-2 mb-2 text-base '>
      <div className='w-full  md:w-1/2'>Copyright @ Cosmostaker </div>
      <div className='w-full md:w-1/2'>  Created By Garima Jain</div>
     </div> 
    </div>
  )
}

export default Footer
