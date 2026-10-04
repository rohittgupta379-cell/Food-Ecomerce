import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900">

      {/* Footer Content */}
      <div className="px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10">

            {/* Logo */}
            <div>
              <Link
                className="text-3xl font-bold text-white"
                to="/"
              >
                <span className="text-orange-500">Crave</span> Kart
              </Link>

              <p className="text-gray-300 mt-4">
                Delicious food, delivered to your doorstep.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Categories
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/pizza"
                    className="hover:text-orange-500"
                  >
                    Pizza
                  </Link>
                </li>

                <li>
                  <Link
                    to="/burger"
                    className="hover:text-orange-500"
                  >
                    Burger
                  </Link>
                </li>

                <li>
                  <Link
                    to="/biryani"
                    className="hover:text-orange-500"
                  >
                    Biryani
                  </Link>
                </li>

                <li>
                  <Link
                    to="/desserts"
                    className="hover:text-orange-500"
                  >
                    Desserts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Important Links
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-500"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-500"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-orange-500"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-orange-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h3>

              <p className="text-gray-400 mb-2">
                📍 Noida, India
              </p>

              <p className="text-gray-400 mb-2">
                📞 +91 95403 42459
              </p>

              <p className="text-gray-400">
                ✉️ hello@cravekart.com
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright - Full Width */}
      <div className="w-full bg-slate-800 text-center text-white py-6">
        <p>
          Copyright © 2026 CraveKart - All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;