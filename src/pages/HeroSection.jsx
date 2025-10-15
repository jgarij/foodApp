import React from 'react'

import Carousel from "../components/Carousel"
import HeroFooter from '../components/HeroFooter'
import MostWanted from '../components/MostWanted'
import Categories from './Categories'
export default function HeroSection() {
    return (
        <div className=''>
            <Carousel></Carousel>
            <HeroFooter></HeroFooter>
            <MostWanted></MostWanted>
            <Categories/>

        </div>
    )
}

