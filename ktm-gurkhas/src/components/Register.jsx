import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaLock,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaGoogle,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration data:", formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-md mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 rounded-full border-2 border-yellow-300 overflow-hidden bg-black flex items-center justify-center mb-4">
            <img
              src="/logo.png"
              alt="Kathmandu Gurkhas Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            <span className="block">KATHMANDU</span>
            <span className="block text-yellow-300">GURKHAS</span>
          </h2>
          <p className="mt-2 text-lg text-yellow-100">
            Join the Gurkhas Family
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-yellow-100"
                >
                  First Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 text-yellow-300" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md text-sm"
                    placeholder="First"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-yellow-100"
                >
                  Last Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 text-yellow-300" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md text-sm"
                    placeholder="Last"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-yellow-100"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-yellow-300" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-yellow-100"
              >
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-4 w-4 text-yellow-300" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-yellow-100"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-yellow-300" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-1 text-xs text-yellow-100">
                Password must be at least 8 characters long
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-yellow-100"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-yellow-300" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-300 focus:ring-yellow-300 border-yellow-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-yellow-100">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-yellow-300 hover:text-yellow-200 underline"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-yellow-300 hover:text-yellow-200 underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-300 focus:ring-yellow-300 border-yellow-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="text-yellow-100">
                    I want to receive news, updates, and special offers from
                    Kathmandu Gurkhas
                  </label>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4">
              <h4 className="text-sm font-medium text-yellow-300 mb-2">
                Benefits of joining:
              </h4>
              <ul className="text-xs text-yellow-100 space-y-1">
                <li className="flex items-center">
                  <FaCheck className="h-3 w-3 text-green-400 mr-2" />
                  Exclusive access to ticket pre-sales
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-3 w-3 text-green-400 mr-2" />
                  Member-only discounts on merchandise
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-3 w-3 text-green-400 mr-2" />
                  Personalized news and updates
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-3 w-3 text-green-400 mr-2" />
                  Invitations to special events
                </li>
              </ul>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
              >
                <FaUserPlus className="mr-2" />
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-yellow-300 border-opacity-30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-yellow-100">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-yellow-300 border-opacity-30 text-base font-medium rounded-md text-yellow-100 bg-black hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
              >
                <FaGoogle className="mr-3 h-5 w-5" />
                Sign up with Google
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-yellow-100">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-yellow-300 hover:text-yellow-200"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-yellow-200 animate-pulse opacity-70">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </section>
  );
};

export default Register;
