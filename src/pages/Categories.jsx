import React from 'react'
import CardCategory from '../components/CardCategory'
function Categories() {
  return (
    <div>
    <h3 className='text-3xl font-bold'>OUR CATEGORIES</h3>
    <div className='mt-7 flex gap-4'>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>  <CardCategory></CardCategory> 
      </div>
      <div className='mt-7 flex gap-4'>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>  <CardCategory></CardCategory> 
      </div>
      </div>
  )
}

export default Categories
