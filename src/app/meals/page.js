"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import MealCard from '@/components/MealCard/MealCard';
import Link from 'next/link';
import Carousel from '@/components/carosel/js';

export async function getmeals() {
  const response = await fetch('/api/meals');
  const data = await response.json();
  return data;
}
const Meals = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
      const data = await getmeals();
      setProducts(data.result);
      console.log("meals data ",data.result)
  };
  useEffect(() => {
    fetchData();
  }, []);

  const slides = products.map((item) => ({
    image: item.image,
    id:item._id
  
  }));
  
  console.log("image",slides);
  
  return (
    
    <div>
      
        <Head>
        <title>Meal Cards</title>
        <meta name="description" content="Responsive meal cards using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="p-8 min-h-screen">
        <h1 className="text-3xl font-bold  text-gray-800 text-center mb-8">Our Delicious Meals</h1>
        <Carousel slides={slides}/>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
          {products.length > 0 ? (
            products.map((meal) => (
              <Link key={meal._id} href={`/meals/${meal._id}`}>
                <MealCard
                  image={meal.image}
                  category={meal.category}
                  name={meal.name}
                  price={meal.price}
                />
 
              </Link>
            ))
          ) : (
            <p className="text-center text-lg">No meals available at the moment.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Meals;
