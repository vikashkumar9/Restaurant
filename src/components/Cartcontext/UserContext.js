"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext([]);

export default function UserContext({ children }) {
  const [cartitems, setcartitems] = useState([]); 

  useEffect(() => {
    if (typeof window !== "undefined") {
     
      const storedCart = localStorage.getItem("cartdata");
      setcartitems(storedCart ? JSON.parse(storedCart) : []); 
    }
  }, []); 

  useEffect(() => {
    if (typeof window !== "undefined" && cartitems.length > 0) {
      localStorage.setItem("cartdata", JSON.stringify(cartitems));
    }
  }, [cartitems]);

  return (
    <Context.Provider value={{ cartitems, setcartitems }}>
      {children}
    </Context.Provider>
  );
}
