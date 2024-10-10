"use client";
import { useState, useEffect } from "react";
import MealCard from "@/components/MealCard/MealCard";
import UserHeader from "@/components/Userheader/UserHeader";
const Restaurent = ({ params }) => {
  const [productData, setproducuData] = useState([]);
  const id = params.restaurent;
  const getData = async () => {
    try {
      const productData = await fetch(`/api/products`);
      if (!productData.ok) {
        throw new Error("Network response was not ok");
      }
      const results = await productData.json();
      setproducuData(results.result);
      console.log(id, results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <UserHeader />

      <MealCard meals={productData} />
    </>
  );
};

export default Restaurent;
