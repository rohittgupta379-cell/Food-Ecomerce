
import React from "react";
import Layout from "../layouts/Layout";
import Image from "../assets/images/1774550435.jpg";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const inputClass =
    "mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500";

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-5 sm:py-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">

          {/* Page Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Checkout
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

            {/* LEFT: BILLING DETAILS */}
            <div className="lg:col-span-8">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

                <h2 className="mb-6 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Billing Details
                </h2>

                <form className="space-y-5">

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* City and State */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  {/* Zip and Country */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Zip
                      </label>
                      <input
                        type="text"
                        name="zip"
                        placeholder="Zip"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile"
                      className={inputClass}
                      required
                    />
                  </div>

                </form>
              </div>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                <h2 className="mb-6 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Order Summary
                </h2>

               

                {/* Product 2 */}
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={Image}
                    alt="Kaaju"
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Kaaju
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Qty: 1
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-gray-900">
                    ₹499
                  </span>
                </div>

                {/* Product 3 */}
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={Image}
                    alt="Kaaju"
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Kaaju
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Qty: 1
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-gray-900">
                    ₹499
                  </span>
                </div>

                {/* Price Details */}
                <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ₹1497
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium text-gray-900">
                      ₹10
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 border-t border-gray-200 pt-4">
                    <span className="font-bold text-gray-900">
                      Grand Total
                    </span>
                    <span className="text-xl font-bold text-orange-600">
                      ₹1507
                    </span>
                  </div>

                </div>

                {/* Payment Method */}
                <div className="mt-6">
                  <h3 className="mb-4 text-base font-semibold text-gray-900">
                    Payment Method
                  </h3>

                  <div className="flex flex-wrap gap-5">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        defaultChecked
                        className="accent-orange-500"
                      />
                      COD
                    </label>

                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                      <input
                        type="radio"
                        name="payment"
                        value="stripe"
                        className="accent-orange-500"
                      />
                      Stripe
                    </label>
                  </div>
                </div>

                {/* Place Order */}
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="mt-7 w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-orange-500"
                >
                  Place Your Order
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
