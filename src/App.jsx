import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
// import TopBar from './components/TopBar'
// import Navbar from './components/Navbar'
// import Slider from './pages/Slider'
import MostWanted from './components/MostWanted'
import Categories from './pages/Categories';
import Order from './pages/Order';
import FAQ from './pages/FAQ'
import Footer from './pages/Footer'
import Opinion from './pages/Opinion'
import Menu from './pages/Menu'
import Muramoney from './pages/Muramoney'
import Layout from './components/Layout'
import MovingBalls from './components/MovingBall'
import AboutCart from './components/AboutCart'
import HeroSectionFooter from './pages/HeroSectionFooter'
import MenuSection from './components/MenuSection'
import HeroSection from './pages/HeroSection'
import MainPage from './pages/MainPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import Modal from './components/Modal'
import LoginPage from './pages/LoginPage'

import Checkout from './pages/Checkout'
import Thankyou from './pages/Thankyou'


function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
           <Route path="muramoney" element={<Muramoney/>}></Route>
            <Route path="signin" element={<LoginPage/>}></Route>
              <Route path="thankyou" element={<Thankyou />} />
                        <Route path="checkout" element={<Checkout/>}></Route>
          <Route path="menu" element={<MainPage />} />
          <Route path="menu/:category" element={<MainPage />} />
          <Route path="cart" element={<CartPage />} />
         

        </Route>

      </Routes>
    </BrowserRouter>


  )
}

export default App
