"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '@/components/ui/Button';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export async function getmeals(id) {
  const response = await fetch(`/api/meals/${id}`);
  const data = await response.json();
  return data;
}
const Meal = ({ params }) => {
  // const router = useRouter();
console.log("id",params.slug)
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        const data = await getmeals(params.slug);
        setProduct(data.result);
        console.log(data.result)
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <div>
        <Head>
          <title>{product.name}</title>
          <meta name="description" content={`Details about ${product.name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="p-8  min-h-screen">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image src={"/"+product.image} alt={product.name} height={400} width={400} 
              className=" object-cover" 
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>
              <p className="text-gray-700 mt-4">{product.description}</p>
              <div className="mt-6 flex justify-between">
                <Link href="/cart" >               
                <Button  className="bg-blue-500 text-whit  hover:bg-blue-600 focus:outline-none ">Add to Cart
                </Button></Link>
 
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
