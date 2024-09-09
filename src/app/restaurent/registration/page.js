"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from 'next/link'
import { useRouter } from 'next/router'
const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
  let response=  await fetch("/api/login", {
      method: "POST",
      headers: {  
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email:email, 
        password:password ,
        location:location,
        city:city,
        contact:contact
      }),
    });
  response = await response.json()
  if(response.success){
    console.log("response",response)
    const {result} =response;
    delete result.password;
    localStorage.setItem("restaurant_user", JSON.stringify(response.result));
   
  }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-black">
          Registration
        </h2>
        <Input
          label="Enter Restaurent name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
           <Input
          label="Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
           <Input
          label="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
           <Input
          label="Contact no"
          type="number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="w-full px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
        >
          Register
        </Button>
        <div className="flex justify-between mt-4">
          <p className="text-black">
            Do you have an account?{" "}
            <Link href="/login">
            <span className="text-yellow-500 cursor-pointer">
              Login
            </span></Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
