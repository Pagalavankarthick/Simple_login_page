import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered user from localStorage
    const storedUser = localStorage.getItem("stacklyUser");

    if (!storedUser) {
      alert("No registered account found. Please register first.");
      navigate("/register");
      return;
    }

    const user = JSON.parse(storedUser);

    // Get login attempts
    let attempts =
      Number(localStorage.getItem("loginAttempts")) || 0;

    // Get lock time
    const lockTime =
      Number(localStorage.getItem("lockTime")) || 0;

    const currentTime = Date.now();

    // Check whether login is currently blocked
    if (lockTime && currentTime < lockTime) {
      const remainingMinutes = Math.ceil(
        (lockTime - currentTime) / 60000
      );

      alert(
        `Too many failed attempts. Please try again after ${remainingMinutes} minute(s).`
      );

      return;
    }

    // Remove expired lock
    if (lockTime && currentTime >= lockTime) {
      localStorage.removeItem("lockTime");
      localStorage.setItem("loginAttempts", "0");
      attempts = 0;
    }

    // Validate username
    const usernameMatch =
      formData.username.trim().toLowerCase() ===
      user.username.trim().toLowerCase();

    // Validate email
    const emailMatch =
      formData.email.trim().toLowerCase() ===
      user.email.trim().toLowerCase();

    // Validate password
    const passwordMatch =
      formData.password === user.password;

    // -------------------------
    // LOGIN SUCCESS
    // -------------------------
    if (
      usernameMatch &&
      emailMatch &&
      passwordMatch
    ) {
      localStorage.setItem("loginAttempts", "0");
      localStorage.removeItem("lockTime");

      alert("Login successful!");

      navigate("/dashboard");

      return;
    }

    // -------------------------
    // LOGIN FAILED
    // -------------------------
    attempts++;

    localStorage.setItem(
      "loginAttempts",
      attempts.toString()
    );

    // Maximum 3 attempts
    if (attempts >= 3) {
      const fiveMinutes = 5 * 60 * 1000;

      const newLockTime =
        Date.now() + fiveMinutes;

      localStorage.setItem(
        "lockTime",
        newLockTime.toString()
      );

      alert(
        "You have entered incorrect details 3 times. Login is blocked for 5 minutes."
      );

      return;
    }

    const remainingAttempts = 3 - attempts;

    alert(
      `Invalid username, email or password.\n${remainingAttempts} attempt(s) remaining.`
    );
  };

  return (
    <AuthLayout isLogin={true}>

      {/* Login Card */}
      <div className="w-full rounded-2xl border border-white/10 bg-[#17152d]/90 backdrop-blur-xl shadow-2xl p-7 md:p-9">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Sign in to continue to your Stackly workspace.
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Username */}
          <div>
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              User Name
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full h-12 px-4 rounded-lg bg-[#111025] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full h-12 px-4 rounded-lg bg-[#111025] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full h-12 px-4 rounded-lg bg-[#111025] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 mt-3 rounded-lg bg-gradient-to-r from-purple-500 to-red-400 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-purple-900/20"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-7">

          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Create account
          </button>

        </p>

      </div>

    </AuthLayout>
  );
}

export default Login;