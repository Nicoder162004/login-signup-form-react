import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("No account found. Please sign up first!");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      toast.success(`Welcome back, ${storedUser.name}! 👋`);
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Login to your account to continue
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
