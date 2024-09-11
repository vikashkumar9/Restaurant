"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const UpdateData = () => {
  const [productsData, setProductsData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const productData = await fetch("/api/products");
    const results = await productData.json();
    setProductsData(results.result);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData(); // Fetch updated list after deletion
  };

  return (
    <div className="mt-8 p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left shadow-lg rounded-lg">
          <thead className="text-slate-900">
            <tr className="text-slate-900">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {productsData.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="px-4 py-2">
                  <Image
                    src={`/${product.image}`} // Adjust image path if necessary
                    alt={product.name}
                    height={40}
                    width={40}
                    className="rounded-lg"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">
                  <Link href={`/addProducts/${product._id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteHandler(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateData;
