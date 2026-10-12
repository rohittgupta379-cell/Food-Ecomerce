
import React from "react";
import Layout from "../layouts/Layout";
import Image from "../assets/images/1774550435.jpg";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-5 sm:py-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">

          {/* Page Heading */}
          <div className="mb-5 sm:mb-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Cart
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Check your items before placing your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

            {/* LEFT: CART ITEMS */}
            <div className="min-w-0 lg:col-span-8 ">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                {/* Cart Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Shopping Cart
                  </h2>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    3 Items
                  </span>
                </div>

                {/* MOBILE DESIGN */}
                <div className="lg:hidden divide-y divide-gray-100">

                  {/* Product 1 */}
                  <div className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={Image}
                        alt="Kaaju"
                        className="h-24 w-24 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              Kaaju
                            </h3>
                            <p className="mt-1 text-xs text-green-600">
                              ● In Stock
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => console.log("Remove item 1")}
                            className="shrink-0 text-xs font-medium text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>

                        <p className="mt-3 text-lg font-bold text-orange-600">
                          ₹499
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                          <label
                            htmlFor="mobile-quantity-1"
                            className="text-xs text-gray-500"
                          >
                            Quantity
                          </label>

                          <select
                            id="mobile-quantity-1"
                            defaultValue="1"
                            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-400"
                          >
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={Image}
                        alt="Kaaju"
                        className="h-24 w-24 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              Kaaju
                            </h3>
                            <p className="mt-1 text-xs text-green-600">
                              ● In Stock
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => console.log("Remove item 2")}
                            className="shrink-0 text-xs font-medium text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>

                        <p className="mt-3 text-lg font-bold text-orange-600">
                          ₹499
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                          <label
                            htmlFor="mobile-quantity-2"
                            className="text-xs text-gray-500"
                          >
                            Quantity
                          </label>

                          <select
                            id="mobile-quantity-2"
                            defaultValue="1"
                            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-400"
                          >
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product 3 */}
                  <div className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={Image}
                        alt="Kaaju"
                        className="h-24 w-24 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              Kaaju
                            </h3>
                            <p className="mt-1 text-xs text-green-600">
                              ● In Stock
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => console.log("Remove item 3")}
                            className="shrink-0 text-xs font-medium text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>

                        <p className="mt-3 text-lg font-bold text-orange-600">
                          ₹499
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                          <label
                            htmlFor="mobile-quantity-3"
                            className="text-xs text-gray-500"
                          >
                            Quantity
                          </label>

                          <select
                            id="mobile-quantity-3"
                            defaultValue="1"
                            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-400"
                          >
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* DESKTOP TABLE */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-orange-50 text-sm text-gray-700">
                      <tr>
                        <th className="px-4 py-4">Product</th>
                        <th className="px-4 py-4">Price</th>
                        <th className="px-4 py-4">Quantity</th>
                        <th className="px-4 py-4">Total</th>
                        <th className="px-4 py-4">Action</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={Image}
                              alt="Kaaju"
                              className="h-14 w-14 rounded-xl object-cover"
                            />
                            <div>
                              <p className="font-semibold">Kaaju</p>
                              <p className="mt-1 text-xs text-green-600">
                                In Stock
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5">₹499</td>
                        <td className="px-4 py-5">
                          <select defaultValue="1" className="rounded-lg border px-3 py-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>{qty}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-5 font-bold text-orange-600">
                          ₹499
                        </td>
                        <td className="px-4 py-5">
                          <button type="button" className="text-sm font-semibold text-red-500">
                            Remove
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-5">
                          <div className="flex items-center gap-3">
                            <img src={Image} alt="Kaaju" className="h-14 w-14 rounded-xl object-cover" />
                            <div>
                              <p className="font-semibold">Kaaju</p>
                              <p className="mt-1 text-xs text-green-600">In Stock</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5">₹499</td>
                        <td className="px-4 py-5">
                          <select defaultValue="1" className="rounded-lg border px-3 py-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>{qty}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-5 font-bold text-orange-600">₹499</td>
                        <td className="px-4 py-5">
                          <button type="button" className="text-sm font-semibold text-red-500">Remove</button>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-5">
                          <div className="flex items-center gap-3">
                            <img src={Image} alt="Kaaju" className="h-14 w-14 rounded-xl object-cover" />
                            <div>
                              <p className="font-semibold">Kaaju</p>
                              <p className="mt-1 text-xs text-green-600">In Stock</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5">₹499</td>
                        <td className="px-4 py-5">
                          <select defaultValue="1" className="rounded-lg border px-3 py-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((qty) => (
                              <option key={qty} value={qty}>{qty}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-5 font-bold text-orange-600">₹499</td>
                        <td className="px-4 py-5">
                          <button type="button" className="text-sm font-semibold text-red-500">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Cart Footer */}
                <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    to="/menu"
                    className="py-2 text-center text-sm font-semibold text-orange-600 sm:text-left"
                  >
                    ← Continue Shopping
                  </Link>

                  <button
                    type="button"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-600 sm:w-auto sm:py-2"
                  >
                    Update Cart
                  </button>
                </div>

              </div>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div className="min-w-0 lg:col-span-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-24">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Review your order details
                </p>

                <div className="mt-5 space-y-4">
                  <div className="flex justify-between gap-3">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">₹1497</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-sm text-gray-600">Delivery Charges</span>
                    <span className="font-semibold text-green-600">₹10</span>
                  </div>

                  <div className="flex justify-between items-center gap-3 border-t border-dashed border-gray-200 pt-4">
                    <span className="text-base font-bold text-gray-900">
                      Grand Total
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-orange-600">
                      ₹1507
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/checkout")}
                  className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3.5 font-bold text-white transition hover:bg-orange-600 active:scale-[0.98]"
                >
                  Proceed to Checkout →
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 sm:text-sm">
                  <span>🔒</span>
                  <span>Safe and secure checkout</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
