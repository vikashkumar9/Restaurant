"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Adjust according to your image component or library
import Link from "next/link";
const UserHeader = () => {
  const [cartdata, setCartData] = useState([]);
  useEffect(() => {
    const storedCartData = localStorage.getItem("cartdata");

    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  return (
    <header className="bg-transparent text-white py-4 px-2 md:p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/bannerimg1.jpg"
          alt="Header Image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="ml-4 font-bold text-yellow-500 md:flex hidden">APP</h1>
      </div>
      <nav className="lg:space-x-4 lg:text-2xl text-yellow-500">
        <Link href="/" className="hover:underline pr-2">
          Home
        </Link>
        <Link href="/login" className="hover:underline pr-2">
          Login
        </Link>
        <Link href="/cart" className="hover:underline pr-2">
          Cart({cartdata.length})
        </Link>
        <Link href="/restaurent/addmeals" className="hover:underline">
          Add Meals
        </Link>
      </nav>
    </header>
  );
};

export default UserHeader;
