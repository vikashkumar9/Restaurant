"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

function MealCard({ meals }) {
  const cartdata = JSON.parse(localStorage.getItem("cartdata"));
  var data;
  if (cartdata) {
    data = cartdata;
  } else {
    data = [];
  }

  const [cartitems, setcartitems] = useState(data);

  const addtocart = (item) => {
    setcartitems(() => {
      if (cartitems.find((c) => c._id === item._id)) {
        return cartitems.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...cartitems, item];
      }
    });
  };
  useEffect(() => {
    localStorage.setItem("cartdata", JSON.stringify(cartitems));
  }, [cartitems]);

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {meals ? (
        meals.map((meal) => (
          <div
            key={meal._id}
            className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <Image
                width={100}
                height={50}
                src={"/" + meal.image}
                alt={meal.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white text-sm py-1 px-2 rounded">
                {meal.category}
              </div>
            </div>
            <div className="p-2 text-center flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {meal.name}
              </h2>
              <p className="text-blue-600 text-xl font-bold">₹{meal.price}</p>
            </div>
            <div className="m-1">
            <Button
              className="w-full  bg-orange-500 text-white py-2 rounded-lg"
              onClick={() => addtocart(meal)}
            >
              Add to cart
            </Button></div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">No meals available at the moment.</p>
      )}
    </div>
  );
}
export default MealCard;
