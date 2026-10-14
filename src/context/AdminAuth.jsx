import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AdminAuthContext = createContext(null);

const ADMIN_STORAGE_KEY = "Cravekart-admin";

const getStoredAdmin = () => {
  try {
    const savedAdmin = localStorage.getItem(ADMIN_STORAGE_KEY);
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  } catch (error) {
    console.error("Failed to read admin session:", error);
    return null;
  }
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => getStoredAdmin());

  useEffect(() => {
    if (admin) {
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(admin));
    } else {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  }, [admin]);

  const login = (adminData) => {
    const nextAdmin = adminData ? { ...adminData } : null;
    setAdmin(nextAdmin);
    return nextAdmin;
  };

  const logout = () => setAdmin(null);

  const value = useMemo(
    () => ({
      admin,
      isAuthenticated: Boolean(admin?.token),
      login,
      logout,
    }),
    [admin]
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }

  return context;
};

export default AdminAuthProvider;
