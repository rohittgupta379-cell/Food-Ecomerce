import React from 'react'
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <header className="shadow-md px-5 lg:px-8  ">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">

          {/* Logo */}
          <Link
            className="text-3xl font-bold text-gray-900"
            to="/"
          >
            <span className="text-orange-500">Crave</span> Kart
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            <Link
              className="text-gray-800 hover:text-orange-500"
              to="/"
            >
              Home
            </Link>

            <Link
              className="text-gray-800 hover:text-orange-500"
              to="/menu"
            >
              Menu
            </Link>

            <Link
              className="text-gray-800 hover:text-orange-500"
              to="/aboutus"
            >
              About Us
            </Link>

            <Link
              className="text-gray-800 hover:text-orange-500"
              to="/contactus"
            >
              Contact Us
            </Link>
          </nav>

          {/* Cart + Login */}
          <div className="flex items-center space-x-5">

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-2xl text-gray-700 hover:text-red-500"
            >
              <span className="absolute -top-3 -right-3 w-5 h-5 rounded-full text-xs flex justify-center items-center text-white bg-red-500">
                0
              </span>

              <FaCartShopping />
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="bg-orange-500 text-white px-5 py-2 rounded text-sm transition-all duration-200 hover:bg-slate-600"
            >
              Login
            </Link>

          </div>
        </div>
      </header>
    
    </>
  )
}

export default Header