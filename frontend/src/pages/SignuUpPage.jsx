import { useState } from "react";
import { Trophy } from "lucide-react";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Smartphone,
  AtSign,
  LogIn,
  Home,
  ArrowRight,
  X,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Here you would handle actual login logic
    }, 1500);
  };

  const handleClick = () => {
    navigate("/login");
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
            Continue Without Sign Up
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

      {/* Right Side - SignUp orm */}
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
              onClick={() => handleClick()}
              className={`flex-1 py-3 rounded-xl text-center font-medium ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              className={`flex-1 py-3 rounded-xl text-center font-medium ${
                activeTab === "signup"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Signup Form */}
          {activeTab === "signup" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <AtSign className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
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
                    placeholder="Create password"
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
              </div>

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-orange-500 bg-gray-700 border-gray-600 mt-1"
                />
                <span className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-orange-400 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-400 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Create Account
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleClick()}
                  className="text-orange-400 hover:text-orange-300 font-medium"
                >
                  Sign in
                </button>
              </p>
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

export default SignUpPage;
