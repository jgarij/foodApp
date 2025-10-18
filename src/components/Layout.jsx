import React from 'react'
import {Outlet,Link} from "react-router-dom";
import Navbar from './Navbar';
import Footer from '../pages/Footer';
import TopBar from './TopBar';
import Header from '../pages/Header';
export default function Layout() {
  return (
    <div className=''>
      <Link to="/"><Header></Header></Link>
      <Outlet></Outlet>
      <Link to="/" ><Footer></Footer></Link> 
    </div>
  )
}
