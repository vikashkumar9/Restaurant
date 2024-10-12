import React from "react";
import {
  FaCheckCircle,
  FaUtensils,
  FaShippingFast,
  FaLeaf,
} from "react-icons/fa";

const RestaurantTrust = () => {
  return (
    <div className="bg-gray-200 w-full h-400px py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center p-4">
          <FaCheckCircle className="text-green-500 text-5xl mb-4" />
          <h4 className="text-xl font-bold text-gray-800">
            Quality Ingredients
          </h4>
          <p className="text-gray-600 mt-2">
            We only use fresh, locally-sourced ingredients for every meal.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaUtensils className="text-orange-500 text-5xl mb-4" />
          <h4 className="text-xl font-bold text-gray-800">Experienced Chefs</h4>
          <p className="text-gray-600 mt-2">
            Our chefs have over 10 years of experience in gourmet cuisine.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaShippingFast className="text-blue-500 text-5xl mb-4" />
          <h4 className="text-xl font-bold text-gray-800">Fast Delivery</h4>
          <p className="text-gray-600 mt-2">
            Get your meal delivered fresh and fast right to your door.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaLeaf className="text-green-700 text-5xl mb-4" />
          <h4 className="text-xl font-bold text-gray-800">
            Eco-Friendly Packaging
          </h4>
          <p className="text-gray-600 mt-2">
            We use 100% biodegradable and eco-friendly packaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTrust;
