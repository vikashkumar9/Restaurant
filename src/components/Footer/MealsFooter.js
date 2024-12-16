import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const MealsFooter = () => {
  return (
    <>
      <div className="bg-footerBgColor text-black mt-4 md:mt-8 py-12 md:py-20  ">
        <div className="container mx-auto px-8 grid grid-cols-1 gap-8  md:grid-cols-4 md:gap-8">
          {/* About Section */}
          <div>
            <img
              src="https://w7.pngwing.com/pngs/224/1014/png-transparent-my-new-restaurant-logo-bistro-cafe-ermita-conrad-manila-restaurant-restaurant-logo-food-text-logo.png"
              alt="SevenPay Logo"
              className="h-[20%] w-[100%] mb-4"
              style={{
                background: "transparent",
                mixBlendMode: "multiply",
              }}
            />

           <p className="text-sm leading-relaxed">
  At Vk Restaurant, we take pride in offering an exquisite dining experience with a wide variety of delicious meals crafted to perfection. Our mission is to serve quality food in a welcoming ambiance, ensuring every customer enjoys a memorable culinary journey.
</p>

          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl text-textRed font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className=" hover:text-textRed">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-textRed">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bankservices"
                  className=" hover:text-textRed"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-textRed">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold  text-textRed  mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="privatePolicy" className=" hover:text-textRed">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termsConditions" className=" hover:text-textRed">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link href="/refundPolicy" className=" hover:text-textRed">
                  Refund Policy
                </Link>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <p className="flex items-center  hover:text-textRed">
                  <MdOutlineFileDownload className="w-5 h-5 text-textRed" />
                  <span className="ml-2">Download app</span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-textRed  mb-4">Contacts</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="p-3 bg-red-100 rounded-full">
                    <MdOutlineMailOutline className="w-6 h-6 text-textRed" />
                  </div>

                  <div>
                    <span className="block text-gray-700 font-medium">
                      Email
                    </span>
                    <a
                      href="mailto:vikashparjapati59@gmail.com"
                      className="block text-textRed text-l font-bold"
                    >
                      vikashparjapati59@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <FaPhoneAlt className="w-6 h-6 text-red-500" />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="elementor-widget-container">
        <div className="copyright-text text-white text-center bg-blue-900 py-2">
          Copyright© 2024 Vk Restaurent.&nbsp;All Rights Reserved.{" "}
        </div>
      </div>
    </>
  );
};

export default MealsFooter;