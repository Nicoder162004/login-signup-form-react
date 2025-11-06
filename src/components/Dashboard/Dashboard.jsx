import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CalendarPage from "./Calendar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate short delay (e.g., localStorage or data fetch)
    const timer = setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      setLoading(false);
    }, 500); // half a second

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-indigo-700 font-semibold">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <p>User not found. Please login again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-blue-100">
      <Navbar userName={user?.name || "User"} />
      <div className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-indigo-700 mb-4">
          Upcoming Meetings
        </h1>

        {/* Example meeting cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-gray-800">Team Sync</h3>
            <p className="text-gray-500 text-sm">Tomorrow • 10:00 AM</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-gray-800">Client Review</h3>
            <p className="text-gray-500 text-sm">Nov 8 • 2:30 PM</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-gray-800">UI/UX Discussion</h3>
            <p className="text-gray-500 text-sm">Nov 10 • 11:15 AM</p>
          </div>
        </div>

        <CalendarPage />
      </div>
    </div>
  );
};

export default Dashboard;
