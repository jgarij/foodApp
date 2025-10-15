import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSectionFooter from "./HeroSectionFooter";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    console.log("Slider")
    return (
        <section className="mt-22">

            <div>
                <Slider {...settings} className="">
                    <div className="bg-[url('/bg3.png')]  h-[450px] bg-cover flex  my-auto   justify-center items-center ">
                        <div className="   font-bold p-4 rounded-lg px-22 mt-48  w-1/2  ">
                            <p className="text-3xl  herotext">THE BEST SUSHI  DELIVERY  IN YEREAN</p>
                            <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 herobtn">
                                Order now
                            </button>

                        </div>
                    </div>
                    <div className="bg-[url('/bg3.png')]    bg-cover h-[450px]">
                        <div className="   font-bold p-4 rounded-lg px-22 mt-48  w-1/2">
                            <p className="text-3xl herotext">BUY 3 ROLLS AND  GET THREE CALIFORNIA ROLLS (WEEK DAYS ONLY)</p>
                            <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-5 rounded herobtn">
                                Order now
                            </button>
                        </div>
                    </div>

                    <div className="bg-[url('/bg3.png')]   bg-cover h-[450px]">
                        <div className="   font-bold p-4 rounded-lg px-22 mt-48  w-1/2">
                            <p className="text-3xl herotext">ENJOY 5% OFF ! MON-FRI | 2-5 PM   THREE</p>
                            <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 herobtn">
                                Order now
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="h-[10vh]">
                <HeroSectionFooter></HeroSectionFooter>
            </div>
        </section>
    );
}