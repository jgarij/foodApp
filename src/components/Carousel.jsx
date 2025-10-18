import React, { useState, useEffect } from "react";
import slidesData from "../assets/data/slides";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Button from "./Button";
import HeroSectionFooter from "../pages/HeroSectionFooter"
export default function Carousel() {
  const slides = slidesData.slides;
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);  // for initial zoom-out
  const [textAnimationKey, setTextAnimationKey] = useState(0); // to re-trigger text animation

  // Trigger image zoom-out only once
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // Re-trigger text animation on slide change
  useEffect(() => {
    setTextAnimationKey(prev => prev + 1); // new key triggers new animation
  }, [currentPage]);

  const handleNextSlide = () => {
    setCurrentPage((currentPage + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentPage((currentPage - 1 + slides.length) % slides.length);
  };

  return (
    <div>

    <div className="relative w-full h-[500px] mt-24 overflow-hidden">
      {/* Background image with initial zoom-out effect */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${
          pageLoaded ? "zoom-out" : ""
        }`}
        style={{ backgroundImage: `url(${slides[currentPage].img})` }}
      ></div>

      {/* Text and button sliding in from the left on each slide */}
      <div className="relative w-full sm:w-1/2 h-full flex items-center px-2 md:px-8">
        <div
          key={textAnimationKey} // triggers animation every time
          className="text-white text-4xl font-bold space-y-6 slide-in-left"
        >
          <p>{slides[currentPage].title}</p>
          <Button content="Order Now" route="/menu" />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-5 right-5 flex gap-2 z-10">
        <button
          onClick={handlePrevSlide}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={handleNextSlide}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <GrFormNext size={24} />
        </button>
      </div>

    
    </div>
     <HeroSectionFooter></HeroSectionFooter> 
    </div>
  );
}
