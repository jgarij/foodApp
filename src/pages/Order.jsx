import React from 'react'

export default function Order() {
  return (
    <div className="bg-[url('/order.png')] z-2 m h-[350px] object-cover flex justify-left items-center px-12 mx-7 mt-12">
       <div className='w-1/3 flex flex-col  justify-center ' >
        <p className='text-2xl font-bold'>ORDER,LEVEL US YOUR STATUS & GET MURAMONEY AS CASHBACK</p>
        <button class="bg-white hover:bg-blue-700 inline-block  text-pink-500 font-bold py-2 px-4  text-xl rounded-2xl mt-5 herobtn">
                               More info
        </button>
       </div>

    </div>
  )
}
