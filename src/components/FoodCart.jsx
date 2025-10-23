
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,decreaseQuantity,increaseQuantity } from '@/Redux/cartSlice'
import Modal from './Modal'
import ModalPortal from './ModalPortal'
export default function FoodCart({ item }) {
  const [itemQuantity,setItemQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();




  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    // console.log("Item added successfully to cart");
  }

  function IncreaseItemQuantity(){
    setItemQuantity((val)=>val+1)
  }
  function DecreaseItemQuantity(){
setItemQuantity((val)=>val>1?val-1:1)
  }
  const cart = useSelector(state => state.cart);
  // console.log("Items in cart", cart);
 
  // console.log("item", item);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
   const existedInCart=cart.items.find((m)=>(m.name==item.name));
useEffect(() => {
  if (showModal) {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-7px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }
}, [showModal]);




  return (
    <>
      {/* Food card */}
      <div
        onClick={handleModalOpen}
        className="group border-gray-500 border-1 rounded-2xl h-[420px] hover:border-gray-400  cursor-pointer transition"
      >
        <img
          className="md:h-3/5 h-2/4 w-full rounded-t-2xl mt-0 border-b-1 border-gray-600"
          src="https://api.murakamicity.com/storage/webp/Murakami_Philadelphia_with_cucumber-67f6134d041f9.webp"
          alt={item.name}
        />
        <div className="md:h-2/5 h-2/4 p-3 border-t-1 border-gray-50 text-base">
          <h3 className=" font-semibold">{item.name}</h3>
          <p className="text-pink-600  mt-1">
            Buy 3 rolls get "California roll" FREE
          </p>
          <div className="flex w-full justify-between items-center mt-3">
            <div>₹{item.price}</div>
            <div
             
              className="addedcartdirectly"
            >
            {
               existedInCart?  
               <div className='flex bg-white text-black gap-2 rounded-2xl text-xl px-3'>
                <button onClick={(e)=>{
                  e.stopPropagation()
                  dispatch(decreaseQuantity(item))}
              } >-</button>
                <p>{existedInCart.selectedQuantity}</p>
                <button onClick={(e)=>{
                  e.stopPropagation();
                  dispatch(increaseQuantity(item))}
              }>+</button>

               </div>
               : 
               <button  onClick={(e) => {
                e.stopPropagation(); // prevent modal open when adding to cart
                addItemToCart({item:item,itemQuantity:1});
                console.log("Item added succes1")
              }} className="h-7 w-7 rounded-full bg-white text-black flex text-center items-center justify-center text-2xl opacity-0 group-hover:opacity-100 hover:bg-pink-500 transition">
                +
              </button>
            }  
            </div>
          </div>
        </div>
      </div>

      {/* Modal popup */}

 {
       showModal && (
        <ModalPortal>
        <div className='fixed inset-0 flex items-center justify-center z-50  mt-9'>


        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-md flex items-center justify-center " onClick={handleModalClose} />

     <div className=' relative bg-white  inset-0   rounded-xl  w-[80vw]   text-black  opacity-800 flex   z-10  justify-center items-center h-[500px] ' >
     <div className='w-1/2  h-full '>
      <img className=' w-full h-full   object-cover' src="/bg1.jpg" alt="" />
      </div>
      <div className='w-1/2 p-3 h-full flex flex-col  overflow-hidden text-base justify-between'>
     <button className='absolute right-10' onClick={handleModalClose}>❌</button>
      <h2 className='text-xl font-bold'>{item.name}</h2>
     
     <span className=' mb-1'>{item.price} . {item.quantity} Pieces </span>  
      <p className=' text-gray-700 mb-3'>{item.description}</p>
    
          
       <div className="mb-3">
           <details className='flex flex-col gap-2 w-full group border-1 px-3  border-black text-black py-2 rounded-lg'>     
        <summary className='list-none flex justify-between  cursor-pointer'>
          <p className='text font-normal'>Ingredients and flavors </p>
         <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="block group-open:hidden">▼</span>
             <span className="hidden group-open:block">▲</span>
            </p>

        </summary>
       <ul className='flex gap-3'>
        {
         item.ingredients.map((ingredient)=>(
            <li className='whitespace-nowrap bg-blue-50'>{ingredient}</li>
         ))
       }
     
       </ul> 
      
     </details>
        </div> 
      
   
     <h3 className='mt-3'>Also recomended</h3>
     <div className='overflow-y-auto w-full mt-5 gap-4 flex flex-col  h-36' >
      <div className=' bg-blue-50 flex justify-between items-center px-2 py-1'>
     <div className='flex items-center gap-3'>
       <img  className="h-15  w-22 object-fit rounded-2xl object-cover" src="./bg2.jpg" alt="" />
        <h3> California</h3>
      </div>
      <div>
      
        <p>9000</p>
       </div> 

      </div>
     
  <div className='  bg-blue-50 flex justify-between items-center px-3 py-2'>
     <div className='flex items-center gap-3'>
       <img  className="h-15  w-22 object-fit rounded-2xl object-cover" src="./bg2.jpg" alt="" />
        <h3> California</h3>
      </div>
      <div>
      
        <p>9000</p>
       </div> 

      </div>
        <div className='  bg-blue-50 flex justify-between items-center px-2 py-1'>
     <div className='flex items-center gap-3'>
       <img  className="h-15  w-22 object-fit rounded-2xl object-cover" src="./bg2.jpg" alt="" />
        <h3> California</h3>
      </div>
      <div>
      
        <p>9000</p>
       </div> 

      </div>
        <div className='   bg-blue-50 flex justify-between items-center px-2 py-1'>
     <div className='flex items-center gap-3'>
       <img  className="h-15  w-22 object-fit rounded-2xl object-cover" src="./bg2.jpg" alt="" />
        <h3> California</h3>
      </div>
      </div>
     </div>
  <div className='flex justify-between mt-3 w-full gap-6 '>
         <div className=' border-1 border-black flex justify-between items-center rounded-2xl w-1/3 px-1'>
            <div className='px-2'><button onClick={DecreaseItemQuantity} className='text-2xl'>-</button></div>
            <p className='itemquantity px-2 text-xl'>  {itemQuantity} </p>
            <div className="px-2"
            ><button className='text-2xl' onClick={IncreaseItemQuantity}>+</button></div>
         </div>

        <div className='w-2/3 '
        onClick={() => dispatch(addToCart({item, itemQuantity}))}
         ><button   className='bg-black w-full text-white text-xl rounded-2xl px-2 py-3'>Add {itemQuantity} to order {itemQuantity*item.price}</button></div>
       </div>
     </div>
     </div>
     </div>
  </ModalPortal>
       )
    }




    </>
  );
}




//       {showModal && (
//   <div className="fixed inset-0 flex items-center justify-center z-50  mt-9">
//     {/* Overlay background */}
//     <div className="fixed inset-0 bg-opacity-20 backdrop-blur-md" onClick={handleModalClose} />
    
//     {/* Modal card */}
//     <div className="relative  rounded-xl shadow-2xl flex w-[80vw] max-w-full h-[500px] p-0 z-10 overflow-hidden bg-white text-black">
      
//       {/* Left: Food image */}
//       <div className="w-1/2 h-full flex items-center justify-center bg-gray-50">
//         <img
//           src="/bg1.jpg"
//           alt=""
//           className="h-full w-full object-cover rounded-l-xl"
//         />
//       </div>
      
//       {/* Right: Item details */}
//       <div className="w-1/2 h-full p-8 flex flex-col justify-between">
//         {/* Close button */}
//         <button
//           className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-black"
//           onClick={handleModalClose}
//         >
//           ×
//         </button>
//         {/* Title, offer, description */}
//         <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
//         <p className="text-pink-600 mb-1">Buy 3 rolls get "California roll" FREE</p>
//         <span className="text-lg text-gray-700 mb-1">{item.price} • {item.quantity} Pieces </span>
//         <p className="text-gray-700 mb-3">{item.description}</p>
        
//         {/* Ingredients */}
//         <div className="mb-3">
//           <details className='flex flex-col gap-2 w-full group border-1 px-3 border-black text-black'>     
//        <summary className='list-none flex justify-between  cursor-pointer'>
//          <p>Ingredients and flavors </p>
//         <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//              <span className="block group-open:hidden">▼</span>
//             <span className="hidden group-open:block">▲</span>
//            </p>

//        </summary>
//       <ul className='flex gap-3'>
//        {
//          item.ingredients.map((ingredient)=>(
//             <li className='whitespace-nowrap'>{ingredient}</li>
//          ))
//        }
     
//        </ul> 
      
//      </details>
//         </div>

//         {/* Recommendations */}
//         <h3 className="font-semibold mb-2">Also Recommended</h3>

//         <div className='overflow-y-auto'>
//         <div className="flex gap-3 items-center mb-3">
//           <img src="./bg2.jpg" alt="" className="h-11 w-22 object-cover rounded-lg" />
//           <div>
//             <h4 className="font-medium">California</h4>
//             <p className="text-sm">9000</p>
//           </div>
//         </div>
//          <div className="flex gap-3 items-center mb-3">
//           <img src="./bg2.jpg" alt="" className="h-11 w-22 object-cover rounded-lg" />
//           <div>
//             <h4 className="font-medium">California</h4>
//             <p className="text-sm">9000</p>
//           </div>
//         </div>
//          <div className="flex gap-3 items-center mb-3">
//           <img src="./bg2.jpg" alt="" className="h-11 w-22 object-cover rounded-lg" />
//           <div>
//             <h4 className="font-medium">California</h4>
//             <p className="text-sm">9000</p>
//           </div>
//         </div>
//          <div className="flex gap-3 items-center mb-3">
//           <img src="./bg2.jpg" alt="" className="h-11 w-22 object-cover rounded-lg" />
//           <div>
//             <h4 className="font-medium">California</h4>
//             <p className="text-sm">9000</p>
//           </div>
//         </div>
//          <div className="flex gap-3 items-center mb-3">
//           <img src="./bg2.jpg" alt="" className="h-11 w-22 object-cover rounded-lg" />
//           <div>
//             <h4 className="font-medium">California</h4>
//             <p className="text-sm">9000</p>
//           </div>
//         </div>
// </div>
//         {/* Add to cart */}
//         <div className="flex items-center justify-between">
//           <div className=" flex gap-2 items-center px-4 py-2 rounded-lg text-xl text-black border-1 border-black">
//             <button onClick={DecreaseItemQuantity}>-</button>
//             <span>{itemQuantity}</span>
//             <button onClick={IncreaseItemQuantity}>+</button>
//           </div>
//           <button
//             onClick={() => dispatch(addToCart({item, itemQuantity}))}
//             className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-lg"
//           >
//             Add {itemQuantity} to order ₹{itemQuantity * item.price}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}






// Mera code
