import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    toast.success("Logged out successfully 👋");
    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-r from-indigo-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-indigo-600">
          Welcome, {user?.name || "User"} 🎉
        </h1>
        <p className="mt-3 text-gray-600">
          You're now logged in to your dashboard.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
