import React from 'react'
import FAQSection from '../components/FAQSection'
import Button from '../components/Button'
import { TabsDemo } from './Tabs'
export default function FAQ() {
  return (
    <div className='mt-7 sm:flex-row flex-col flex  gap-3'>
      <div className='flex  w-full sm:w-1/2 flex-col'>
        <h3 className='text-2xl font-bold md:text-3xl'>FAQ</h3>
        <p className='text-xl'>If the answer isn't here, contact us and we'll get back to you soon</p>
       <Button content="Get in touch" route="/"></Button>
      </div>
      <div className='flex flex-col gap-2 border-none  w-full sm:w-1/2'>
        <TabsDemo/>
        

      </div>
    </div>
  )
}
