import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="fixed z-10  w-1/2  p-4 backdrop-blur-sm shadow-lg left-1/2 transform -translate-x-1/2 mt-12 border border-gray-600">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl text-[#EDD6B6]">
            Shariful.
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-10 text-sm text-white font-medium">
            <li>
              <Link
                to="/service"
                className="hover:text-[#EDD6B6] hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="hover:text-[#EDD6B6] hover:underline"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#EDD6B6] hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#EDD6B6] hover:underline"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <Link
            to="/contact"
            className="bg-[#EDD6B6] text-black text-[12px] font-semibold rounded-sm px-4 py-2 hover:bg-[#FBD9B9]"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;