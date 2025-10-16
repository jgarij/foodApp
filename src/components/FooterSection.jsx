
import React from 'react'

export default function FooterSection() {
  return (
    <div className='flex gap-5 flex-col text-xl'>
     <div>
        <h2 className='text-xl  font-bold'>Shop</h2>
     </div>
     <div>
        <ul className='flex gap-2 sm:text-xl text-base flex-col'>
            <li>Menu</li>
            <li>Signin</li>
            <li>Muramoney</li>
            <li>Create Account</li>
        </ul>
     </div>
    </div>
  )
}
