"use client"
import React from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import FileInput from "../ui/FileInput";

const MealForm = ({ mealName, setMealName, category, setCategory, description, setDescription, price, setPrice, setSelectedFile }) => {
  return (
    
    <div > 
      <Input
        type="text"
        label="Meal Name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        required
      />
      <Input
        type="text"
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <Input
        type="number"
        label="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        
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
        
        onChange={(e)=>setSelectedFile(e.target.files[0])}
        required
      />
  
    </div>
  );
};

export default MealForm;
