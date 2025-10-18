import React, { useRef, useEffect, useState } from "react";
import CardCategory from "../components/CardCategory";
import { uniqueCategories } from "../assets/data/MenuData";

export default function Categories() {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const half = Math.ceil(uniqueCategories.length / 2);
  const firstHalf = uniqueCategories.slice(0, half);
  const secondHalf = uniqueCategories.slice(half);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      const deltaX = e.deltaX;
      const deltaY = e.deltaY;

      if (slider1Ref.current && slider2Ref.current) {
        if (deltaY !== 0) {
          slider1Ref.current.scrollLeft += deltaY;
          slider2Ref.current.scrollLeft -= deltaY;
        }
        if (deltaX !== 0) {
          slider1Ref.current.scrollLeft += deltaX;
          slider2Ref.current.scrollLeft -= deltaX;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft1(slider1Ref.current.scrollLeft);
    setScrollLeft2(slider2Ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const walk = e.clientX - startX;
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.scrollLeft = scrollLeft1 - walk;
      slider2Ref.current.scrollLeft = scrollLeft2 + walk;
    }
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <div className="mt-10 select-none  px-2 md:px-8">
      <h3 className="text-2xl md:text-4xl font-bold   text-white">
        OUR CATEGORIES
      </h3>

      <div
        className="flex flex-col gap-10 cursor-grab mt-5"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {/* First Row */}
        <div
          ref={slider1Ref}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 no-scrollbar"
        >
          {firstHalf.map((item) => (
            <div
              key={item.id}
              // className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] "
            >
              <CardCategory item={item} />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div
          ref={slider2Ref}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 no-scrollbar"
        >
          {secondHalf.map((item) => (
            <div
              key={item.id}
              // className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
            >
              <CardCategory item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
