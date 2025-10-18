import React from 'react'

export default function FAQSection({data}) {
  return (
    <div className='text-base mt-3 px-4 py-2 border-1 border-gray-400 rounded-2xl w-full'>
      <details className='flex flex-col gap-2 w-full group'>     
      <summary className='list-none flex justify-between'>
        <p>{data.ques} </p>
       <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="block group-open:hidden">▼</span>
            <span className="hidden group-open:block">▲</span>
          </p>

      </summary>
      <p>{data.ans}</p>
      
    </details>
      
    </div>
  )
}
