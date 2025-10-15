import React from 'react'
import AboutCart from '../components/AboutCart'
function MorMoneyAbout() {
  return (
    <div>
        <h2 className='text-3xl text-bold'>ABOUT US</h2>
         <div className='flex flex-row justify-center items-center gap-4'>
            <AboutCart></AboutCart>
            <AboutCart></AboutCart>
            <AboutCart></AboutCart>
         </div>
    </div>
  )
}

export default MorMoneyAbout
