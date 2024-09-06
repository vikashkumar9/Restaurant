// components/Sidebar.tsx
import React from 'react';
import Image from 'next/image'; // Adjust according to your image component or library
import Link from 'next/link'

const Sidebar= () => {
  return (
    <aside className="bg-gray-200 p-4 w-64 flex flex-col items-center">
      <div className="mb-4">
        <Image src="/bannerimg1.jpg" alt="Sidebar Image" width={100} height={100} className="rounded-full" />
      </div>
      <nav className="space-y-2">
        <Link href="/addmeals" className="block text-center p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Add Meals</Link>
        <Link href="/meals" className="block text-center p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Meals</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
