import React, { useRef, useEffect, useState } from "react";
import CardCategory from "../components/CardCategory";
import { uniqueCategories } from "../assets/data/MenuData";

export default function Categories() {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const half = Math.ceil(uniqueCategories.length / 2);
  const firstHalf = uniqueCategories.slice(0, half);
  const secondHalf = uniqueCategories.slice(half);

  // States for dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      // Determine the scroll direction and amount (both vertical and horizontal)
      const deltaX = e.deltaX; // Horizontal scroll (positive for right, negative for left)
      const deltaY = e.deltaY; // Vertical scroll (positive for down, negative for up)

      if (slider1Ref.current && slider2Ref.current) {
        if (deltaY !== 0) {
          // Vertical scroll: Move sliders horizontally in opposite directions
          slider1Ref.current.scrollLeft += deltaY; // First slider moves with vertical scroll
          slider2Ref.current.scrollLeft -= deltaY; // Second slider moves in opposite direction
        }
        if (deltaX !== 0) {
          // Horizontal scroll: Move sliders horizontally in opposite directions
          slider1Ref.current.scrollLeft += deltaX; // First slider moves with horizontal scroll
          slider2Ref.current.scrollLeft -= deltaX; // Second slider moves in opposite direction
        }
      }
    };

    // Attach the wheel event listener
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft1(slider1Ref.current.scrollLeft);
    setScrollLeft2(slider2Ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    // Calculate the walk (distance the mouse has moved)
    const walk = e.clientX - startX;

    // Move the sliders in opposite directions
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.scrollLeft = scrollLeft1 - walk; // First slider moves with drag
      slider2Ref.current.scrollLeft = scrollLeft2 + walk; // Second slider moves in opposite direction
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="mt-10 select-none">
      <h3 className="text-3xl font-bold mb-6">OUR CATEGORIES</h3>

      <div
        className="flex flex-col gap-8 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* First Row */}
        <div ref={slider1Ref} className="flex gap-4 overflow-x-hidden">
          {firstHalf.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-1/4">
              <CardCategory item={item} />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div ref={slider2Ref} className="flex gap-4 overflow-x-hidden">
          {secondHalf.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-1/4">
              <CardCategory item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
