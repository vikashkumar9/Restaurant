"use client";
import UserHeader from "@/components/Userheader/UserHeader";
import React, { useEffect, useState, useContext } from "react";
import MealsFooter from "@/components/Footer/MealsFooter";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Context } from "@/components/Cartcontext/UserContext";

const Cart = () => {
  const [cartdata, setCartData] = useState([]);
  const { setcartitems } = useContext(Context);

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartdata");
    if (storedCartData) {
      const parsedCartData = JSON.parse(storedCartData);
      setCartData(parsedCartData);
      setcartitems(parsedCartData); 
    }
  }, []);

  const deleteItem = (itemId) => {
    const updatedCart = cartdata.filter((item) => item._id !== itemId);
    setCartData(updatedCart);
    setcartitems(updatedCart); // Update context value.
    localStorage.setItem("cartdata", JSON.stringify(updatedCart));
  };

  const totalcost = cartdata.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <UserHeader />
      <div className="container mx-auto px-4 py-4 mb-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>
        {cartdata.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-black">Image</th>
                    <th className="px-4 py-2 text-black">Name</th>
                    <th className="px-4 py-2 text-black">Price</th>
                    <th className="px-4 py-2 text-black">Quantity</th>
                    <th className="px-4 py-2 text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartdata.map((item) => (
                    <tr key={item._id} className="border-t">
                      <td className="px-4 py-2">
                        <Image
                          src={`/${item.image}`}
                          alt={item.name}
                          height={64}
                          width={64}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2 text-black">{item.name}</td>
                      <td className="px-4 py-2 text-black">₹{item.price}</td>
                      <td className="px-4 py-2 text-black">{item.quantity}</td>
                      <td className="px-4 py-2 text-black">
                        <Button
                          onClick={() => deleteItem(item._id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-black">
                Total Price: ₹{totalcost.toFixed(2)}
              </h3>
              <Link href="/payment">
                <Button className="w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 mt-4">
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-black">Your cart is empty.</p>
        )}
      </div>
      <MealsFooter />
    </>
  );
};

export default Cart;
