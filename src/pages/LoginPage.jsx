
import React, { useState } from "react";
import { Eye, EyeOff, ShoppingBag, User, Globe } from "lucide-react";
import Login from "@/components/Login";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Top bar */}
      <div className="bg-[#a000a8] text-white text-sm flex justify-center items-center gap-4 py-2">
        <p>DELIVERY AND PICK UP EVERY DAY 10:00 AM - 02:00 AM</p>
        <span>|</span>
        <p className="flex items-center gap-1">
          <span className="text-white">📞</span> +374 11 388888
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-black text-white flex justify-between items-center px-10 py-4">
        <div className="text-2xl font-bold">
          <span className="tracking-widest">
            MURAKAMI
            <span className="text-[#a000a8] mx-1">●</span>
            CITY
          </span>
        </div>
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-1 cursor-pointer">
            🛍️ <span>Shop online</span>
          </p>
          <button className="border px-3 py-1 rounded-md">En</button>
          <User size={20} />
          <div className="flex items-center gap-1">
            <ShoppingBag size={20} /> <span>(2)</span>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">Welcome back!</h2>

        <form className="w-full max-w-md flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-400 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-gray-600 underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <button className="bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-800">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">or continue with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

           <Login></Login>
        
        </form>
      </div>
    </div>
  );
}
