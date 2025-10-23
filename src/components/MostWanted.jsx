import React from 'react'
import FoodCourt from '../pages/FoodCourt'
import Button from './Button'
import FoodCart from './FoodCart'
import  foodData  from '../assets/data/Menu'
export default function MostWanted() {
  const mostWantedProducts = foodData.menu.find((item)=>item.category==='Most Wanted').items;
  console.log("MostWantedProducts",mostWantedProducts)
  return (

    <div className="px-2 md:px-8">
      <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-11'>MOST WANTED</h2>
      <div className='flex flex-col h-[100vh] md:flex-row  gap-3 productbox'>
        <div className='sm:w-1/2  w-full h-[550px]   border-gray-400 border-1  rounded-2xl flex-col leftbox md:sticky    flex justify-between'>
          <img className='h-2/3 w-full rounded-t-2xl' src="/mostwanted.png" alt="" />
          <div className='flex-1 flex  items-center'>
          <div className='flex  flex-col  px-4'>
          <h3 className=' text-xl md:text-2xl'>CHECK OUT MOST POPULAR PRODUCTS</h3>
          <Button  content="Order Now" route="/menu" />
          </div>
          </div>
        </div>
        <div className='sm:w-1/2 w-full rightbox h-[550px] justify-center  appearance-none overflow-y-scroll gap-2 grid grid-cols-2'>
          {
            mostWantedProducts.map((item,index) => (
              <FoodCart key={index} item={item} />
            ))
          }
        </div>
      </div>
    </div>
)}





// import React, { useRef, useEffect, useState } from 'react';
// import FoodCourt from '../pages/FoodCourt';
// import Button from './Button';
// import FoodCart from './FoodCart';
// import foodData from '../assets/data/Menu';
// import Footer from '@/pages/Footer';
// export default function MostWanted() {
//   const mostWantedProducts = foodData.menu.find(item => item.category === 'Most Wanted').items;
//   const rightBoxRef = useRef(null);
//   const leftBoxRef = useRef(null);
//   const [canScrollPage, setCanScrollPage] = useState(false);
//   const [rightBoxDone, setRightBoxDone] = useState(false);
//   const [leftBoxDone, setLeftBoxDone] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = canScrollPage ? '' : 'hidden';
//     return () => { document.body.style.overflow = ''; };
//   }, [canScrollPage]);

//   // Check if leftbox is at end
//   const handleLeftBoxScroll = () => {
//     const el = leftBoxRef.current;
//     if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
//       setLeftBoxDone(true);
//       console.log("left box done")
//     }
//   };

//   // Redirect wheel events from leftbox to rightbox if rightbox isn't done
//   useEffect(() => {
//     const leftBox = leftBoxRef.current;
//     const rightBox = rightBoxRef.current;
//     if (!leftBox || !rightBox) return;

//     const wheelHandler = (e) => {
//       if (!rightBoxDone) {
//         rightBox.scrollTop += e.deltaY;
//         e.preventDefault();
//       }
//     };

//     leftBox.addEventListener('wheel', wheelHandler, { passive: false });
//     return () => leftBox.removeEventListener('wheel', wheelHandler);
//   }, [rightBoxDone]);

//   // Rightbox scroll logic
//   const handleRightBoxScroll = () => {
//     const el = rightBoxRef.current;
//     if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
//       setRightBoxDone(true);
//       console.log("Right box xdone")
//     }
//   };

//   // Allow page scroll only if both are done
//   useEffect(() => {
//     setCanScrollPage(rightBoxDone && leftBoxDone);
//   }, [rightBoxDone, leftBoxDone]);

//   return (
//     <div className="px-2 md:px-8 h-[100vh]">
//       <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-11'>MOST WANTED</h2>
//       <div className='flex flex-col  min-h-screen md:flex-row gap-3 productbox'>
//         <div
//           ref={leftBoxRef}
//           onScroll={handleLeftBoxScroll}
//           className='sm:w-1/2 w-full h-[550px] border-gray-400 border-1 rounded-2xl flex-col leftbox md:sticky flex justify-between overflow-y-scroll'
//         >
//           <img className='h-2/3 w-full rounded-t-2xl' src="/mostwanted.png" alt="" />
//           <div className='flex-1 flex items-center'>
//             <div className='flex flex-col px-4'>
//               <h3 className='text-xl md:text-2xl'>CHECK OUT MOST POPULAR PRODUCTS</h3>
//               <Button content="Order Now" route="/menu" />
//             </div>
//           </div>
//         </div>
//         <div
//           ref={rightBoxRef}
//           onScroll={handleRightBoxScroll}
//           className='sm:w-1/2 w-full rightbox h-[550px] justify-center appearance-none overflow-y-scroll gap-2 grid grid-cols-2'
//         >
//           {mostWantedProducts.map((item, index) => (
//             <FoodCart key={index} item={item} />
//           ))}
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
