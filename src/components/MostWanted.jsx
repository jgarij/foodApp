import React from 'react'
import FoodCourt from '../pages/FoodCourt'
import Button from './Button'
import FoodCart from './FoodCart'
import { MenuData } from '../assets/data/MenuData'
export default function MostWanted() {
  return (

    <>
      <h2 className=' text-3xl'>MOST WANTED</h2>
      <div className='flex mt-7 gap-3 productbox'>
        <div className='w-1/2  h-[600px] border-white border-1 shadow-2xl rounded-b-2xl leftbox  sticky'>
          <img className='h-2/3 w-full' src="/mostwanted.png" alt="" />
          <h3 className='text-2xl mt-4'>CHECK OUT MOST POPULAR PRODUCTS</h3>
          <Button content="Order Now" route="/menu" />
        </div>
        <div className='w-1/2 rightbox h-[600px] overflow-y-scroll grid grid-cols-2'>
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
