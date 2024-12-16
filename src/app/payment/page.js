"use client";

import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
import React, { useEffect, useState } from "react";

const RazorpayPayment = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    loadRazorpayScript();
  };

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
      const options = {
        key: "rzp_test_cKs8wdiKqj6JLu",
        amount: totalcost * 100,
        currency: "INR",
        name: "Restaurant",
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
      <div className="container mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Payment Details
        </h2>
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-6 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
              className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-textRed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-textRed text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Pay 
          </button>
        </form>
      </div>
      <MealsFooter />
    </div>
  );
};

export default RazorpayPayment;
