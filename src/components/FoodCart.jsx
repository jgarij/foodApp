import React from 'react'

export default function FoodCart({item}) {
  return (
    <div className='   border-gray-600 border-2 rounded-2xl'>
     <img className='h-[270px] w-full   rounded-t-2xl mt-0' src="https://api.murakamicity.com/storage/webp/Murakami_Philadelphia_with_cucumber-67f6134d041f9.webp"/>
     <div className='p-3'>
     <h3 className='text-xl text-semi-bold'>{item.title}</h3>
     <div className='flex justify-between'>
     <div className='flex flex-col'>
     <p className='text-pink-600  text-xs md:text-xl'>Buy 3 rolls get "Callifornia roll" FREE</p>
     <div className='flex justify-between'>


      <p>{item.price}</p>
      <button className='h-5 w-5 rounded-full bg-white text-black flex text-center items-center justify-between'>+</button>
     </div>

     
    </div>
     
  
    </div>
    </div>
      
    </div>
  )
}
