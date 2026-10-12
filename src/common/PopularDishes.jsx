import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Image from "../assets/images/1771592556.jpg";

const PopularDishes = ({title = "Dishes"}) => {
  return (
    <>

    <div className="max-w-7xl mx-auto px-5   lg:px-8 py-10">
          <h2 className="text-gray-900 text-3xl font-semibold mb-3">
            {title}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima at
            ipsum quos eligendi beatae expedita qui. Provident natus, quia harum
            placeat obcaecati illum ad suscipit, praesentium doloribus corporis
            aut est.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* cart1 */}

            {/* Cart 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h2 className="font-bold text-lg text-gray-800">Pizza</h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Delicious cheesy pizza
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg text-yellow-500 text-sm">
                    <FaStar />
                    <span className="text-gray-700 font-medium">4.5</span>
                  </div>
                </div>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-orange-500 font-bold text-xl">
                      ₹59
                    </span>
                    <p className="text-xs text-gray-400">Starting price</p>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaCartPlus className="text-base" />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* cart2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h2 className="font-bold text-lg text-gray-800">Pizza</h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Delicious cheesy pizza
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg text-yellow-500 text-sm">
                    <FaStar />
                    <span className="text-gray-700 font-medium">4.5</span>
                  </div>
                </div>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-orange-500 font-bold text-xl">
                      ₹59
                    </span>
                    <p className="text-xs text-gray-400">Starting price</p>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaCartPlus className="text-base" />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* cart3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h2 className="font-bold text-lg text-gray-800">Pizza</h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Delicious cheesy pizza
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg text-yellow-500 text-sm">
                    <FaStar />
                    <span className="text-gray-700 font-medium">4.5</span>
                  </div>
                </div>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-orange-500 font-bold text-xl">
                      ₹59
                    </span>
                    <p className="text-xs text-gray-400">Starting price</p>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaCartPlus className="text-base" />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* cart4 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={Image}
                  alt="Pizza"
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h2 className="font-bold text-lg text-gray-800">Pizza</h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Delicious cheesy pizza
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg text-yellow-500 text-sm">
                    <FaStar />
                    <span className="text-gray-700 font-medium">4.5</span>
                  </div>
                </div>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-orange-500 font-bold text-xl">
                      ₹59
                    </span>
                    <p className="text-xs text-gray-400">Starting price</p>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaCartPlus className="text-base" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PopularDishes