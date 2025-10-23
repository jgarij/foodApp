import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity, removeToCart,clearCart } from '@/Redux/cartSlice';
import { Underline } from 'lucide-react';
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  
  function Increment(item){
    // console.log("incerases");
dispatch(increaseQuantity(item));
  }
 function Decrement(item){
    // console.log("decreses")
    dispatch(decreaseQuantity(item));
    // console.log("Incresed quantity");
  }
  return (
    <div className='flex flex-col bg-white text-black'>
  <div className='flex justify-between'>
    <h2>Cart</h2>
  <p 
  className={cart.items && cart.items.length > 0 ? "block underline cursor-pointer" : "hidden" } 
  onClick={() => dispatch(clearCart())}
>
  Clear All
</p>
</div>
    {
     (cart.items && cart.items.length > 0 )?
     <div>

      {
   cart.items.map((item,index)=>(
  <div className='' key={index}>
  <div className='flex justify-between'>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    <div className='flex justify-between'>
        <button onClick={()=>Decrement(item)}>-</button>
        <p>{item.selectedQuantity}</p>
        <button onClick={()=>Increment(item)}>+</button>
    </div>
      </div>
        ))
      }
      </div>
    
      :
      <p>No element found</p>
    } 
     
    </div>
  )
}
