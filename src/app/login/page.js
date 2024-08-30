"use client";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
const Login = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btntype, setBtntype] = useState("Register");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", username, email, password);
    setusername("");
    setEmail("");
    setPassword("");
  };
  const login = () => {
    setBtntype("Login");
  };

  const register = () => {
    setBtntype("Register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md  min-w-[300px] p-6"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-black">
          {btntype === "Register" ? "Registration" : "Login"}
        </h2>
        {btntype === "Register" && (
            <Input
            label="  Enter username"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              />
        )}
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
          {btntype}
        </Button>
        <div className="flex justify-between mt-4">
          {btntype === "Register" ? (
            <p className="text-black">
              Do you have an account?{" "}
              <span onClick={login} className="text-yellow-500 cursor-pointer">
                Login
              </span>
            </p>
          ) : (
            <p className="text-black">
              Don't have an account?{" "}
              <span
                onClick={register}
                className="text-yellow-500 cursor-pointer"
              >
                Create a new account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
