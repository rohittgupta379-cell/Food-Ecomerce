import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "../../common/AdminAxios";
import { toast } from "react-hot-toast";
import { useAdminAuth } from "../../context/AdminAuth";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAdminAuth();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/admin/login", data);

      if (response.data.status) {
        const adminData = response.data.data;
        const admin = {
          token: adminData.token,
          name: adminData.name,
          email: adminData.email,
        };

        login(admin);
        toast.success(response.data.message || "Login successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      if (
        error.response?.status === 400 ||
        error.response?.status === 401 ||
        error.response?.status === 422
      ) {
        toast.error(
          error.response?.data?.message || "Invalid login credentials"
        );
      } else {
        toast.error(error.message || "Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-14">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-900 inline-block mb-10"
            >
              <span className="text-orange-500">Crave</span> Kart
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Welcome Back!
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
              Login to continue ordering your favorite food.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "The Email field is required.",
                  })}
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
                {errors.email && (
                  <p className="text-red-500 mt-2">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-orange-500 hover:text-orange-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "The Password field is required.",
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-2">
                      {errors.password.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-orange-500"
                />

                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex relative bg-gradient-to-br from-orange-500 to-red-500 text-white items-center justify-center p-12">
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-7">
                <FaUtensils className="text-3xl" />
              </div>

              <h2 className="text-4xl font-bold mb-4">
                Delicious Food,
                <br />
                Delivered Fast!
              </h2>

              <p className="text-orange-100 text-lg max-w-sm mx-auto">
                Discover amazing meals from the best restaurants and get them
                delivered straight to your doorstep.
              </p>

              <div className="mt-8 space-y-3 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>500+ Delicious Dishes</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Fast & Reliable Delivery</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Best Restaurants</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};



export default AdminLogin;
