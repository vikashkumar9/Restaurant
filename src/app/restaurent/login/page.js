"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MealsFooter from "@/components/Footer/MealsFooter";
import { MdEmail, MdLock, MdLogin } from "react-icons/md";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
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
        toast.success("Logged in successfully");
        router.push("/");
      } else {
        setError(response.message || "Login failed");
        toast.error(response.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred");
      console.error(err);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-md rounded-lg"
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
            loading={loading}
            disabled={loading}
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
      <MealsFooter />
    </div>
  );
};

export default Login;
