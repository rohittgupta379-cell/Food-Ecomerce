
import React from "react";
import Layout from "../../layouts/Layout";
import Image from "../../assets/images/1774550435.jpg";

const MyOrders = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Orders
            </h1>
          </div>

          {/* Order Card */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* Order Header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  #ORD1237
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  17 Apr 2026
                </p>
              </div>

              <span className="w-fit rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
                Pending
              </span>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 gap-6 p-5 lg:grid-cols-12 lg:p-6">

              {/* Products */}
              <div className="space-y-5 lg:col-span-6">

                {/* Product 1 */}
                <div className="flex items-center gap-4">
                  <img
                    src={Image}
                    alt="Chocolate Cake"
                    className="h-16 w-16 rounded-lg border border-gray-100 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900">
                      Chocolate Cake
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Qty: 2
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    $40.00
                  </p>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4">
                  <img
                    src={Image}
                    alt="Crispy Veg Burger"
                    className="h-16 w-16 rounded-lg border border-gray-100 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900">
                      Crispy Veg Burger
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Qty: 1
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    $20.00
                  </p>
                </div>

                

              </div>

              {/* Order Summary */}
              <div className="lg:col-span-3">
                <h2 className="mb-5 text-base font-semibold text-gray-900">
                  Order Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      $84.00
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">Delivery</span>
                    <span className="font-medium text-gray-900">
                      $5.00
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 border-t border-gray-200 pt-4">
                    <span className="font-bold text-gray-900">
                      Grand Total
                    </span>
                    <span className="text-lg font-bold text-orange-600">
                      $89.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Actions */}
              <div className="flex flex-col justify-center gap-3 lg:col-span-3">
                <button
                  type="button"
                  className="w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Reorder
                </button>

                <button
                  type="button"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-600"
                >
                  Pending
                </button>
              </div>

            </div>
          </div>


          

        </div>

        
      </div>
    </Layout>
  );
};

export default MyOrders;
