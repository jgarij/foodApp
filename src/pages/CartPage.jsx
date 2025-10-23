import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { addToCart,increaseQuantity,decreaseQuantity,removeToCart,clearCart} from '@/Redux/cartSlice';
import foodData from "../assets/data/Menu"
import FoodCart from '@/components/FoodCart';

import Slider from "../components/slider"


export default function CartPage() {
 const [drinks, setDrinks] = useState([]);
  const [sauces, setSauces] = useState([]);
useEffect(()=>{
    
 const d = foodData.menu.find((item)=>item.category=='Drink')
setDrinks(d?.items||[])
 const s = foodData.menu.find((item)=>item.category==='Sauces');
setSauces(s?.items||[]);

},[])

    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cart);
    // console.log(cartItems);
    const subtotal = cartItems.items.reduce(
        (acc,item)=>acc+ item.price*item.selectedQuantity,
        0)
  return (
    <div className='bg-white text-black flex mt-32 md:px-8 mb-11'>
      <div className='w-2/3 '>
      {
         cartItems.items && cartItems.items.length>0? 
         
         <div>
          <Link to="/"><p className='font-bold'> Back to shop</p> </Link>
          <h3>My Cart</h3>
           <p className=' border-1 border-black'></p>
           <div className="">
            <div className='title flex justify-between'>
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p> 

            </div>
      

       
       {
        cartItems.items.map((item)=>(

        
            <div className='items flex justify-between'>
                {/* item */}
              
                <div className='flex '>
                    <img className='h-[100px] w-[90px]' src="./bg1.jpg" alt="" />
                    <div>
                       <p> {item.name}</p>
                       <p> {item.description}</p>
                       <p>Price {item.quantity}</p>
                    </div>
                </div>
                {/* quantity */}
                <div className='flex items-center '>
                <button onClick={()=>{dispatch(decreaseQuantity(item))}}>-</button>
                <p>{item.selectedQuantity}</p>
                <button onClick={()=>{dispatch(increaseQuantity(item))}}>+</button>
                </div>
                {/* price */}
                <div>
                    {item.price}
                </div>
                {/* total */}
                <div className=' justify-between items-center flex flex-col'>
                  <p> {item.price * item.selectedQuantity}</p> 
                  <p className='cursor-pointer' onClick={()=>(dispatch(removeToCart(item)))}>Remove</p>
                </div>
            </div>
              ))
      }
           </div>

           <p className='border-1 border-black'></p>
           {/* <h2>Add Sauces</h2> */}
           <div>
           {
            sauces&&sauces.length>0 && <Slider data={sauces}/>
            
           }
           </div>
           {/* <h2>Add Drink</h2> */}
           <div>
           {
            drinks&&drinks.length>0 && <Slider data={drinks}/>
            
           }

           
           </div>

           </div>
        
        

        : <p>No item found</p>
      }
       
      </div>
      
    

      <div className='w-1/3'>
        <h2>Order summary</h2>
        <p className=' border-1 border-black'></p>
        <div className='flex justify-between flex-col'>
            <p>Subtotal {subtotal}</p>
            <p>Shipping</p>
            <p>Total {subtotal}</p>
        </div>
        <button className='bg-black text-white p-2 w-full'>Proceed to Payment</button>
      </div>
    </div>
  )
}
