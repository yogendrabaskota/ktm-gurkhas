import { Link } from "react-router-dom";
import { FaSignInAlt, FaLock, FaEnvelope, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

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
          <p className="mt-2 text-lg text-yellow-100">Login to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
          <form className="space-y-6">
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
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="your@email.com"
                />
              </div>
            </div>

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
                  autoComplete="current-password"
                  required
                  className="bg-gray-900 border border-yellow-300 border-opacity-30 focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 py-3 text-white rounded-md"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-300 focus:ring-yellow-300 border-yellow-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-yellow-100"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-yellow-300 hover:text-yellow-200"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
              >
                <FaSignInAlt className="mr-2" />
                Sign in
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
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-yellow-300 border-opacity-30 text-base font-medium rounded-md text-yellow-100 bg-black hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
              >
                <FaGoogle className="mr-3 h-5 w-5" />
                Sign in with Google
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-yellow-100">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-yellow-300 hover:text-yellow-200"
              >
                Register here
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

export default Login;
