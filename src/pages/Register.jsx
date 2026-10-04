import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Register submitted");
  };

  return (
   
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Register Form */}
          <div className="p-8 sm:p-10 lg:p-14">
            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-bold text-gray-900 inline-block mb-8"
            >
              <span className="text-orange-500">Crave</span> Kart
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2 mb-7">
              Join Crave Kart and enjoy delicious food.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 mt-1 accent-orange-500"
                />

                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-semibold hover:text-orange-600"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-orange-500 to-red-500 text-white items-center justify-center p-12">
            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-7">
                <FaUtensils className="text-3xl" />
              </div>

              <h2 className="text-4xl font-bold mb-4">
                Your Food Journey
                <br />
                Starts Here!
              </h2>

              <p className="text-orange-100 text-lg max-w-sm mx-auto">
                Create your account and discover delicious meals from your
                favorite restaurants.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-3 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Easy & Fast Ordering</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Exclusive Food Deals</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Fast Doorstep Delivery</span>
                </div>
              </div>
            </div>

            {/* Background Shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>

            <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    
  );
};

export default Register;
