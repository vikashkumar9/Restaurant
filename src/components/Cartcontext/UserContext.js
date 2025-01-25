"use client";

import { createContext, useEffect, useState } from "react";

export const Context = createContext([]);

export default function UserContext({ children }) {
  const [cartitems, setcartitems] = useState(() => {
    const storedCart = localStorage.getItem("cartdata");
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("cartdata", JSON.stringify(cartitems));
  }, [cartitems]);

  return (
    <Context.Provider value={{ cartitems, setcartitems }}>
      {children}
    </Context.Provider>
  );
}
