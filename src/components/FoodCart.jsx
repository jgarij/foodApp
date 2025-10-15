import React from 'react'

export default function FoodCart({item}) {
  return (
    <div className='h-[350px] w-[300px]  border-gray-600 border-2 rounded'>
     <img className='h-2/3 w-full border-grey-600 border-2' src="https://api.murakamicity.com/storage/webp/Murakami_Philadelphia_with_cucumber-67f6134d041f9.webp"/>
     <div className='p-3'>
     <h3 className='text-xl text-semi-bold'>{item.title}</h3>
     <div className='flex justify-between'>
     <div className='flex flex-col'>
     <p className='text-pink-600'>Buy 3 rolls get "Callifornia roll" FREE</p>
     <p>{item.price}</p>
    </div>
    <button className='rounded-full  flex justify-center items-center bg-pink-600 text-2xl h-8 w-8 text-white'>
        +
    </button>
    </div>
    </div>
    </div>
  )
}
