import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Header from "./layouts/Header";
import MyOrders from "./pages/account/MyOrders";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import { AdminAuthProvider } from "./context/AdminAuth";
import AdminGuest from "./common/AdminGuest";
import RequireAdmin from "./common/RequireAdmin";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/dashboard";

  return (
    <AdminAuthProvider>
      {!hideLayout && <Header />}

      <main className={!hideLayout ? "flex-1 pt-[70px]" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/my-orders" element={<MyOrders />} />

          <Route
            path="/admin/login"
            element={
              <AdminGuest>
                <AdminLogin />
              </AdminGuest>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
        </Routes>

        <Toaster position="top-center" reverseOrder={false} />
      </main>
    </AdminAuthProvider>
  );
}

export default App;
