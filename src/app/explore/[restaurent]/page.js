"use client";
import { useState, useEffect } from "react";
import MealCard from "@/components/MealCard/MealCard";
import UserHeader from "@/components/Userheader/UserHeader";
import Restaurentdetails from "@/components/Restaurentdetails/Restaurentdetails";
import MealsFooter from "@/components/Footer/MealsFooter";
import AutoPlay from "@/components/MealsImg/AutoPlay";
const Restaurent = ({ params }) => {
  const [productData, setProductData] = useState([]);
  const id = params.restaurent;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/restaurentpage/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const results = await response.json();
        setProductData(results);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="bg-gray-900">
      <UserHeader />
      <div className="bg-[url('/loginbg.jpeg')] bg-cover bg-center h-[200px] md:h-[400px] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {productData.restaurent?.name}
        </h1>
      </div>{" "}
      <div className="my-4">
        <Restaurentdetails resto={productData?.restaurent} />
      </div>
      <div className='pl-10 pr-10'>
      <AutoPlay meals={productData?.meals || []} />
      </div>
      <div className=" m-8">
        <MealCard meals={productData?.meals || []} />
      </div>
      <MealsFooter />
    </div>
  );
};

export default Restaurent;
