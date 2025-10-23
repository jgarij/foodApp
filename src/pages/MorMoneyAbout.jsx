import React from 'react'
import AboutCart from '../components/AboutCart'
function MorMoneyAbout() {
  return (
    <div className='px-8 mt-9'>
        <h2 className='text-4xl text-bold'>ABOUT MAURAMONEY</h2>
         <div className='grid grid-cols-3 gap-4'>
            <AboutCart></AboutCart>
            <AboutCart></AboutCart>
            <AboutCart></AboutCart>
         </div>
    </div>
  )
}

export default MorMoneyAbout
