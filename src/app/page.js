"use client";
import { useEffect, useState, useContext } from "react";
import UserHeader from "@/components/Userheader/UserHeader";
import Restaurent from "@/components/Restaurents/Restaurent";
import MealsFooter from "@/components/Footer/MealsFooter";
import RestaurantTrust from "@/components/Restaurents/RestaurentTrust";
import Menu from "@/components/Menu";
import { FaStar, FaFire, FaLeaf } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { GiChickenOven, GiFullPizza, GiNoodles } from "react-icons/gi";
import { Context } from "@/components/Cartcontext/UserContext";

export default function Home() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [restaurantData, setRestaurentData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState("");
  const { setcartitems } = useContext(Context);

  const getCities = async () => {
    const result = await fetch("/api/cities");
    const cityData = await result.json();
    setCities(cityData);
  };

  useEffect(() => {
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

    getRestaurent();
  }, [city, searchName]);

  useEffect(() => {
    getCities();
  }, []);
  return (
    <main className="bg-white">
      <UserHeader />
      <div className="bg-[url('/loginbg.jpeg')] border rounded-l bg-cover  bg-center h-[200px] md:h-[400px] w-full flex items-center justify-center">
        <div className="flex   md:flex-row items-center w-full max-w-4xl p-4 justify-center text-black">
          <form className="flex   border-none rounded-md shadow-md">
            <select
              id="cities"
              name="cities"
              className="bg-white border rounded-l py-2.5 focus:outline-none w-full"
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
            placeholder="Search restaurant"
            className="border rounded-r p-2 bg-white text-black focus:outline-none  sm:w-1/2"
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-900 my-6">Restaurants</h1>

      <div className="m-4">
        <Restaurent restaurent={restaurantData} />
      </div>
      {/* Structured Data Sections */}
      <HomeStructuredSections
        featuredFilter={featuredFilter}
        setFeaturedFilter={setFeaturedFilter}
        onAddToCart={(item) => {
          // item: { id, name, price }
          const payload = {
            _id: item.id,
            name: item.name,
            price: item.price,
            image: item.image || "",
            quantity: 1,
          };
          let current = [];
          if (typeof window !== "undefined") {
            const raw = localStorage.getItem("cartdata");
            current = raw ? JSON.parse(raw) : [];
          }
          const idx = current.findIndex((i) => i._id === payload._id);
          if (idx >= 0) {
            current[idx].quantity += 1;
          } else {
            current.push(payload);
          }
          if (typeof window !== "undefined") {
            localStorage.setItem("cartdata", JSON.stringify(current));
          }
          setcartitems(current);
        }}
      />
      <Menu/>
      <RestaurantTrust />
      <MealsFooter />
    </main>
  );
}

// Structured data + sections (kept local for maintainability without extra files)
const featuredMeals = [
  { id: 1, name: "Spicy Chicken", price: 249, tag: "Popular", icon: GiChickenOven, badge: FaFire, rating: 4.6, category: "chicken" },
  { id: 2, name: "Veggie Delight", price: 199, tag: "Healthy", icon: FaLeaf, badge: FaStar, rating: 4.8, category: "veg" },
  { id: 3, name: "Cheese Pizza", price: 299, tag: "Chef's Pick", icon: GiFullPizza, badge: FaStar, rating: 4.7, category: "pizza" },
  { id: 4, name: "Hakka Noodles", price: 179, tag: "Trending", icon: GiNoodles, badge: FaFire, rating: 4.5, category: "noodles" },
];

const categories = [
  { id: "pizza", label: "Pizza", icon: GiFullPizza },
  { id: "chicken", label: "Chicken", icon: GiChickenOven },
  { id: "noodles", label: "Noodles", icon: GiNoodles },
  { id: "veg", label: "Vegetarian", icon: FaLeaf },
];

const offers = [
  { id: "off1", title: "Flat 30% OFF", desc: "On orders above ₹499", code: "EAT30" },
  { id: "off2", title: "Buy 1 Get 1", desc: "On selected pizzas", code: "BOGO" },
  { id: "off3", title: "Free Delivery", desc: "For first-time users", code: "WELCOME" },
];

const HomeStructuredSections = ({ featuredFilter, setFeaturedFilter, onAddToCart }) => {
  const visibleMeals = featuredFilter
    ? featuredMeals.filter((m) => m.category === featuredFilter)
    : featuredMeals;
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 space-y-10">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFeaturedFilter(id)}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition flex items-center gap-3 text-left"
            >
              <div className="p-3 rounded-full bg-gray-100 text-gray-700">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-gray-900 font-semibold">{label}</div>
            </button>
          ))}
        </div>
      </div>
      {/* Featured Meals */}
      <div className="space-y-4">
<div className="flex flex-col sm:flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Meals</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFeaturedFilter("")}
              className={`text-sm px-3 py-1.5 rounded border ${!featuredFilter ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFeaturedFilter(c.id)}
                className={`text-sm px-3 py-1.5 rounded border ${featuredFilter === c.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleMeals.map(({ id, name, price, tag, icon: Icon, badge: Badge, rating }) => (
            <div key={id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
                  <Badge className="h-4 w-4" /> {tag}
                </span>
                <span className="text-sm font-semibold text-gray-700">⭐ {rating}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gray-100 text-gray-700">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold">{name}</p>
                  <p className="text-gray-600 text-sm">₹{price}</p>
                </div>
              </div>
              <button
                onClick={() => onAddToCart({ id, name, price })}
                className="mt-2 inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium px-3 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map(({ id, title, desc, code }) => (
            <div key={id} className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-5 shadow hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-yellow-500 text-white">
                  <MdLocalOffer className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-bold">{title}</p>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-yellow-800 bg-yellow-300 px-2 py-1 rounded">Code: {code}</span>
                <button className="text-sm font-semibold text-yellow-700 hover:text-yellow-800">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
