import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    toast.success("Signup Successful 🎉");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-100 to-blue-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-2">
          Create Account 🚀
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join us and start your journey today
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
