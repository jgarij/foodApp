import React from 'react'
import Review from '../components/Review'

function Opinion() {
  return (
    <div className='mt-7 px-12' >
   <h2 className='text-3xl font-bold'>YOUR REVIEWS COUNTS </h2>
   <div className='flex gap-3 text-2xl'>⭐⭐⭐⭐⭐ 4 <span><a href="">Google Reviews</a></span></div>
    <div className=' grid grid-cols-4 gap-2 mt-5'>
        <Review></Review>
       <Review></Review>
        <Review></Review>
         <Review></Review> 
    </div>
     </div>
  )
}

export default Opinion
