import React from 'react'
import Opinion from './Opinion'
import Carousel from '../components/Carousel'
import MostWanted from '../components/MostWanted'
import Categories from './Categories'
import CardCategory from '../components/CardCategory'
import ReviewCarousel from '../components/ReviewCarousel'
import HeroSectionFooter from './HeroSectionFooter'
import FAQ  from "./FAQ"

export default function HomePage() {
    const slidesData = [
    {
      image: "/bg3.png",
      title: "THE BEST SUSHI DELIVERY IN YEREVAN",
      button: "Order Now",
    },
    {
      image: "/bg2.png",
      title: "BUY 3 ROLLS AND GET 3 FREE!",
      button: "Order Now",
    },
    {
      image: "/bg1.png",
      title: "ENJOY 5% OFF MON–FRI",
      button: "Shop Now",
    },
  ];
  const reviewsData = [
  { name: "Alice", text: "Great product! lorem22 " },
  { name: "Bob", text: "Loved it! Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, ullam iusto, maiores quidem recusandae nostrum dolore nisi quaerat cupiditate architecto eius blanditiis!" },
  { name: "Charlie", text: "Highly recommend." },
  { name: "David", text: "Five stars. Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, ullam iusto, maiores quidem recusandae nostrum dolore nisi quaerat cupiditate architecto eius blanditiis!" },
  { name: "Eva", text: "Amazing service. Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, ullam iusto, maiores quidem recusandae nostrum dolore nisi quaerat cupiditate architecto eius blanditiis!" },
  { name: "Frank", text: "Will buy again." },
];
    return (
        <div className="flex flex-col gap-5">
          hello
         
           <Carousel></Carousel>
           <HeroSectionFooter></HeroSectionFooter> 
         
            
         
            <MostWanted></MostWanted> 

            <Categories></Categories>
          
             <ReviewCarousel reviews={reviewsData} />
             <FAQ></FAQ> 
           
           
        </div>
    )
}
