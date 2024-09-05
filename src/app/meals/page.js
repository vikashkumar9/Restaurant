"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import MealCard from '@/components/MealCard/MealCard';
import Link from 'next/link';
import { getmeals } from '@/components/apiData/datafn';

const Meals = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
      const data = await getmeals();
      setProducts(data.result);
      console.log('data', data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Head>
        <title>Meal Cards</title>
        <meta name="description" content="Responsive meal cards using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Delicious Meals</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((meal) => (
              <Link key={meal.id} href={`/meals/${meal.id}`}>
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
