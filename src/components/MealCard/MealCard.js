"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { useContext } from "react";
import { Context } from "../Cartcontext/UserContext";

function MealCard({ meals }) {
  const { setcartitems } = useContext(Context);

  const addToCart = (item) => {
    setcartitems((prevCartItems) => {
      if (prevCartItems.find((c) => c._id === item._id)) {
        return prevCartItems.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <div
            key={meal._id}
            className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                width={100}
                height={50}
                src={"/" + meal.image}
                alt={meal.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs py-1 px-3 rounded-full">
                {meal.category}
              </div>
            </div>

            {/* Title + Price */}
            <div className="p-3 flex justify-between items-center flex-grow">
              <h2 className="text-lg font-semibold text-gray-800">
                {meal.name}
              </h2>
              <p className="text-orange-600 text-xl font-bold">₹{meal.price}</p>
            </div>

            {/* Add to cart */}
            <div className="p-3">
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors"
                onClick={() => addToCart(meal)}
              >
                Add to cart
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">No meals available at the moment.</p>
      )}
    </div>
  );
}

export default MealCard;
