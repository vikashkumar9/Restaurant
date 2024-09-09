"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-black">
          Login
        </h2>
        
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
        <Button
          type="submit"
          className="w-full px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
        >
          Login
        </Button>
        <div className="flex justify-between mt-4">
          <p className="text-black">
            Don't have an account?{" "}
            <Link href="/registration">
            <span className="text-yellow-500 cursor-pointer">
              Create a new account
            </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
