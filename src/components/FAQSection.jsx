import React from 'react'

export default function FAQSection({data}) {
  return (
    <div className='text-xl p-4 border-1 border-white w-full '>
      <details className='flex flex-col gap-2 w-full '>
      <summary className='list-none'>{data.ques} </summary>
      <p>{data.ans}</p>
    </details>
      
    </div>
  )
}
