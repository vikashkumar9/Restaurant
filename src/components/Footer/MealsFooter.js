import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const MealsFooter = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
         
          <div className="flex-1">
            <ul className="space-y-3">
              <li>
                <Link href="/restaurent/addmeals" className="hover:text-cyan-400 transition-colors duration-300">
                  Add Your Own Restaurant
                </Link>
              </li>
              <li>
                <Link href="/meals" className="hover:text-cyan-400 transition-colors duration-300">
                  Meals
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-cyan-400 transition-colors duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        
          <div className="flex-1">
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors duration-300">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
     
          <div className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="text-xl mr-2" />
                <Link href="tel:9306075344" className="hover:text-cyan-400 transition-colors duration-300">
                  +91 93060 75344
                </Link>
              </li>
              <li className="flex items-center">
                <MdOutlineEmail className="text-xl mr-2" />
                <Link href="mailto:vikashparjapati59@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
                  vikashparjapati59@gmail.com
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-4 mt-4">
              <li>
                <Link href="https://www.instagram.com/parjapati2924/" className="hover:text-cyan-400 transition-colors duration-300">
                  <FaInstagram className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/vikash-parjapati-a670371b2/" className="hover:text-cyan-400 transition-colors duration-300">
                  <FaLinkedin className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/vikash.parjapati.58555941" className="hover:text-cyan-400 transition-colors duration-300">
                  <FaFacebook className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/vikashkumar9" className="hover:text-cyan-400 transition-colors duration-300">
                  <FaGithub className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-2 text-center">
        © 2024
      </div>
    </div>
  );
};

export default MealsFooter;
