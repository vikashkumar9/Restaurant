import { useGetMenuQuery } from '@/services/menuApi';
import React, { useState } from 'react';
import MealCard from './MealCard/MealCard';
import AutoPlay from './MealsImg/AutoPlay';

const Menu = () => {
 
  const { data, error, isLoading } = useGetMenuQuery();
console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.length) return <p>No menu items available</p>;
  return (
    <div>
<h1 className="text-4xl font-bold text-center text-white my-6">Meals</h1>
<div className='pl-10 pr-10 '>
<AutoPlay meals={data || []} />
</div>
      <div className=" mt-2 p-4">

      <MealCard meals={data|| []}/>

    </div>  </div>
  );
};

export default Menu;
