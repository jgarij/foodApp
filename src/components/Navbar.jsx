import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 
function Navbar() {

    return (

        <div className='flex justify-between  items-center bg-black shadow-2xl  w-full px-0 md:px-8 '>

            <div className='hidden md:block  font-bold text-xl md:text-3xl'>
                <p>MURAM<span className='text-pink-900'>I</span>CITY</p>
            </div>
            <div className='md:hidden block px-2 gap-4'>
                <p className='border-1 border-white'></p>
                <p className='bg-pink-800 h-5 w-5 rounded-full mt-1 mb-1'></p>
                <p className='border-1 border-white'></p>

            </div>

            <div className='flex text-base  sm:text-xl gap-7 p-5'>
                <div className='flex justify-between items-center gap-2'> <FaBagShopping />
                    <p> Shop Online</p>
                </div>
                <div className="flex justify-center items-center gap-3 text-base  md:text-xl">
                    
                        <select id="myDropdown" className='text-white bg-black appearance-none border-1 border-gray-700 rounded text-base  md:text-xl' name="myDropdown">
                        <option  className='text-base  md:text-xl' value="en">En</option>
                        <option  className='text-base  md:text-xl' value="option2">Fr</option>
                        <option className='text-base  md:text-xl' value="option3">Ch</option>
                        </select>
                    <p className=''><FaUser /></p>
                    <ul className='flex  list-none items-center gap-1'>

                        <li><FaCartPlus /></li>
                        <li> (0)</li>
                    </ul>
                </div>
            </div>



        </div>

    )
}

export default Navbar

