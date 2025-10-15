import React from 'react'
import Review from '../components/Review'

function Opinion() {
  return (
    <div className='mt-7 px-12' >
   <h2 className='text-3xl font-bold'>YOUR REVIEWS COUNTS </h2>
   <div className='flex gap-3 text-2xl'>⭐⭐⭐⭐⭐ 4 <span><a href="">Google Reviews</a></span></div>
  <div className="flex gap-6">

  <Review className="flex  overflow-scroll-x" />
  <Review></Review>
  <Review></Review>
  <Review></Review>
  <Review></Review>
  <Review></Review>
  {/* <Review className="flex-shrink-0 w-64 snap-start" />
  <Review className="flex-shrink-0 w-64 snap-start" /> */}
</div>
     </div>
  )
}

export default Opinion
