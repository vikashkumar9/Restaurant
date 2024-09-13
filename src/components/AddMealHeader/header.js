"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userdata = localStorage.getItem("restaurant_user");
    if (userdata) {
      setUser(JSON.parse(userdata));
      if (pathname === "/restaurent/login" || pathname === "/restaurent/registration") {
        router.push('/');
      }
    } if(!userdata && pathname==="/restaurent/addmeals"){
      router.push('/restaurent/registration');
    }
  }, [pathname, router]);

  const logOut = (e) => {
    e.preventDefault(); 
    localStorage.removeItem("restaurant_user");
    setUser(null); 
    router.push('/'); 
  };

  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/bannerimg1.jpg" alt="Header Image" width={50} height={50} className="rounded-full" />
        <h1 className="ml-4 font-bold text-yellow-500">
          {user ? user.name : "APP"}
        </h1>
      </div>
      <nav className="lg:space-x-4 lg:text-2xl text-yellow-500">
        {!user ? (
          <>
            <Link href="/restaurent/login" className="hover:underline pr-2">Sign In</Link>
            <Link href="/restaurent/registration" className="hover:underline pr-2">Sign Up</Link>
          </>
        ) : (
          <>
            <button 
              onClick={logOut} 
              className="hover:underline pr-2 bg-transparent border-none text-yellow-500 cursor-pointer">
              Log Out
            </button> <Link href="/restaurent/addmeals/editdata" className="pr-2 hover:underline">All Meals</Link>
            <Link href="/restaurent/addmeals" className="hover:underline">Add Meals</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
