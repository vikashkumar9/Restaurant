"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const UserHeader = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userdata = localStorage.getItem("user");
    if (userdata) {
      const parsedUser = JSON.parse(userdata);
      setUser(parsedUser);


      if (pathname === "/login" || pathname === "/registration") {
        router.push("/");
      }
    } 
    else {
     
      if (pathname === "/payment") {
        router.push("/login");
      }
    }
  }, [pathname, router]);
console.log(pathname)
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <header className="bg-white text-white py-4 px-2 md:p-4 flex items-center justify-between shadow-2xl ">
      <div className="flex items-center">
        <Image
          src="/bannerimg1.jpg"
          alt="Header Image"
          width={50}
          height={50}
          className="rounded-full"
        />
        {user ? (
          <h1 className="ml-4 font-bold text-yellow-500 md:flex hidden">
            {user.name}
          </h1>
        ) : (
          <h1 className="ml-4 font-bold text-yellow-500 md:flex hidden">APP</h1>
        )}
      </div>
      <nav className="lg:space-x-4 lg:text-2xl text-yellow-500">
        <Link href="/" className="hover:underline pr-2">
          Home
        </Link>
        {!user ? (
          <Link href="/login" className="hover:underline pr-2">
            Login
          </Link>
        ) : (
          <a href="#" onClick={logOut} className="hover:underline pr-2">
            Logout
          </a>
        )}
        <Link href="/cart" className="hover:underline pr-2">
          Cart
        </Link>
       
        <Link href="/restaurent/addmeals" className="hover:underline">
          Add Meals
        </Link>
      </nav>
    </header>
  );
};

export default UserHeader;
