import React from 'react'

export default function FoodCart({item}) {
  return (
    <div className=' group  border-gray-50 border-1 rounded-2xl h-[400px] hover:border-gray-400'>
     <img className='h-3/5 w-full   rounded-t-2xl mt-0 border-b-1 border-gray-600' src="https://api.murakamicity.com/storage/webp/Murakami_Philadelphia_with_cucumber-67f6134d041f9.webp"/>
     <div className='h-2/5 p-3 border-t-1 border-gray-50'>
     <h3 className='text-xl text-semi-bold'>{item.title}</h3>
     <div className='flex justify-between flex-col gap-3'>
     {/* <div className='flex flex-col justify-between items-center'> */}
     <p className='text-pink-600 text-xs md:text-base'>Buy 3 rolls get "Callifornia roll" FREE</p>
     <div className='flex w-full justify-between '>
      <div>{item.price}</div>
      <div className='opacity-0 group-hover:opacity-100'><button className='h-7 w-7 rounded-full bg-white text-black flex text-center items-center justify-center text-2xl'>+</button></div>
     {/* </div> */}
    </div> 
    </div>
    </div>
      
    </div>
  )
}
