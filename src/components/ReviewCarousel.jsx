import React, { useState, useEffect, useRef } from "react";
import Review from "./Review";

export default function ReviewCarousel({ reviews }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];
  const totalItems = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = carousel.children[0].offsetWidth + 16; // +gap

    carousel.style.transition = "transform 0.7s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Reset without animation when reaching the duplicated section
    if (currentIndex >= totalItems) {
      setTimeout(() => {
        carousel.style.transition = "none";
        setCurrentIndex(0);
        carousel.style.transform = `translateX(0px)`;
      }, 700); // match the transition duration
    }
  }, [currentIndex, totalItems]);

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold">YOUR REVIEWS COUNTS</h2>
      <div className="flex gap-3 text-xl mdtext-2xl mb-5">
        ⭐⭐⭐⭐ 4 <span><a href="">Google Reviews</a></span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4"
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/4 px-2"
            >
              <div className="flex flex-col justify-between h-[390px] rounded border-gray-100 border-2 p-4 text-xl">
                <div>{review.text}</div>
                <div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
