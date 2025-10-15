import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
export default function Header() {
  return (
    <div className='w-full fixed top-0 left-0 h-12 z-109'>
      <TopBar></TopBar>
      <Navbar></Navbar>
    </div>
  )
}
