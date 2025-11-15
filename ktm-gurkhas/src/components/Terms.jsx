import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";

const Terms = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-yellow-300 bg-black flex items-center justify-center">
              <FaFileContract className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            <span className="block text-yellow-300">TERMS OF</span>
            <span className="block text-gold-500 mt-2">SERVICE</span>
          </h1>
          <p className="mt-4 text-xl text-yellow-100 max-w-2xl mx-auto">
            Last updated: December 1, 2023
          </p>
        </div>

        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Welcome to Kathmandu Gurkhas
            </h2>
            <p className="text-yellow-100 leading-relaxed">
              These Terms of Service govern your use of the Kathmandu Gurkhas
              website, mobile applications, and services. By accessing or using
              our services, you agree to be bound by these terms.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">
              Table of Contents
            </h3>
            <ul className="text-yellow-100 space-y-2">
              <li>
                <a
                  href="#account"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  1. Account Registration
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  2. Ticket Purchases
                </a>
              </li>
              <li>
                <a
                  href="#merchandise"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  3. Merchandise Sales
                </a>
              </li>
              <li>
                <a
                  href="#conduct"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  4. User Conduct
                </a>
              </li>
              <li>
                <a
                  href="#intellectual"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  5. Intellectual Property
                </a>
              </li>
              <li>
                <a
                  href="#termination"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  6. Termination
                </a>
              </li>
              <li>
                <a
                  href="#limitation"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  7. Limitation of Liability
                </a>
              </li>
            </ul>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Account Registration */}
            <section id="account" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaCheck className="mr-2" />
                1. Account Registration
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  To access certain features of our services, you must register
                  for an account.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must provide accurate and complete information</li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account
                  </li>
                  <li>
                    You must be at least 13 years old to create an account
                  </li>
                  <li>
                    We reserve the right to suspend or terminate accounts that
                    violate these terms
                  </li>
                </ul>
              </div>
            </section>

            {/* Ticket Purchases */}
            <section id="tickets" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaCheck className="mr-2" />
                2. Ticket Purchases
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>All ticket sales are subject to the following conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tickets are non-refundable except as required by law</li>
                  <li>
                    Resale of tickets may be restricted for certain events
                  </li>
                  <li>You must comply with venue rules and regulations</li>
                  <li>We reserve the right to cancel or reschedule events</li>
                </ul>
              </div>
            </section>

            {/* Merchandise Sales */}
            <section id="merchandise" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaCheck className="mr-2" />
                3. Merchandise Sales
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>All merchandise purchases are governed by these terms:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prices are subject to change without notice</li>
                  <li>
                    Returns are accepted within 30 days with original receipt
                  </li>
                  <li>Custom or personalized items cannot be returned</li>
                  <li>We are not responsible for lost or stolen packages</li>
                </ul>
              </div>
            </section>

            {/* User Conduct */}
            <section id="conduct" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2" />
                4. User Conduct
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services for any illegal purpose</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with the proper functioning of our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaShieldAlt className="mr-2" />
                5. Intellectual Property
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  All content, trademarks, and logos are the property of
                  Kathmandu Gurkhas Cricket Club or our licensors. You may not
                  use our intellectual property without prior written
                  permission.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2" />
                6. Termination
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  We may terminate or suspend your account and access to our
                  services immediately, without prior notice, for conduct that
                  we believe violates these Terms of Service or is harmful to
                  other users, us, or third parties, or for any other reason.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaShieldAlt className="mr-2" />
                7. Limitation of Liability
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  To the maximum extent permitted by law, Kathmandu Gurkhas
                  Cricket Club shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of
                  profits or revenues, whether incurred directly or indirectly.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-yellow-300 mb-4">
                Contact Us
              </h3>
              <p className="text-yellow-100 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="text-yellow-100 space-y-2">
                <p>Email: legal@gurkhas.com.np</p>
                <p>Phone: +977-1-XXXXXXX</p>
                <p>
                  Address: Kathmandu Gurkhas Cricket Club, TU Ground, Kathmandu,
                  Nepal
                </p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-yellow-300 border-opacity-20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/register"
              className="text-yellow-300 hover:text-yellow-200 font-medium transition duration-300"
            >
              ← Back to Registration
            </Link>
            <Link
              to="/privacy"
              className="px-6 py-2 border border-yellow-300 text-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              Privacy Policy →
            </Link>
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

export default Terms;
