import React from 'react'
import { MenuData,uniqueCategories } from '../assets/data/MenuData'
import DisplayCategory from './DisplayCategory';
export default function MenuSection() {
console.log("MenuSection",MenuData)

function handleSearchChange(){
  console.log("handle search")
} 
return (
   
   <div className=''>
   <div className='flex justify-between px-4'>
    <div>
      <input
            type="text"
            placeholder="Search..."
            value=""
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded"
          />
    </div>
    <div>
       <select
            value=""
            onChange=""
            className="p-2 border bg-pink-600 border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
    </div>
   </div>
   <div>
        {
        uniqueCategories.map((m,index)=>(
        <DisplayCategory key={index} category={m}/>
        ))
        }
    </div>
    </div>
  )
}
