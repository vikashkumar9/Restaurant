"use client";
import React from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import FileInput from "../ui/FileInput";
import { FaUtensils, FaRupeeSign } from "react-icons/fa";
import { MdCategory, MdDescription } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

const MealForm = ({
  mealName,
  setMealName,
  category,
  setCategory,
  description,
  setDescription,
  price,
  setPrice,
  setSelectedFile,
}) => {
  return (
    <div>
      <Input
        type="text"
        label="Meal Name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        required
        leftIcon={FaUtensils}
      />
      <Input
        type="text"
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        leftIcon={MdCategory}
      />
      <Input
        type="number"
        label="Price (₹)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        leftIcon={FaRupeeSign}
      />
      <Textarea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        required
        leftIcon={MdDescription}
      />
      {setSelectedFile ? (
        <FileInput
          label="Add File"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          required
          leftIcon={FiUpload}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MealForm;
