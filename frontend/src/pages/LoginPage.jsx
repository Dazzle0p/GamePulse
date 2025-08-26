import { useState } from "react";
import { Trophy } from "lucide-react";
import { Toaster, toast } from "sonner";
import Button from "../components/Ui/Button";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Smartphone,
  AtSign,
  LogIn,
  X,
  ChevronDown,
} from "react-feather";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (data.status === "success") {
        // Store token
        localStorage.setItem("token", data.token);
        // Store User
        // Convert object to JSON string before storing
        localStorage.setItem("user", JSON.stringify(data.data.user));
        // Redirect to Home Page
        navigate("/");
      } else {
        // Handle error
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="max-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Left Side - Brand Showcase */}

      <div className="md:w-1/2 relative hidden md:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-orange-900/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-20" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-600 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Lock className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              GamePulse
            </span>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome Back, Player</h1>
            <p className="text-xl text-gray-300 max-w-md">
              Access your gaming dashboard to track tournaments, connect with
              your team, and level up your gaming career.
            </p>
          </div>

          <Link
            to="/"
            className={`w-75 py-3.5 font-medium rounded-xl flex items-center justify-around gap-2 ${
              isLoading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-lg hover:shadow-xl"
            } transition-all duration-300`}
          >
            Continue Without Login
            <LogIn className="w-5 h-5" />
          </Link>

          <div className="flex space-x-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                    <Trophy className="text-orange-400 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              {activeTab === "login"
                ? "Login to Your Account"
                : "Create New Account"}
            </h2>
            <p className="text-gray-400">
              {activeTab === "login"
                ? "Enter your credentials to access your dashboard"
                : "Join our gaming community today"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 rounded-xl text-center font-medium ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => handleClick()}
              className={`flex-1 py-3 rounded-xl text-center font-medium ${
                activeTab === "signup"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <AtSign className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div>
                  {/* Right Column: Dropdown */}
                  <div className="relative">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="" disabled className="text-gray-400">
                        Login as
                      </option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="org-admin">Organization Admin</option>
                      <option value="to-admin">Tournament Organizer</option>
                      <option value="media-admin">Media Admin</option>
                    </select>

                    {/* Custom Arrow */}
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-orange-500 bg-gray-700 border-gray-600"
                  />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>

                <a
                  href="#"
                  className="text-sm text-orange-400 hover:text-orange-300"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 font-medium rounded-xl flex items-center justify-center gap-2 ${
                  isLoading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-lg hover:shadow-xl"
                } transition-all duration-300`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Login to Dashboard
                  </>
                )}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="py-2.5 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="py-2.5 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="py-2.5 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307c-1.467-1.547-4.253-2.44-8.214-2.44-6.32 0-11.48 5.16-11.48 11.48s5.16 11.48 11.48 11.48c6.32 0 11.48-5.16 11.48-11.48 0-1.78-.4-3.467-1.12-5.013h-10.36z" />
                  </svg>
                </button>
              </div>
            </form>
          )}
          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              © 2023 GamePulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Branding */}
      <div className="md:hidden py-6 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-red-600 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
            <Lock className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            GamePulse
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
