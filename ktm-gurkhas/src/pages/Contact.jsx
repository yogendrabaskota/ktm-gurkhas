import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background pattern matching other pages */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">GET IN TOUCH</span>
              <span className="block text-gold-500 mt-2">WITH GURKHAS</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
              We'd love to hear from you. Reach out for inquiries, partnerships,
              or just to say hello!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                  CONTACT INFO
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">
                        Our Headquarters
                      </h4>
                      <p className="mt-1 text-yellow-100">
                        Kathmandu Gurkhas Arena
                        <br />
                        Tripureshwor, Kathmandu
                        <br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaPhone className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="mt-1 text-yellow-100">
                        +977 1 1234567
                        <br />
                        +977 9801234567 (Mobile)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaEnvelope className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="mt-1 text-yellow-100">
                        info@gurkhas.com
                        <br />
                        support@gurkhas.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaClock className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">
                        Office Hours
                      </h4>
                      <p className="mt-1 text-yellow-100">
                        Sunday-Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                  SOCIAL MEDIA
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full border border-yellow-300 flex items-center justify-center text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full border border-yellow-300 flex items-center justify-center text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full border border-yellow-300 flex items-center justify-center text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full border border-yellow-300 flex items-center justify-center text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
                  >
                    <FaYoutube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                SEND US A MESSAGE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-yellow-100"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-gray-800 border border-yellow-300 border-opacity-30 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-yellow-100"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-gray-800 border border-yellow-300 border-opacity-30 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-yellow-100"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-gray-800 border border-yellow-300 border-opacity-30 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-yellow-100"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-gray-800 border border-yellow-300 border-opacity-30 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative elements matching other pages */}
        <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-yellow-200 animate-pulse opacity-70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Contact;
