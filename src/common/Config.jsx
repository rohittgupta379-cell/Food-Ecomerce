export const adminToken = () => {
  const adminData = JSON.parse(localStorage.getItem("Cravekart-admin") || "null");
  return adminData?.token || null;
};

export default adminToken;
