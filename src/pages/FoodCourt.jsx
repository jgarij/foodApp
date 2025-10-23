import React from 'react'
import FoodCart from '../components/FoodCart'
import {MenuData} from "../assets/data/MenuData.jsx"
// console.log("MenuData",MenuData)
function FoodCourt() {
  return (
    <div className=' grid gap-y-3  gap-x-4 grid-cols-2'>
      {
        MenuData.items.map((item)=>(
 <FoodCart></FoodCart>
        ))
      }
       
         {/* <FoodCart></FoodCart>
          <FoodCart></FoodCart>
           <FoodCart></FoodCart>
            <FoodCart></FoodCart>
              <FoodCart></FoodCart>
                <FoodCart></FoodCart>
                  <FoodCart></FoodCart>
                    <FoodCart></FoodCart> */}
      
    </div>
  )
}

export default FoodCourt
