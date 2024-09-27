"use client";
import { useEffect, useState } from "react";
import UserHeader from "@/components/Userheader/UserHeader";
export default function Home() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    const result = await fetch("/api/cities");
    const cityData = await result.json();
    setCities(cityData);
  };

  useEffect(() => {
    getCities();
  }, []);

  console.log(city);

  return (
    <main>
      <UserHeader />
      <div className="bg-[url('/loginbg.jpeg')] bg-cover bg-center h-[200px] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-4 text-black">
          <form className="flex items-center border-none rounded-md shadow-md">
            <select
              id="cities"
              name="cities"
              className="bg-white border rounded-l p-2 focus:outline-none w-full"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" disabled>
                Location
              </option>
              {cities &&
                cities.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
          </form>

          <input
            type="text"
            placeholder="Search meal and restaurant"
            className="border rounded-r p-2 bg-white text-black focus:outline-none w-full sm:w-1/2"
          />
        </div>
      </div>
    </main>
  );
}
