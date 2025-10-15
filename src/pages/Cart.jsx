import React from 'react'
import Cart from '../components/Cart'
export default function ShopCart() {
  return (
    <div className='bg-white text-black'>
      <h3 className='text-xl font-bold'>Cart</h3>
     <Cart></Cart>
     <Cart></Cart>
     <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 herobtn">
                       Order 1 for 800
                            </button>
    </div>
  )
}
