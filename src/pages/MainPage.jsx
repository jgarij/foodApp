import React from 'react'
import CategorySidebar from '../components/CategorySidebar'
import MenuSection from '../components/MenuSection'
import Cart from '../components/Cart'
function MainPage() {
  return (
    <div className='mt-32 flex'>
      <div className='w-1/5'>
       <CategorySidebar></CategorySidebar>
       </div>
       <div className='w-3/5'>
        <MenuSection></MenuSection> 
        </div>
        <div className='w-1/5'>
       <Cart></Cart> 
       </div>
    </div>
  )
}

export default MainPage
