import React, { useState, useEffect, useRef } from "react";
import Review from "./Review";
import Button from "./Button"
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
    <div className="px-2 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold">YOUR REVIEWS COUNTS</h2>
      <div className="flex gap-3 text-xl md:text-2xl mb-4 mt-5 md:flex-row flex-col justify-between md:items-center">
        <div>⭐⭐⭐⭐ 4<span><a href="">Google Reviews</a></span></div>
        <div><Button content="Write a review" route="/" ></Button></div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4"
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[360px]  px-2"
            >
              <div className="flex flex-col justify-between h-[300px] rounded-2xl border-gray-100 border-2 p-4 text-base flex-shrink-0">
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
    </div>
  );
}
