import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "@/components/Login";
import { useNavigate } from "react-router-dom";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeToCart,
  clearCart,
} from "@/Redux/cartSlice";
import foodData from "../assets/data/Menu";
import Slider from "../components/slider";

export default function CartPage() {
  const navigate=useNavigate()
  const [drinks, setDrinks] = useState([]);
  const [sauces, setSauces] = useState([]);

  useEffect(() => {
    const d = foodData.menu.find((item) => item.category === "Drink");
    setDrinks(d?.items || []);
    const s = foodData.menu.find((item) => item.category === "Sauces");
    setSauces(s?.items || []);
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const subtotal = cartItems.items.reduce(
    (acc, item) => acc + item.price * item.selectedQuantity,
    0
  );

  return (
    <div className="bg-white text-black flex flex-col md:flex-row mt-32 md:px-8 mb-11 gap-8">
      {/* LEFT SIDE — CART ITEMS */}
      <div className="w-full md:w-2/3 p-6 md:p-9  rounded-2xl ">
        {cartItems.items && cartItems.items.length > 0 ? (
          <div>
            <Link to="/">
              <p className="font-bold text-blue-600 hover:underline">
                ← Back to shop
              </p>
            </Link>
            <h3 className="text-2xl font-semibold mt-3 mb-2">My Cart</h3>
            <hr className="border-gray-300 mb-4" />

            {/* Header Row */}
            <div className="hidden md:flex justify-between font-semibold text-black-600 mb-2">
              <p className="w-1/3">Item</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total</p>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-4">
              {cartItems.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between  rounded-xl p-4  "
                >
                  {/* Item details */}
                  <div className="flex items-center w-full md:w-1/3 mb-3 md:mb-0">
                    <img
                      className="h-[90px] w-[90px] object-cover rounded-lg mr-4"
                      src="./bg1.jpg"
                      alt={item.name}
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
                    >
                      -
                    </button>
                    <p className="font-medium">{item.selectedQuantity}</p>
                    <button
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="hidden md:block font-medium">
                    ₹{item.price}
                  </div>

                  {/* Total + Remove */}
                  <div className="flex flex-col items-end">
                    <p className="font-semibold">
                      ₹{item.price * item.selectedQuantity}
                    </p>
                    <button
                      className="text-red-500 text-sm hover:underline mt-1"
                      onClick={() => dispatch(removeToCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Ons Section */}
            <hr className="border-gray-300 my-6" />
            {sauces && sauces.length > 0 && (
              <>
              
                <Slider data={sauces} />
              </>
            )}
            {drinks && drinks.length > 0 && (
              <>
                
                <Slider data={drinks} />
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-lg">
            <p>No items found in your cart 🛒</p>
            <Link
              to="/"
              className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
            >
              Go Shopping
            </Link>
          </div>
        )}
      </div>

      {/* RIGHT SIDE — ORDER SUMMARY */}
      <div className="w-full md:w-1/3 p-6 md:p-9  rounded-2xl  h-fit">
        <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col gap-4 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{subtotal + 0}</span>
          </div>
        </div>
       <button
  onClick={() => {
    const userInfo = localStorage.getItem("UserInfo");
    if (userInfo) {
      navigate("/checkout");
    } else {
      navigate("/signin");
    }
  }}
  className="bg-black text-white p-3 w-full text-lg rounded-xl mt-5 hover:bg-gray-800 transition"
>
  Proceed to Payment
</button>
        {/* <Login/> */}

      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   addToCart,
//   increaseQuantity,
//   decreaseQuantity,
//   removeToCart,
//   clearCart,
// } from "@/Redux/cartSlice";
// import foodData from "../assets/data/Menu";
// import Slider from "../components/slider";

// export default function CartPage() {
//   const [drinks, setDrinks] = useState([]);
//   const [sauces, setSauces] = useState([]);

//   useEffect(() => {
//     const d = foodData.menu.find((item) => item.category === "Drink");
//     setDrinks(d?.items || []);
//     const s = foodData.menu.find((item) => item.category === "Sauces");
//     setSauces(s?.items || []);
//   }, []);

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const subtotal = cartItems.items.reduce(
//     (acc, item) => acc + item.price * item.selectedQuantity,
//     0
//   );

//   return (
//     <div className="bg-white text-black flex flex-col md:flex-row mt-24 md:px-8 mb-11 gap-6">
//       {/* Left Section - Cart Items */}
//       <div className="w-full md:w-2/3 p-5 md:p-9 bg-gray-50 rounded-2xl shadow-md">
//         {cartItems.items && cartItems.items.length > 0 ? (
//           <div>
//             <Link to="/" className="text-blue-600 hover:underline font-medium">
//               ← Back to shop
//             </Link>
//             <h2 className="text-2xl font-bold mt-4 mb-2">My Cart</h2>
//             <hr className="border-gray-300 mb-4" />

//             {/* Item Header (visible on desktop only) */}
//             <div className="hidden md:flex justify-between font-semibold text-gray-600 mb-2">
//               <p className="w-1/3">Item</p>
//               <p>Quantity</p>
//               <p>Price</p>
//               <p>Total</p>
//             </div>

//             {/* Items */}
//             <div className="flex flex-col gap-4">
//               {cartItems.items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-200"
//                 >
//                   {/* Item details */}
//                   <div className="flex items-center w-full md:w-1/3 mb-3 md:mb-0">
//                     <img
//                       className="h-[90px] w-[90px] object-cover rounded-lg mr-4"
//                       src="./bg1.jpg"
//                       alt={item.name}
//                     />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p className="text-sm text-gray-500 line-clamp-2">
//                         {item.description}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Price: ₹{item.price}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quantity */}
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => dispatch(decreaseQuantity(item))}
//                       className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
//                     >
//                       -
//                     </button>
//                     <p className="font-medium">{item.selectedQuantity}</p>
//                     <button
//                       onClick={() => dispatch(increaseQuantity(item))}
//                       className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
//                     >
//                       +
//                     </button>
//                   </div>

//                   {/* Price */}
//                   <div className="hidden md:block font-medium">
//                     ₹{item.price}
//                   </div>

//                   {/* Total + Remove */}
//                   <div className="flex flex-col items-end">
//                     <p className="font-semibold">
//                       ₹{item.price * item.selectedQuantity}
//                     </p>
//                     <button
//                       className="text-red-500 text-sm hover:underline mt-1"
//                       onClick={() => dispatch(removeToCart(item))}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Add Ons */}
//             <div className="mt-8">
//               {sauces && sauces.length > 0 && (
//                 <>
                  
//                   <Slider data={sauces} />
//                 </>
//               )}
//               {drinks && drinks.length > 0 && (
//                 <>
                  
//                   <Slider data={drinks} />
//                 </>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-12 text-gray-500 text-lg">
//             <p>No items found in your cart 🛒</p>
//             <Link
//               to="/"
//               className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
//             >
//               Go Shopping
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* Right Section - Summary */}
//       <div className="w-full md:w-1/3 p-6 bg-gray-50 rounded-2xl shadow-md h-fit sticky top-24">
//         <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//         <hr className="border-gray-300 mb-4" />

//         <div className="space-y-3 text-gray-700">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{subtotal}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>₹50</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg">
//             <span>Total</span>
//             <span>₹{subtotal + 50}</span>
//           </div>
//         </div>

//         <button className="bg-black text-white w-full py-3 mt-6 rounded-lg hover:bg-gray-800 transition">
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// }
