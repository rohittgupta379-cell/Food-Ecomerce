import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import Layout from "../layouts/Layout";
import PopularCategories from "../common/PopularCategories";
import Image1 from "../assets/images/1771592080.webp";
import Hero from "../common/Hero";
import { Link } from "react-router-dom";
import Image from "../assets/images/1771592556.jpg";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero />

        {/* categoty */}
        <PopularCategories />

        <div className="max-w-7xl mx-auto px-5   lg:px-8 py-10">
          <h2 className="text-gray-900 text-3xl font-semibold mb-3">
            Popular Dish
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima at
            ipsum quos eligendi beatae expedita qui. Provident natus, quia harum
            placeat obcaecati illum ad suscipit, praesentium doloribus corporis
            aut est.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* cart1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      Pizza
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">Good for taste</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar />
                    <span className="text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-500 font-bold text-xl">₹59</span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Add
                  </button>
                </div>
              </div>
            </div>


              {/* cart2 */}
             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      Pizza
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">Good for taste</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar />
                    <span className="text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-500 font-bold text-xl">₹59</span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Add
                  </button>
                </div>
              </div>
            </div>


              {/* cart3 */}
             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      Pizza
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">Good for taste</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar />
                    <span className="text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-500 font-bold text-xl">₹59</span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Add
                  </button>
                </div>
              </div>
            </div>


              {/* cart4 */}
             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      Pizza
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">Good for taste</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar />
                    <span className="text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-500 font-bold text-xl">₹59</span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Add
                  </button>
                </div>
              </div>
            </div>

          </div>

          


        </div>
      </Layout>
    </>
  );
};

export default Home;
