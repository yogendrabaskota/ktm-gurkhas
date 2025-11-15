import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick =
    (path, sectionId = null) =>
    (e) => {
      if (location.pathname === "/" && sectionId) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${sectionId}`);
        }
      } else {
        e.preventDefault();
        navigate(`${path}${sectionId ? `#${sectionId}` : ""}`);
      }
      setIsOpen(false);
    };

  return (
    <nav className="bg-black shadow-lg border-b border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-300 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={logo}
                  alt="Kathmandu Gurkhas Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-white text-center">
                <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-wider">
                  KATHMANDU
                </h1>
                <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 leading-none">
                  GURKHAS
                </h2>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/#schedule"
                onClick={handleNavClick("schedule", "schedule")}
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Schedule
              </Link>
              <Link
                to="/#team-section"
                onClick={handleNavClick("team", "team-section")}
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Team
              </Link>
              <Link
                to="/news"
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                News
              </Link>
              <Link
                to="/shop"
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About
              </Link>
              <Link
                to="/partners"
                className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Sponsers
              </Link>
            </div>

            {/* Login Button - Desktop */}
            <div className="ml-8 flex items-center space-x-4">
              <Link
                to="/login"
                className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300"
              >
                <FaSignInAlt className="mr-2" />
                Join
              </Link>
              <Link
                to="/#contact"
                onClick={handleNavClick("contact", "contact")}
                className="border border-yellow-300 text-yellow-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 hover:bg-opacity-10 hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-300 focus:outline-none"
              aria-label="Main menu"
            >
              {/* Hamburger icon */}
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black border-t border-yellow-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to={location.pathname === "/" ? "#team-section" : "/team"}
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                const teamSection = document.getElementById("team-section");
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: "smooth" });
                }
              }
              setIsOpen(false);
            }}
            className="text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </Link>
          <Link
            to="/schedule"
            className="text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            to="/news"
            className="text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            to="/shop"
            className="text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          {/* Login Button - Mobile */}
          <Link
            to="/login"
            className="items-center text-gray-300 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FaSignInAlt className="mr-2" />
            Login
          </Link>
          <Link
            to="/contact"
            className="border border-yellow-300 text-yellow-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-300 hover:bg-opacity-10"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
