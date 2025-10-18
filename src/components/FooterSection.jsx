
import React from 'react'

export default function FooterSection({item}) {
 
 
  return (

    <div className='flex-1 flex h-full w-full justify-between items-center'>

    <div className='flex gap-3 h-full flex-col   text-xl'>
    {
      Object.entries(item).map(([category,menuItems])=>(
    <div key={category}>
        <h2 className='text-base font-bold mb-2'>{category}</h2>
        <ul className='text-base flex flex-col gap-2'>
         { menuItems.map((menuItem,index)=>(
          <li className='whitespace-nowrap' key={index}>{menuItem}</li>
         ))
         }
        </ul>
     </div>   
    ))}     
        </div>
    </div>

  )
}
