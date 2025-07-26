import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-100 border-t border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-300 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Kathmandu Gurkhas Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">KATHMANDU</h2>
                <h3 className="text-2xl font-extrabold text-yellow-300">
                  GURKHAS
                </h3>
              </div>
            </div>
            <p className="text-yellow-100 mb-4">
              Courage. Honor. Victory. The pride of Nepal in the world of
              sports.
            </p>
            <p className="text-yellow-300 font-mono tracking-wider">
              #AAYOGORKHALI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">
              CONTACT US
            </h3>
            <address className="not-italic">
              <p className="mb-2">Kathmandu Gurkhas Headquarters</p>
              <p className="mb-2">Kathmandu, Nepal</p>
              <p className="mb-2">Email: info@gurkhas.com</p>
              <p className="mb-4">Phone: +977 1 1234567</p>
            </address>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-yellow-100 hover:text-yellow-300 transition duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-yellow-100 hover:text-yellow-300 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-yellow-100 hover:text-yellow-300 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-yellow-100 hover:text-yellow-300 transition duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-yellow-300 pt-8">
          <h3 className="text-lg font-bold text-yellow-300 mb-4 text-center">
            STAY UPDATED
          </h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-yellow-300 text-black px-4 py-2 rounded-r-md font-medium hover:bg-yellow-400 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-yellow-300 text-center">
          <p className="text-yellow-100">
            &copy; {new Date().getFullYear()} Kathmandu Gurkhas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
