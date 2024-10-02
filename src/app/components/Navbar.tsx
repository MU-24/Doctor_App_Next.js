"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-black py-2.5 text-white">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Doctors Appointment
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <a
              href="/Signup"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              SignUp
            </a>
            <button
              onClick={toggleMenu} // Call toggleMenu function on button click
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Toggle icon */}
              {isOpen ? (
                <svg
                  className="hidden w-6 h-6 lg:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 lg:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent hover:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/About"
                  className="block py-2 pl-3 pr-4  lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/BookAppointment.tsx"
                  className="block py-2 pl-3 pr-4    lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/Teams"
                  className="block py-2 pl-3 pr-4 mb-6 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0   lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
