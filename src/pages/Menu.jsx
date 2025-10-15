import React from 'react'
import ShopCart from './Cart'
import CategorySidebar from '../components/CategorySidebar'
import MenuSection from '../components/MenuSection'
function Menu() {
  return (
    <div className='flex mt-28'> 
      <aside className='w-1/5'>
      <CategorySidebar></CategorySidebar>
      </aside>
      <section  className='w-3/5'>

      <MenuSection></MenuSection>     

      </section>
      <section className='w-1/5 bg-white'>
      <ShopCart></ShopCart>
      </section>
    </div>
  )
}

export default Menu
