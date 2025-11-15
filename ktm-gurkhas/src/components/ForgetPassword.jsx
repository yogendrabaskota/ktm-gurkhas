import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setEmail("");
    setIsSubmitted(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

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
            {isSubmitted ? "Check your email" : "Reset your password"}
          </p>
        </div>

        {/* Back to Login */}
        <div className="mb-6">
          <Link
            to="/login"
            className="inline-flex items-center text-yellow-300 hover:text-yellow-200 text-sm font-medium transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to login
          </Link>
        </div>

        {/* Reset Password Form */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  Forgot Password?
                </h3>
                <p className="text-yellow-100 text-sm">
                  Enter your email address and we'll send you instructions to
                  reset your password.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition duration-300 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
                        Sending instructions...
                      </>
                    ) : (
                      "Send Reset Instructions"
                    )}
                  </button>
                </div>
              </form>

              {/* Additional Help */}
              <div className="mt-6 p-4 bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg">
                <h4 className="text-sm font-medium text-yellow-300 mb-2">
                  Need help?
                </h4>
                <p className="text-yellow-100 text-xs">
                  If you're having trouble resetting your password, contact our
                  support team at{" "}
                  <a
                    href="mailto:support@gurkhas.com.np"
                    className="text-yellow-300 hover:text-yellow-200 underline"
                  >
                    support@gurkhas.com.np
                  </a>
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-500 bg-opacity-20 border border-green-500 flex items-center justify-center">
                  <FaCheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                Check your email
              </h3>

              <p className="text-yellow-100 mb-6">
                We've sent password reset instructions to{" "}
                <span className="text-yellow-300 font-semibold">{email}</span>
              </p>

              <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-medium text-yellow-300 mb-2">
                  Didn't receive the email?
                </h4>
                <ul className="text-yellow-100 text-xs space-y-1 text-left">
                  <li>• Check your spam or junk folder</li>
                  <li>• Make sure you entered the correct email address</li>
                  <li>• Wait a few minutes and try again</li>
                </ul>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleReset}
                  className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
                >
                  Try another email
                </button>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center w-full px-4 py-3 border border-yellow-300 text-base font-medium rounded-md text-yellow-300 hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
                >
                  Back to login
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Support Contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-yellow-100">
            Still having trouble?{" "}
            <a
              href="mailto:support@gurkhas.com.np"
              className="font-medium text-yellow-300 hover:text-yellow-200"
            >
              Contact support
            </a>
          </p>
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

export default ForgotPassword;
