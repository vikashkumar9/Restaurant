"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Adjust according to your image component or library
import Link from 'next/link';
const UserHeader = () => {

  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/bannerimg1.jpg" alt="Header Image" width={50} height={50} className="rounded-full" />
        <h1 className="ml-4 font-bold text-yellow-500">
          APP
        </h1>
      </div>
      <nav className="lg:space-x-4 lg:text-2xl text-yellow-500">
      <Link href="/meals" className="hover:underline pr-2">Meals</Link>
            <Link href="/restaurent/addmeals" className="hover:underline">Add Meals</Link>
       
      </nav>
    </header>
  );
};

export default UserHeader;
