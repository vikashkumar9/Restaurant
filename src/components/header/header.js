// components/Header.tsx
import React from 'react';
import Image from 'next/image'; // Adjust according to your image component or library
import Link from 'next/link';

const Header= () => {
  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/bannerimg1.jpg" alt="Header Image" width={50} height={50} className="rounded-full" />
        <h1 className="ml-4 text-2xl font-bold text-yellow-500">MyApp</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/login" className="text-yellow-500 hover:underline">Sign In</Link>
        <Link href="/registration" className="text-yellow-500 hover:underline">Sign Up</Link>
        <Link href="/meals" className="text-yellow-500 hover:underline">Meals</Link>
        <Link href="/addmeals" className="text-yellow-500 hover:underline">Add Meals</Link>
      </nav>
    </header>
  );
};

export default Header;
