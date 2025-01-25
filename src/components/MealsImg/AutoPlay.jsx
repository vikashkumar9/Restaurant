"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function AutoPlay({ meals }) {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {meals &&
          meals.map((meal) => (
            <div key={meal._id} className="slide">
              <Image
                src={"/" + meal.image}
                alt="image"
                height={200}
                width={200}
                className="border shadow-sm  rounded-[50%] h:16 w-16 md:h-48 md:w-52"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
