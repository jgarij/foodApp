import React from 'react'
import FAQSection from '../components/FAQSection'
import Button from '../components/Button'
import { TabsDemo } from './Tabs'
export default function FAQ() {
  return (
    <div className="px-2 md:px-8">
  
    <div className='mt-7 sm:flex-row flex-col flex  gap-3'>
      <div className='flex  w-full sm:w-1/2 flex-col gap-4'>
        <h3 className='text-2xl font-bold md:text-4xl'>FAQ</h3>
        <p className='text-xl'>If the answer isn't here, contact us and we'll get back to you soon</p>
       <Button content="Get in touch" route="/"></Button>
      </div>
      <div className='flex flex-col gap-2 border-none  w-full sm:w-1/2'>
        <TabsDemo/>
        

      </div>
    </div>
   <p className='mt-7  border-bg-gray-100 border-1 '></p>
      </div>
  )
}
