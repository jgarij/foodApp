import React from 'react'
import FoodCourt from '../pages/FoodCourt'
import Button from './Button'
import FoodCart from './FoodCart'
import { MenuData } from '../assets/data/MenuData'
export default function MostWanted() {
  return (

    <div className="px-2 md:px-8">
      <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-11'>MOST WANTED</h2>
      <div className='flex flex-col  md:flex-row  gap-3 productbox'>
        <div className='sm:w-1/2  w-full h-[550px]   border-gray-400 border-1  rounded-2xl flex-col leftbox md:sticky    flex justify-between'>
          <img className='h-2/3 w-full rounded-t-2xl' src="/mostwanted.png" alt="" />
          <div className='flex-1 flex  items-center'>
          <div className='flex  flex-col  px-4'>
          <h3 className=' text-xl md:text-2xl'>CHECK OUT MOST POPULAR PRODUCTS</h3>
          <Button  content="Order Now" route="/menu" />
          </div>
          </div>
        </div>
        <div className='sm:w-1/2 w-full rightbox h-[550px] justify-center  appearance-none overflow-y-scroll gap-2 grid grid-cols-2'>
          {
            MenuData.items.map((item) => (
              <FoodCart item={item} />
            ))
          }
        </div>
      </div>
    </div>
)}
