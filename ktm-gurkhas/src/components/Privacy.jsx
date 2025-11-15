import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserShield,
  FaDatabase,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Privacy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-yellow-300 bg-black flex items-center justify-center">
              <FaShieldAlt className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            <span className="block text-yellow-300">PRIVACY</span>
            <span className="block text-gold-500 mt-2">POLICY</span>
          </h1>
          <p className="mt-4 text-xl text-yellow-100 max-w-2xl mx-auto">
            Last updated: December 1, 2023
          </p>
        </div>

        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-yellow-100 leading-relaxed">
              At Kathmandu Gurkhas Cricket Club, we are committed to protecting
              your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4 text-center">
              <FaUserShield className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="font-bold text-yellow-300 mb-2">
                Data Protection
              </h3>
              <p className="text-yellow-100 text-sm">
                We implement industry-standard security measures
              </p>
            </div>
            <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4 text-center">
              <FaDatabase className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="font-bold text-yellow-300 mb-2">Your Control</h3>
              <p className="text-yellow-100 text-sm">
                You have control over your personal information
              </p>
            </div>
            <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4 text-center">
              <FaLock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="font-bold text-yellow-300 mb-2">Transparency</h3>
              <p className="text-yellow-100 text-sm">
                We're clear about how we use your data
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section id="information" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaDatabase className="mr-2" />
                1. Information We Collect
              </h3>
              <div className="text-yellow-100 space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">
                    Personal Information:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>
                      Payment information (processed securely by our partners)
                    </li>
                    <li>Account credentials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">
                    Usage Information:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Device information</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="usage" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaUserShield className="mr-2" />
                2. How We Use Your Information
              </h3>
              <div className="text-yellow-100 space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process your ticket and merchandise orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send important updates about matches and events</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section id="sharing" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaShieldAlt className="mr-2" />
                3. Data Sharing and Disclosure
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  We do not sell your personal information to third parties. We
                  may share your data with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Service providers (payment processors, shipping companies)
                  </li>
                  <li>Legal authorities when required by law</li>
                  <li>
                    Other cricket associations for tournament participation
                  </li>
                  <li>Marketing partners (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaLock className="mr-2" />
                4. Data Security
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  We implement appropriate security measures to protect your
                  personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers with limited access</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaUserShield className="mr-2" />
                5. Your Rights
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaDatabase className="mr-2" />
                6. Cookies and Tracking
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  We use cookies and similar technologies to enhance your
                  experience, analyze site traffic, and personalize content. You
                  can control cookies through your browser settings.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section id="children" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaShieldAlt className="mr-2" />
                7. Children's Privacy
              </h3>
              <div className="text-yellow-100 space-y-3">
                <p>
                  Our services are not directed to children under 13. We do not
                  knowingly collect personal information from children under 13.
                  If we learn we have collected such information, we will delete
                  it promptly.
                </p>
              </div>
            </section>

            {/* Contact & Updates */}
            <section className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-yellow-300 mb-4">
                Contact & Updates
              </h3>
              <div className="text-yellow-100 space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">
                    Contact Our Privacy Team:
                  </h4>
                  <p>Email: privacy@gurkhas.com.np</p>
                  <p>Phone: +977-1-XXXXXXX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">
                    Policy Updates:
                  </h4>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by posting the new policy
                    on our website and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-yellow-300 border-opacity-20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/terms"
              className="text-yellow-300 hover:text-yellow-200 font-medium transition duration-300"
            >
              ← Terms of Service
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 border border-yellow-300 text-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              Back to Registration
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

export default Privacy;
