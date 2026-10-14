import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Tags,
  UtensilsCrossed,
  ShoppingBag,
  Menu,
  X,
  LogOut,
  ChefHat,
} from "lucide-react";
import { useAdminAuth } from "../../context/AdminAuth";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { admin, logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const navigation = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Category",
      path: "/admin/category",
      icon: Tags,
    },
    {
      name: "Dishes",
      path: "/admin/dishes",
      icon: UtensilsCrossed,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: ShoppingBag,
    },
  ];

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between bg-slate-800 px-5 py-5">
          <Link to="/" onClick={closeSidebar}>
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="text-orange-500">Crave</span>Kart
            </h1>
            <p className="mt-1 text-xs tracking-widest text-slate-300">
              ADMIN PANEL
            </p>
          </Link>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
          >
            <X size={23} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin/dashboard"}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-200"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                  }`
                }
              >
                <Icon size={21} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-100 p-5">
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
              <ChefHat size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">CraveKart</p>
              <p className="text-xs text-gray-500">Food Management</p>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            © 2026 CraveKart
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen min-w-0 flex-1 md:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
          <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            {/* Mobile Menu + Welcome */}
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
                aria-expanded={sidebarOpen}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 md:hidden"
              >
                <Menu size={23} />
              </button>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-lg font-bold text-white shadow-md shadow-orange-100 sm:h-12 sm:w-12 sm:text-xl">
                R
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500 sm:text-sm">
                  Welcome back 👋
                </p>
                <h2 className="truncate text-sm font-extrabold text-gray-800 sm:text-lg">
                  {admin?.name || "Admin"}
                </h2>
                <p className="hidden text-xs text-gray-400 sm:block">
                  Admin Dashboard
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-100 transition hover:scale-[1.02] hover:shadow-lg sm:px-5"
            >
              <LogOut size={17} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
      </main>
    </div>
  );
};

export default Dashboard;
