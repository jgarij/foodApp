import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function CardCategory({item}) {
  
  function slugify(str) {

  return str
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, ''); // Remove non-alphanumeric
}
  // console.log("Item in card category",item);
  const navigate =  useNavigate();
 
  return (
    <div  onClick={()=> navigate(`/menu/${slugify(item)}`)}  className="h-[140px] w-[280px] flex p-3 border-1 border-amber-100  shadow-2xl rounded-2xl">
      <div className='w-1/2 font-semi-bold py-2 px-1'>{item}</div>
      <div className='w-1/2 flex justify-center items-center'>
      <img src="/plate2.png" className="object-cover w-full h-full rounded-2xl" alt="" />
      </div>

    </div>
  )
}
