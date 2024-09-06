"use client"
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import MealForm from '@/components/mealsform/MealForm'

const AddMeal = () => {
  const [mealName, setMealName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const clearForm = () => {
    setMealName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      mealName,
      category,
      description,
      price,
      selectedFile
    })
    // Clear the form
    clearForm();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a Meal
        </h2>
        <MealForm
          mealName={mealName}
          setMealName={setMealName}
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <Button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
        >
          Add Meal
        </Button>
      </form>
    </div>
  );
};

export default AddMeal;

