import { useNavigate } from "react-router-dom";
import stacklyLogo from "./assets/stackly_logo.png";
function AuthLayout({ children, isLogin }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0b1c] text-white overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[10%] w-[450px] h-[450px] bg-red-900/10 rounded-full blur-[140px]" />

        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[150px]" />

      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">

        {/* Logo */}
       <div className="absolute top-6 left-8 z-30">
        <img
          src={stacklyLogo}
          alt="Stackly Logo"
          className="w-32 h-auto object-contain"
        />
      </div>

        {/* Top right button */}
        <button
          onClick={() => navigate(isLogin ? "/register" : "/login")}
          className="border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-6 py-2 rounded-lg text-sm transition"
        >
          {isLogin ? "Create account" : "Sign in"}
        </button>

      </header>

      {/* Main */}
      <main className="relative z-10 min-h-screen flex items-center px-8 md:px-16 lg:px-20 pt-20 pb-16">

        <div className="w-full max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="hidden md:block max-w-xl">

            {/* Decorative graphic */}
            <div className="relative w-64 h-52 mb-10">

              <div className="absolute left-12 top-8 w-36 h-28 border-l-2 border-t-2 border-purple-500/40 rounded-tl-3xl" />

              <div className="absolute left-20 top-16 w-32 h-20 border-l-2 border-b-2 border-red-400/40" />

              <div className="absolute left-28 top-24 w-28 h-16 border-t-2 border-purple-400/30" />

              <div className="absolute left-12 top-12 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

              <div className="absolute left-32 top-24 w-3 h-3 rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.8)]" />

            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">

              Build Your
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                Ideas
              </span>

              {" "}With Stackly

            </h1>

            {/* Description */}
            <p className="mt-7 text-gray-400 text-base leading-7 max-w-lg">

              Create, manage, and collaborate with your team
              using a powerful workspace designed for modern
              developers and businesses.

            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-gray-300">
                ✦ AI Assistance
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-gray-300">
                ✦ Team Collaboration
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-gray-300">
                ✦ Smart Workspace
              </span>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full flex justify-center lg:justify-end">

            <div className="w-full max-w-[470px]">

              {children}

            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06]">

        <div className="px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">

          <p>
            © 2026 Stackly. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-gray-300">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-gray-300">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:text-gray-300">
              Contact
            </span>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default AuthLayout;