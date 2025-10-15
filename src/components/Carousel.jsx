

import React, { useState } from "react";
import slidesData from "../assets/data/slides";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Button from "./Button";

export default function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const slides = slidesData.slides;

  function handleNextSlide() {
    setCurrentPage(currentPage === slides.length - 1 ? 0 : currentPage + 1);
  }

  function handlePrevSlide() {
    setCurrentPage(currentPage === 0 ? slides.length - 1 : currentPage - 1);
  }

  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-blend-color-burn bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentPage].img})` }}
      ></div>

      {/* Optional overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div> */}

      {/* Text on left */}
      <div className="relative  mt-32 w-1/2 h-full align-middle  flex items-center ">
        <p className="text-white text-2xl font-bold h-full">
          {slides[currentPage].content}
          <Button content="Order Now" route="/menu" ></Button>
        </p>

      </div>

      {/* Buttons bottom-right */}
      <div className="absolute bottom-5 right-5 flex gap-2 z-10">
        <button
          onClick={handlePrevSlide}
          className=" p-2 rounded-full hover:bg-gray-200"
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={handleNextSlide}
          className=" p-2 rounded-full hover:bg-gray-200"
        >
          <GrFormNext size={24} />
        </button>
      </div>
    </div>
  );
}
