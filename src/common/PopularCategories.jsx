import React from 'react'
import Image1 from '../assets/images/1771592080.webp'
import { Link } from "react-router-dom";

const PopularCategories = () => {
  return (
    <>
     <div className="max-w-7xl mx-auto px-5   lg:px-8 py-10">
        <h2 className="text-gray-900 text-3xl font-semibold mb-3">Explore Popular Categories</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima at ipsum quos eligendi beatae expedita qui. Provident natus, quia harum placeat obcaecati illum ad suscipit, praesentium doloribus corporis aut est.</p>

        <div className="overflow-x-hidden">
          <div className="flex gap-6 mt-5 py-5">

            {/* img1 */}
            <Link  className="flex flex-col justify-center items-center space-y-3 hover:text-orange-500">
            <div className="w-24 aspect-square rounded-full overflow-hidden">
              <img src={Image1} alt="" className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
            </div>
            <div className="font-semibold">Pasta</div>
            </Link>

            {/* img2 */}
            <Link  className="flex flex-col justify-center items-center space-y-3 hover:text-orange-500">
            <div className="w-24 aspect-square rounded-full overflow-hidden">
              <img src={Image1} alt="" className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
            </div>
            <div className="font-semibold">Pasta</div>
            </Link>


            {/* img3 */}
            <Link  className="flex flex-col justify-center items-center space-y-3 hover:text-orange-500">
            <div className="w-24 aspect-square rounded-full overflow-hidden">
              <img src={Image1} alt="" className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
            </div>
            <div className="font-semibold">Pasta</div>
            </Link>


            {/* img4 */}
            <Link  className="flex flex-col justify-center items-center space-y-3 hover:text-orange-500">
            <div className="w-24 aspect-square rounded-full overflow-hidden">
              <img src={Image1} alt="" className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
            </div>
            <div className="font-semibold">Pasta</div>
            </Link>


            {/* img5 */}
            <Link  className="flex flex-col justify-center items-center space-y-3 hover:text-orange-500">
            <div className="w-24 aspect-square rounded-full overflow-hidden">
              <img src={Image1} alt="" className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
            </div>
            <div className="font-semibold">Pasta</div>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCategories