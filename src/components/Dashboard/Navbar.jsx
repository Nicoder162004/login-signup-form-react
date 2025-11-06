import React from "react";
import { LogOut, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully 👋");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-3 fixed top-0 w-full z-10">
      <div className="flex items-center gap-2">
        <CalendarDays className="text-indigo-600" size={24} />
        <h1 className="text-xl font-semibold text-indigo-700">MeetHub</h1>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-medium">Welcome, {userName} 👋</p>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition-all"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
