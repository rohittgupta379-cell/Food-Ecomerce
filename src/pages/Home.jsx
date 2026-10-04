import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import Banner from "../assets/images/1771424960.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="text-orange-600 font-bold text-lg tracking-wider uppercase">
                Welcome to Crave Kart
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-3 leading-tight">
                Discover Delicious <br />
                <span className="text-orange-500">Food Experience</span>
              </h1>

              <p className="text-gray-600 text-lg mt-5 max-w-xl leading-relaxed">
                Order your favorite meals from the best restaurants and enjoy
                delicious food at your doorstep.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-7">
                <Link
                  to="/cart"
                  className="
              bg-gradient-to-r from-orange-500 to-red-500
              hover:from-orange-600 hover:to-red-600
              text-white font-semibold
              py-3 px-8 rounded-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300
              flex items-center justify-center gap-2
            "
                >
                  <span>Order Now</span>
                  <LuShoppingCart size={20} />
                </Link>

                <Link
                  to="/menu"
                  className="
              border-2 border-orange-500
              text-orange-600
              hover:bg-orange-500 hover:text-white
              font-semibold
              py-3 px-8 rounded-lg
              transition-all duration-300
              flex items-center justify-center
            "
                >
                  View Menu
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <p className="text-3xl font-bold text-orange-600">500+</p>
                  <p className="text-gray-600 text-sm">Delicious Dishes</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-red-500">4.9★</p>
                  <p className="text-gray-600 text-sm">Customer Rating</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-orange-600">24/7</p>
                  <p className="text-gray-600 text-sm">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Glow */}
              <div
                className="
            absolute -inset-3
            bg-gradient-to-r
            from-orange-400 to-red-400
            rounded-3xl
            blur-2xl
            opacity-30
          "
              ></div>

              <img
                src={Banner}
                alt="Delicious Food"
                className="
            relative
            w-full
            h-auto
            max-h-[520px]
            object-cover
            rounded-2xl
            shadow-2xl
          "
              />
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
