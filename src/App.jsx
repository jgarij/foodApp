import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Slider from './pages/Slider'
import MostWanted from './components/MostWanted'
import Categories from './pages/Categories';
import Order from './pages/Order';
import FAQ from './pages/FAQ'
import Footer from './pages/Footer'
import Opinion from './pages/Opinion'
import Menu from './pages/Menu'
import Muramoney from './pages/Muramoney'

 import MovingBalls from './components/MovingBall'

function App() {


  return (
    <>
  
  <Navbar></Navbar>
  {/* <Menu></Menu> */}
  <Muramoney></Muramoney>
 
  {/* <Slider></Slider>
<MostWanted></MostWanted>
<Categories></Categories>
<Order></Order>
<Opinion></Opinion> */}
{/* <FAQ></FAQ>
<Footer></Footer> */}

    </>


  )
}

export default App
