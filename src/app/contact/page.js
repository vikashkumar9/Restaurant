"use client";
import React, { useState } from "react";
import { MdOutlineMailOutline, MdDescription, MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import UserHeader from "@/components/Userheader/UserHeader";
import MealsFooter from "@/components/Footer/MealsFooter";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const ContactSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setResult("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", "0b7be0e4-65fc-4f7f-835a-025f81a7993a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSubmitting(false);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <> <UserHeader/>
      <div className="px-4 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="my-4 text-5xl text-black font-bold">Contact Us</h2>
         
        </div>
      </div>
      <div className="px-6 py-10 bg-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              We are here to help you
            </h3>
            {isSubmitting && (
              <div className="text-center text-blue-500">Submitting...</div>
            )}
            <form onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                leftIcon={MdPerson}
                helperText=""
              />
              <Input
                type="text"
                name="mobile_number"
                placeholder="Mobile Number"
                leftIcon={FaPhoneAlt}
                helperText=""
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                leftIcon={MdOutlineMailOutline}
                helperText=""
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={6}
                leftIcon={MdDescription}
              />
              <div>
                <button
                  type="submit"
                  className="bg-textRed text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send
                </button>
              </div>
            </form>
            {result && (
              <div className="my-4 text-lg text-gray-700">{result}</div>
            )}
          </div>
          <div className="md:col-span-7 bg-blue-100 shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <MdOutlineMailOutline className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-gray-700 font-medium">Email</span>
                  <a
                    href="mailto:vikashparjapati59@gmail.com"
                    className="block text-textRed text-lg font-bold"
                  >
                   vikashparjapati59@gmail
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <FaPhoneAlt className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-gray-700 font-medium">
                    Customer Support
                  </span>
                  <a
                    href="tel:+919306075344"
                    className="text-textRed text-lg font-bold"
                  >
                    9306075344
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <FaLocationDot className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-gray-700 font-medium">
                    Address
                  </span>
                  <p className="text-gray-900 text-base">
                    7X Fintech Pvt Limited, DCB 620, DLF CYBERCITY, Infocity,
                    jhajjar - 751024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MealsFooter />
    </>
  );
};

export default ContactSection;