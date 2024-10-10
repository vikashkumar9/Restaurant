"use client";
import { useEffect, useState } from "react";
import UserHeader from "@/components/Userheader/UserHeader";
import Restaurent from "@/components/Restaurents/Restaurent";

export default function Home() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [restaurantData, setRestaurentData] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getCities = async () => {
    const result = await fetch("/api/cities");
    const cityData = await result.json();
    setCities(cityData);
  };

  const getRestaurent = async () => {
    let url = "/api/search";
    if (city) {
      url = `/api/search?location=${city}`;
    } else if (searchName) {
      url = `/api/search?restaurant=${searchName}`;
    }

    try {
      const result = await fetch(url);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const restaurent = await result.json();
      setRestaurentData(restaurent);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    getRestaurent();
  }, [city, searchName]);
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
              {Array.isArray(cities) &&
                cities?.map((item, index) => (
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
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>
      <div className="m-4">
        <Restaurent restaurent={restaurantData} />
      </div>
    </main>
  );
}
