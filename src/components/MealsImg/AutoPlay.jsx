"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function AutoPlay({ meals }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
                className="border border-whitesmoke rounded-full"
              />
              <h3>{meal.name}</h3>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
