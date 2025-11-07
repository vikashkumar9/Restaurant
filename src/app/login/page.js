"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
import { MdEmail, MdLock, MdLogin } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("/api/userLogin", {
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
        localStorage.setItem("user", JSON.stringify(result));
        router.push("/");
      } else {
        setError(response.message || "Login failed");
        alert("fail");
      }
    } catch (err) {
      setError("An error occurred");
      console.error(err);
    }
  };

  return (
    <div>
       <UserHeader/>
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="mb-4 text-2xl font-bold text-center text-black">
            Login
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={MdEmail}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leftIcon={MdLock}
          />
          <Button
            type="submit"
            leadingIcon={MdLogin}
          >
            Login
          </Button>
          <div className="flex justify-between mt-4">
            <p className="text-black">
              Don&apos;t have an account?
              <Link href="/registration">
                <span className="text-yellow-500 cursor-pointer">
                  Create a account
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <MealsFooter />
    </div>
  );
};

export default Login;
