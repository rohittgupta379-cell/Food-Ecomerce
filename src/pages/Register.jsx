
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaUtensils,
  FaCheckCircle,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register submitted");
  };

  const inputClass =
    "w-full px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-300 text-base bg-gray-50 focus:bg-white";

  const features = [
    "Easy & Fast Ordering",
    "Exclusive Food Deals",
    "Fast Doorstep Delivery",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">

      {/* Main Card */}
      <div className="w-full max-w-7xl min-h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side - Register Form */}
        <div className="p-6 sm:p-9 lg:p-12 xl:p-14 flex flex-col justify-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block w-fit"
          >
            <span className="text-orange-500">Crave</span> Kart
          </Link>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5">
            Create Account
          </h1>

          <p className="text-gray-500 text-base mt-2 mb-7">
            Join Crave Kart and enjoy delicious food.
          </p>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-semibold text-gray-700 mb-2"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="w-5 h-5 mt-0.5 accent-orange-500 shrink-0 cursor-pointer"
              />

              <label
                htmlFor="terms"
                className="text-sm sm:text-base text-gray-600"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 active:scale-[0.99] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-base text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors"
            >
              Login
            </Link>
          </p>

        </div>

        {/* Right Side - Branding */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-red-500 text-white items-center justify-center p-10 xl:p-14">

          {/* Background Shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full" />

          <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-white/10 rounded-full" />

          <div className="absolute top-1/2 -right-16 w-40 h-40 bg-red-400/20 rounded-full" />

          {/* Branding Content */}
          <div className="relative z-10 text-center max-w-lg">

            {/* Icon */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-7 shadow-lg">
              <FaUtensils className="text-4xl" />
            </div>

            {/* Title */}
            <h2 className="text-4xl xl:text-5xl font-extrabold mb-5 leading-tight">
              Your Food Journey
              <br />
              Starts Here!
            </h2>

            {/* Description */}
            <p className="text-orange-50 text-lg xl:text-xl max-w-md mx-auto leading-8">
              Create your account and discover delicious meals from your
              favorite restaurants.
            </p>

            {/* Features */}
            <div className="mt-9 space-y-5 text-left inline-block">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-white text-xl shrink-0" />

                  <span className="text-base xl:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            {/* Bottom Text */}
            <p className="mt-10 text-orange-100 text-sm">
              Delicious food, delivered to your doorstep.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
