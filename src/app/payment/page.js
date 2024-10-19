"use client";

import UserHeader from "@/components/Userheader/UserHeader";
import React, { useEffect, useState } from "react";

const RazorpayPayment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartdata");
    if (storedCartData) {
      setData(JSON.parse(storedCartData));
    }
  }, []);

  const totalcost = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const loadRazorpayScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      // Set up payment here
      const options = {
        key: "rzp_test_cKs8wdiKqj6JLu",
        amount: { totalcost },
        currency: "INR",
        name: "Restaurent",
        description: "Test Transaction",
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    document.body.appendChild(script);
  };

  return (
    <div>
      <UserHeader />
      <button onClick={loadRazorpayScript}>Pay for meals</button>
    </div>
  );
};

export default RazorpayPayment;
