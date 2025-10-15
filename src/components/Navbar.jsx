import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import TopBar from './TopBar';
function Navbar() {
    console.log("garima navbar")
    return (

        <div className='z-10 fixed top-0 left-0 w-full bg-black shadow'>

            <TopBar />

            <div className='flex justify-between h-[65px] items-center px-12'>

                <div className=''>
                    <h1 className='text-2xl'>
                        <a href="">MURAMICITY</a>
                    </h1>
                </div>

                <div className='flex text-xl gap-7 p-5'>
                    <div>Shop Online</div>
                    <div className="flex ">
                        <ul className='flex list-none items-center'>
                            <li><FaCartPlus /></li>
                            <li className='flex px-4'> (0)</li>
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Navbar

