import React from 'react'
import { MenuData } from '../assets/data/MenuData'
import FoodCart from './FoodCart'
function DisplayCategory({category}) {
  console.log("category passes",category)
  const filteredItems = MenuData.items.filter(item => item.category === category);
  return (
    <div className='mt-7'>
      <h3 className='text-3xl mb-5'>{category}</h3>
     <div className='grid grid-cols-3 gap-3'>
     {
      filteredItems.map((item)=>(
       <FoodCart item={item}/>
      ))
    }
    </div> 
    </div>
  )
}

export default DisplayCategory
