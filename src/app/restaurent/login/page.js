"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added for error handling
  const router = useRouter(); // Use the useRouter hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          login: true,
        }),
      });

      response = await response.json();

      if (response.success) {
        const { result } = response;
        delete result.password;
        localStorage.setItem("restaurant_user", JSON.stringify(result));
        router.push("/");
      } else {
        setError(response.message || "Login failed");
        alert("fail");
      }
    } catch (err) {
      setError("An error occurred"); // Display error message
      console.error(err);
    }
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
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}{" "}
        {/* Display error message */}
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
            Don&apos;t have an restaurent?
            <Link href="/restaurent/registration">
              <span className="text-yellow-500 cursor-pointer">
                Create a new restaurent
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
