import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.avif";
import { toast } from "sonner";
import authService from "../../app/service/auth.service";
import AppInit from "../../app/state.helper";
import Loader from "../dashboard/components/loader";
import { home, landing } from "../../constants/app.routes";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved username from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("rememberedUsername");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedUsername && savedRememberMe) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    const errors = [];

    if (!username.trim()) {
      errors.push("Username is required.");
    }
    if (!password.trim()) {
      errors.push("Password is required.");
    }

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setLoading(true);

    if (rememberMe) {
      localStorage.setItem("rememberedUsername", username);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberMe");
    }

    const credentials = {
      username: username,
      password,
    };

    try {
      const response = await authService.login(credentials);

      if (response.success) {
        const initSuccess = await AppInit({ dispatch, isAuthenticated: true });

        if (initSuccess) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate(home);
          }, 2000);
        } else {
          toast.error(
            "Failed to initialize the application. Please try again.",
          );
        }
      } else {
        throw new Error(
          response.message || "Login failed. Please check your credentials.",
        );
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#141414] font-sans">
      {/* Header - Lighter Background */}
      <header className="w-full bg-[#1c1c1c] py-4 px-6 border-b border-black shadow-md flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[140px] cursor-pointer transition-opacity hover:opacity-80"
          onClick={() => navigate(landing)}
        />
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={fadeIn("up", null).initial}
          whileInView={fadeIn("up", 0.2).animate}
          className="w-full max-w-[400px]"
        >
          {/* Header (Sign In / Register) - Outside the Card */}
          <div className="flex items-end justify-between border-b border-[#83FF90] pb-1 mb-4">
            <div className="flex items-center gap-2 text-[#83FF90] pb-1 -mb-[5px]">
              <AiOutlineUser className="text-xl" />
              <span className="text-[25px] font-light tracking-wide uppercase">
                Sign In
              </span>
            </div>
            <a
              href="/login/signup"
              className="text-[18px] text-gray-300 hover:text-white transition-colors pb-1"
            >
              Register
            </a>
          </div>

          {/* Form Container Card - Darker BG, Lighter Border */}
          <div className="bg-[#050505] border border-gray-500 rounded-sm py-24 px-12 shadow-2xl">
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Username/Email Input */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-[25px] font-light text-white mb-1.5"
                >
                  Username/Email
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full p-2.5 bg-black border border-gray-700 text-white text-lg rounded-lg focus:outline-none focus:border-[#83FF90] transition-colors"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-[25px] font-light text-white mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2.5 pr-10 bg-black border border-gray-700 text-white text-lg rounded-lg focus:outline-none focus:border-[#83FF90] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="h-5 w-5" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-left pt-2 pb-2">
                <a
                  href="/contact"
                  className="text-gray-500 text-[16px] font-light hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button - Green border with white-to-black gradient */}
              <div>
                <button
                  type="submit"
                  className="mt-6 px-6 py-2 bg-gradient-to-b from-[#2a2a2a] to-[#111111] border border-[#83FF90] text-[#83FF90] font-light text-[20px] rounded-md hover:border-[#83FF90] transition-all flex items-center justify-center min-w-[80px]"
                  disabled={loading}
                >
                  {loading ? <Loader /> : "OK"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
        >
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-8 w-full max-w-xs text-center">
            <FaCheckCircle className="text-[#83FF90] text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-medium text-white">
              Login Successful!
            </h2>
            <p className="text-gray-400 mt-2 text-sm font-light">
              Redirecting to your dashboard...
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
