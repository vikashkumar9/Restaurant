"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MealForm from "@/components/mealsform/MealForm";
import Button from "@/components/ui/Button";
import MealsFooter from "@/components/Footer/MealsFooter";
import { MdSave, MdCancel, MdEdit, MdDelete } from "react-icons/md";

const UpdateData = () => {
  const [productsData, setProductsData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const router = useRouter();

  const [restoUserId, setRestoUserId] = useState(null);

  const getData = useCallback(async () => {
    try {
      if (restoUserId) {
        const productData = await fetch(`/api/products/${restoUserId}`);
        const results = await productData.json();
        setProductsData(results.result);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, [restoUserId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userdata = JSON.parse(localStorage.getItem("restaurant_user"));
      if (userdata && userdata._id) {
        setRestoUserId(userdata._id);
      }
    }
  }, []);

  useEffect(() => {
    if (restoUserId) {
      getData();
    }
  }, [restoUserId, getData]);

  const uniqueMeal = async (id) => {
    const response = await fetch(`/api/meals/${id}`);
    const data = await response.json();
    if (response.ok) {
      setName(data.result.name);
      setCategory(data.result.category);
      setDescription(data.result.description);
      setPrice(data.result.price);
      setSelectedProduct(id);
      openModal();
    }
  };

  const deleteHandler = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setCategory("");
    setDescription("");
    setPrice("");

    setSelectedProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/products/${selectedProduct}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, category, description, price }),
    });

    if (response.ok) {
      closeModal();
      getData();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed py-4 inset-0 z-50 flex  items-center justify-center bg-white bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 space-y-4"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Edit Meal
            </h2>
            <MealForm
              mealName={name}
              setMealName={setName}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
              price={price}
              setPrice={setPrice}
            />
            <Button
              type="submit"
              className="w-full"
              leadingIcon={MdSave}
            >
              Update
            </Button>
            <Button
              onClick={closeModal}
              className="w-full mt-4"
              variant="danger"
              leadingIcon={MdCancel}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}

      <div className="mt-8 p-4 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left shadow-lg rounded-lg">
            <thead className="text-black">
              <tr>
                <th className="px-4 py-2 text-black">Image</th>
                <th className="px-4 py-2 text-black">Name</th>
                <th className="px-4 py-2 text-black">Description</th>
                <th className="px-4 py-2 text-black">Price</th>
                <th className="px-4 py-2 text-black">Category</th>
                <th className="px-4 py-2">Edit</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {productsData && productsData.length > 0 ? (
                productsData.map((product) => (
                  <tr key={product._id} className="border-t">
                    <td className="px-4 py-2">
                      <Image
                        src={`/${product.image}`}
                        alt={product.name}
                        height={40}
                        width={40}
                        className="rounded-lg"
                      />
                    </td>
                    <td className="px-4 py-2 text-black ">{product.name}</td>
                    <td className="px-4 py-2 text-black">
                      {product.description}
                    </td>
                    <td className="px-4 py-2 text-black">{product.price}</td>
                    <td className="px-4 py-2 text-black">{product.category}</td>
                    <td className="px-4 py-2">
                      <Button
                        onClick={() => uniqueMeal(product._id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg"
                        leadingIcon={MdEdit}
                      >
                        Edit
                      </Button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => deleteHandler(product._id)}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                      >
                        <MdDelete className="h-4 w-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <MealsFooter />
    </>
  );
};

export default UpdateData;
