"use client";
import React, { useState } from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import FileInput from "../ui/FileInput";
import Button from "../ui/Button";
const MealForm = () => {
  const [mealName, setMealName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
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
    });
    // Clear the form
    setMealName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setSelectedFile(null);
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
          <Input
            type="text"
            label="Meal Name"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            required
          />
          <Input
            type="text"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            required
          />
          <Input
            type="number"
            label="Price ($)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            required
          />
          <Textarea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        required
       
      />
          <FileInput
        label="Add File"
        onChange={handleFileChange}
        required
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

export default MealForm;
