import React, { useMemo } from "react";
import { useSelector,useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/Redux/cartSlice";

export default function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
  // 🛒 Get cart data from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // 👤 Get user info from localStorage
  const storedUser = localStorage.getItem("UserInfo");
  console.log("storedUser",storedUser)
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log(user);


   const generateOrderId = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();


  // 💰 Calculate subtotal dynamically
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.selectedQuantity,
    0
  );



const handlePay = () => {
  if (!user?.email) {
    alert("No email found!");
    return;
  }
 const orderId = generateOrderId();
 const itemList = cartItems
     

console.log("itemList",itemList);
  const templateParams = {
  to_name: user.name,
  to_email: user.email,
  order_id: orderId,
  orders: cartItems.map(item => ({
    name: item.name,
    units: item.quantity,   // must match {{units}} in EmailJS template
    price: item.price
  })),
  cost: {
    shipping: 0, // must match {{cost.shipping}}
    tax: 0,  
    total: subtotal,       // must match {{cost.tax}}
  },
 
  message: `Thank you for your purchase! Your order ID is ${orderId}. Total: ${subtotal} AMD.`,
};
  emailjs.send(
    "service_qsy12ib",     // replace with your service ID
    "template_c7hsd3j",    // replace with your template ID
    templateParams,
    "eB_qPoeoKpAV5ymgG"     // replace with your EmailJS public key
  ).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Payment successful! Confirmation email sent.");
      dispatch(clearCart());
      navigate("/thankyou");


    },
    (err) => {
      console.log("FAILED...", err);
      alert("Payment successful! But email could not be sent.");
    }
  );
};

  return (
    <div className="flex flex-col lg:flex-row px-10 py-10 gap-10 bg-white  text-black min-h-screen mt-32">
      {/* LEFT COLUMN */}
      <div className="w-full lg:w-3/5">
        {/* Progress Steps */}
        <div className="flex items-center gap-4 mb-6 text-gray-600 text-sm">
          <span className="font-semibold text-black">Shipping</span> ➜
          <span>Review</span> ➜
          <span>Payment</span> ➜
          <span>Confirmation</span>
        </div>

        {/* Address Section */}
        <div className="border p-5 mb-6 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Address</h3>
            <button className="text-sm text-[#a000a8]">Change</button>
          </div>
          {user ? (
            <div className="text-sm leading-relaxed">
              <p className="font-medium">{user.name}</p>
              <p>{user.address || "11, Sironj Vidisha"}</p>
              <p>{user.phone || "7440499316"}</p>
              <p className="text-[#a000a8] mt-2 text-sm">
                Default shipping address
              </p>
            </div>
          ) : (
            <p className="text-sm text-gray-600">
              Please log in to add an address
            </p>
          )}
        </div>

        {/* Payment Section */}
        <div className="border p-5 mb-6 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Payment</h3>
            <button className="text-sm text-[#a000a8]">Change</button>
          </div>
          <select className="w-full border rounded-md p-3">
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Apple Pay</option>
          </select>
        </div>

        {/* Order Items */}
        <div className="border p-5 rounded-md">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Order Items</h3>
            <button onClick={navigate("/menu")} className="text-sm text-[#a000a8]">Edit cart</button>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b py-3 last:border-none"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/bg1.jpg"
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium text-sm hover:underline cursor-pointer">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {item.description || "Delicious and fresh!"}
                    </p>
                    <p className="text-xs">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p>{item.price * item.selectedQuantity} AMD</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Your cart is empty</p>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-2/5 border p-5 rounded-md h-fit">
        <h3 className="font-semibold mb-4">Order summary</h3>

        <div className="text-sm space-y-2 mb-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal} AMD</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-black">
            <span>Total</span>
            <span>{subtotal} AMD</span>
          </div>
        </div>

        {/* Promo / Comment */}
        <div className="mt-4 space-y-2 text-sm">
          <p className="text-gray-600">+ Got a promotion code?</p>
          <p className="text-gray-600">+ Use your Murakami balance</p>
          <textarea
            placeholder="Add comment"
            className="w-full border rounded-md p-2 text-sm"
            rows="3"
          ></textarea>
        </div>

        <button   onClick={handlePay} className="w-full bg-black text-white py-3 rounded-md mt-4 font-semibold hover:bg-gray-800">
          Pay
        </button>
      </div>
    </div>
  );
}
