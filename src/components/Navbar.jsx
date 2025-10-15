import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Navbar() {

    return (

        <div className='flex justify-between h-[65px] items-center px-12 w-full shadow-2xl'>

            <div className='font-bold text-3xl'>
                <p>MURAMICITY</p>

            </div>

            <div className='flex text-l gap-7 p-5'>
                <div className='flex justify-between items-center gap-2'> <FaBagShopping />
                    <p> Shop Online</p>
                </div>
                <div className="flex justify-center items-center gap-3 text-xl">
                    <p className=''><TbLogin2 /></p>
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

