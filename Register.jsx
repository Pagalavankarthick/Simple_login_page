import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";


function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    team: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if user already exists
    const existingUser = localStorage.getItem("stacklyUser");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (
        user.username.toLowerCase() ===
          formData.username.toLowerCase() ||
        user.email.toLowerCase() ===
          formData.email.toLowerCase()
      ) {
        alert("Username or Email already registered!");
        return;
      }
    }

    // Save user details
    localStorage.setItem(
      "stacklyUser",
      JSON.stringify(formData)
    );

    // Reset login attempts
    localStorage.setItem("loginAttempts", "0");
    localStorage.removeItem("lockTime");

    alert("Registration successful!");

    // Move to Login page
    navigate("/login");
  };

  return (
    <AuthLayout isLogin={false}>

      {/* Registration Card */}
      <div className="w-full rounded-2xl border border-white/10 bg-[#17152d]/90 backdrop-blur-xl shadow-2xl p-7 md:p-9">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Create your account
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Create your Stackly account to continue.
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
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

          {/* Team */}
          <div>
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Team
            </label>

            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-lg bg-[#111025] border border-white/10 text-gray-300 outline-none focus:border-purple-500/60 transition"
            >
              <option value="">
                Select your team
              </option>

              <option value="AI_AM_Engineer">
                AI_AM_Engineer
              </option>

              <option value="Backend_Developer">
                Backend_Developer
              </option>

              <option value="Data_Analyst">
                Data_Analyst
              </option>

              <option value="Devops_Engineer">
                Devops_Engineer
              </option>

              <option value="Frontend_Developer">
                Frontend_Developer
              </option>

              <option value="Testing">
                Testing
              </option>

              <option value="UI_UX">
                UI_UX
              </option>

              <option value="Architecture">
                Architecture
              </option>

              <option value="Fullstack_Developer">
                Fullstack_Developer
              </option>
            </select>
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
              placeholder="Create password"
              required
              className="w-full h-12 px-4 rounded-lg bg-[#111025] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-12 mt-3 rounded-lg bg-gradient-to-r from-purple-500 to-red-400 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-purple-900/20"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Login
          </button>
        </p>

      </div>

    </AuthLayout>
  );
}

export default Register;