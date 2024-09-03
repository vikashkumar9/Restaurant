"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link';
import Head from 'next/head';
import Button from '@/components/ui/Button';
const Meal = () => {
    const router = useParams();
    const { id } = router.slug;
  
    const meal = {
      image: '/bannerimg1.jpg',
      name: 'Spring Rolls',
      category: 'Appetizer',
      price: '5.99',
      description: 'Delicious spring rolls with fresh vegetables and a savory dipping sauce.',
    };
  
    return (
      <div>
        <Head>
          <title>{meal.name}</title>
          <meta name="description" content={`Details about ${meal.name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="p-8 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={meal.image} alt={meal.name} className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">{meal.name}</h1>
              <p className="text-sm text-gray-600 mt-1">{meal.category}</p>
              <p className="text-2xl font-bold text-blue-600 mt-4">${meal.price}</p>
              <p className="text-gray-700 mt-4">{meal.description}</p>
              <div className="mt-6 flex justify-between">
                <Button className="bg-blue-500 text-whit  hover:bg-blue-600 focus:outline-none ">Add to Cart
                </Button>
                <Link href="/meals">
                  <p className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                    Back to List
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Meal
