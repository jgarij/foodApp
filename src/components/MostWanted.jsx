import React from 'react'
import FoodCourt from '../pages/FoodCourt'
import Button from './Button'
import FoodCart from './FoodCart'
import { MenuData } from '../assets/data/MenuData'
export default function MostWanted() {
  return (

    <>
      <h2 className=' text-3xl'>MOST WANTED</h2>
      <div className='flex flex-col md:flex-row  gap-3 productbox'>
        <div className='sm:w-1/2  w-full h-[550px]   border-gray-400 border-1  rounded-2xl flex-col leftbox  sticky flex justify-between'>
          <img className='h-2/3 w-full rounded-t-2xl' src="/mostwanted.png" alt="" />
          <div className='flex-1 flex justify-center items-center'>
          <div className='flex  flex-col '>
          <h3 className='text-2xl px-2'>CHECK OUT MOST POPULAR PRODUCTS</h3>
          <Button  content="Order Now" route="/menu" />
          </div>
          </div>
        </div>
        <div className='sm:w-1/2 w-full rightbox h-[550px] justify-center overflow-y-scroll gap-2 grid grid-cols-2'>
          {
            MenuData.items.map((item) => (
              <FoodCart item={item} />
            ))
          }
        </div>
      </div>
    </>

  )
}
