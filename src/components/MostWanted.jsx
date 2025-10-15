import React from 'react'
import FoodCourt from '../pages/FoodCourt'
export default function MostWanted() {
  return (

    <div className='px-12 mt-10'>
      <h2 className=' text-3xl'>MOST WANTED</h2>
      <div className='flex mt-7 gap-3 productbox'>
      <div className='w-1/2  h-[600px] border-white border-1 shadow-2xl rounded-b-2xl leftbox '>
        <img className='h-2/3 w-full' src="/mostwanted.png" alt="" />
        <h3 className='text-2xl mt-4'>CHECK OUT MOST POPULAR PRODUCTS</h3>
         <button class="bg-white text-pink-500 font-bold py-2 px-4 rounded-full p-2 mt-4">
                                Order now
          </button>
      </div>
      <div className='w-1/2 rightbox'>
        <FoodCourt></FoodCourt>
      </div>
     </div>
    </div>
      
  )
}
