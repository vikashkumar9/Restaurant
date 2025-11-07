"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function AutoPlay({ meals }) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {meals &&
          meals.map((meal) => (
            <div key={meal._id} className="flex justify-center p-4">
              {/* Image Wrapper (ensures perfect sizing) */}
              <div className="h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border shadow-md">
                <Image
                  src={"/" + meal.image}
                  alt={meal.name}
                  height={200}
                  width={200}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
