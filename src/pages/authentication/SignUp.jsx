import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../assets/logo.avif";
import authService from "../../app/service/auth.service";
import ErrorHandler from "../../app/ErrorHandler";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    gender: "",
    transactional_password: "",
    invitation_code: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTransactionalPassword, setShowTransactionalPassword] =
    useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    // Check if fields are filled
    const requiredFields = [
      "username",
      "email",
      "phone_number",
      "password",
      "transactional_password",
      "invitation_code",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        errors.push(`The ${field.replace("_", " ")} field is empty`);
      }
    });

    // Validate transactional_password length
    if (
      formData.transactional_password &&
      formData.transactional_password.length !== 4
    ) {
      errors.push(
        "The transactional password must be exactly 4 characters long.",
      );
    }

    // Check for password match
    if (formData.password !== formData.confirmPassword) {
      errors.push("Passwords do not match.");
    }

    // Check for terms acceptance
    if (!formData.termsAccepted) {
      errors.push("Please accept the terms and conditions to continue.");
    }

    // If there are any errors, display them and stop further execution
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setLoading(true);

    const payload = {
      username: formData.username,
      email: formData.email,
      phone_number: formData.phone_number,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      gender: formData.gender,
      transactional_password: formData.transactional_password,
      invitation_code: formData.invitation_code,
    };

    try {
      const response = await authService.register(payload);

      if (response.success) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page
      } else {
        ErrorHandler(response.message);
      }
    } catch (err) {
      console.error(err);
      ErrorHandler(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#141414] font-sans">
      {/* Header - Matching Login Page */}
      <header className="w-full bg-[#1c1c1c] py-4 px-6 border-b border-black shadow-md flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[140px] cursor-pointer transition-opacity hover:opacity-80"
          onClick={() => navigate("/")}
        />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full mx-auto p-6 md:p-10 lg:p-14">
        <h2 className="text-[#83FF90] text-[25px] font-light mb-10 tracking-wide">
          Applying for one-submit curator account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ROW 1: Personal Info (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                autoComplete="given-name"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                autoComplete="family-name"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
          </div>

          {/* ROW 2: Passwords (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full p-2.5 pr-10 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full p-2.5 pr-10 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Gender
              </label>
              <div className="flex items-center space-x-6 h-[42px]">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    onChange={handleChange}
                    checked={formData.gender === "M"}
                    className="form-radio text-[#83FF90] bg-black border-gray-700 focus:ring-[#83FF90]"
                  />
                  <span className="text-gray-300 text-[20px] font-light group-hover:text-white transition-colors">
                    Male
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    onChange={handleChange}
                    checked={formData.gender === "F"}
                    className="form-radio text-[#83FF90] bg-black border-gray-700 focus:ring-[#83FF90]"
                  />
                  <span className="text-gray-300 text-[20px] font-light group-hover:text-white transition-colors">
                    Female
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* ROW 3: Account Details (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Transaction Password{" "}
                <span className="text-gray-500 text-[16px]">(4 chars)</span>
              </label>
              <div className="relative">
                <input
                  type={showTransactionalPassword ? "text" : "password"}
                  name="transactional_password"
                  value={formData.transactional_password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full p-2.5 pr-10 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowTransactionalPassword(!showTransactionalPassword)
                  }
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showTransactionalPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[20px] font-light mb-2">
                Invitation Code
              </label>
              <input
                type="text"
                name="invitation_code"
                value={formData.invitation_code}
                onChange={handleChange}
                autoComplete="off"
                className="w-full p-2.5 bg-black border border-gray-700 text-white text-sm rounded-sm focus:outline-none focus:border-[#83FF90] transition-colors"
              />
            </div>
          </div>

          {/* Bottom Area: Terms & Submit Button */}
          <div className="flex flex-col items-end pt-12 space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 bg-black border-gray-700 text-[#83FF90] rounded-sm focus:ring-[#83FF90] focus:ring-offset-0 cursor-pointer"
              />
              <label className="text-gray-300 text-[20px] font-light">
                I agree to the{" "}
                <a
                  href="/termsandconds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-[#83FF90] transition-colors"
                >
                  terms and condition
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="px-10 py-2.5 bg-gradient-to-b from-gray-900 to-black border border-[#83FF90] text-[#83FF90] font-medium text-sm rounded-sm hover:from-gray-800 transition-all flex justify-center items-center min-w-[120px]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Apply"}
            </button>

            <div className="text-right w-full mt-4">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-gray-500 text-[20px] font-light hover:text-white transition-colors"
              >
                Back to Login
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
