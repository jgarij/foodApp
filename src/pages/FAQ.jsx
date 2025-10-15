import React from 'react'
import FAQSection from '../components/FAQSection'
export default function FAQ() {
  return (
    <div className='mt-7  flex h-[400px] gap-3'>
      <div className='flex w-1/2 flex-col'>
        <h3 className='text-2xl'>FAQ</h3>
        <p className='text-xl'>If the answer isn't here, contact us and we'll get back to you soon</p>
        <button class="bg-white w-[150px] text-pink-500 font-bold  rounded-full  mt-4 p-2 text-xl">
                               Get in touch
        </button>
      </div>
      <div className='flex flex-col gap-2 w-1/2'>
        <FAQSection></FAQSection>
        <FAQSection></FAQSection>
        <FAQSection></FAQSection>
        <FAQSection></FAQSection>
        

      </div>
    </div>
  )
}
