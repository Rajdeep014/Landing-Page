import React, { useState } from "react";
import logo from "../assets/Logo-GoSmartHR-light.png"; // Ensure this path is correct

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#012739] p-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-5 text-white">
            <img
              src={logo}
              alt="Go Smart HR"
              className="h-16"
            />
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Navigation Links (Visible on larger screens) */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white text-lg font-semibold">
              Home
            </a>
            <a href="/about" className="text-white text-lg">
              About Us
            </a>

            {/* Dropdown Trigger */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="text-white text-lg font-semibold"
              >
                The GoSmartHR Software ▼
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100">Item 1</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Item 2</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Item 3</li>
                  </ul>
                </div>
              )}
            </div>

            <a href="/pricing" className="text-white text-lg">
              Pricing
            </a>
            <a href="/blog" className="text-white text-lg">
              Blog
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block ml-6">
            <a
              href="/contact"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Full-width Mobile Menu Below the Navbar */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white p-6 text-black"> {/* Changed bg-white and text-black */}
          <div className="space-y-6">
            <a href="/" className="block text-lg">Home</a>
            <a href="/about" className="block text-lg">About Us</a>
            <a href="/software" className="block text-lg">The GoSmartHR Software</a>
            <a href="/pricing" className="block text-lg">Pricing</a>
            <a href="/blog" className="block text-lg">Blog</a>
            <a
              href="/contact"
              className="block text-lg bg-blue-500 py-2 px-6 rounded-full text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
