import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import FoodCart from "./FoodCart";
export default function SauceCarousel({ data }) {
  const swiperRef = useRef(null);

  return (
    <div>
      {/* Header with Title and Arrows */}
      <div className="flex justify-between items-center px-2 mb-2">
        <h2 className="text-xl font-semibold">Add Sauces</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="p-2 border rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="p-2 border rounded-full"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <FoodCart item={item} key={index}></FoodCart>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
