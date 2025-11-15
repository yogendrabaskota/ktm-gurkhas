import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTshirt,
  FaVenusMars,
  FaWeight,
  FaRuler,
  FaArrowRight,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const Trial = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",

    // Cricket Information
    playingRole: "",
    battingStyle: "",
    bowlingStyle: "",
    preferredPosition: "",

    // Physical Attributes
    height: "",
    weight: "",

    // Experience
    playingExperience: "",
    previousTeams: "",
    achievements: "",

    // Availability
    availableFrom: "",
    availableDays: [],

    agreeToTerms: false,
  });

  const playingRoles = [
    "Batsman",
    "Bowler",
    "All-rounder",
    "Wicket-keeper",
    "Wicket-keeper/Batsman",
  ];

  const battingStyles = ["Right-handed", "Left-handed"];

  const bowlingStyles = [
    "Right-arm fast",
    "Right-arm medium",
    "Right-arm spin",
    "Left-arm fast",
    "Left-arm medium",
    "Left-arm spin",
    "N/A (Batsman/Wicket-keeper)",
  ];

  const preferredPositions = [
    "Opening Batsman",
    "Top Order (1-3)",
    "Middle Order (4-6)",
    "Finisher (6-7)",
    "Opening Bowler",
    "First Change",
    "Middle Overs",
    "Death Bowler",
  ];

  const experienceLevels = [
    "Beginner (0-1 years)",
    "Club Level (1-3 years)",
    "District Level (3-5 years)",
    "Regional Level (5+ years)",
    "National Level Experience",
  ];

  const availableDaysOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "availableDays") {
        const updatedDays = formData.availableDays.includes(value)
          ? formData.availableDays.filter((day) => day !== value)
          : [...formData.availableDays, value];
        setFormData((prev) => ({ ...prev, availableDays: updatedDays }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Trial registration data:", formData);
    alert("Thank you for registering for trials! We will contact you soon.");
  };

  const calculateAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <section id="trials">
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-300 bg-black flex items-center justify-center">
                <GiCricketBat className="w-10 h-10 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">PLAYER TRIALS</span>
              <span className="block text-gold-500 mt-2">REGISTRATION</span>
            </h1>
            <p className="mt-4 text-xl text-yellow-100 max-w-2xl mx-auto">
              Show us your skills and join the Gurkhas family
            </p>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Trial Information
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    <strong>Next Trial Date:</strong> January 15, 2024 |{" "}
                    <strong>Location:</strong> TU Ground, Kathmandu
                    <br />
                    <strong>Requirements:</strong> Bring your own kit, sports
                    attire, and valid ID proof
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                  <FaUser className="mr-3" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      />
                    </div>
                    {formData.dateOfBirth && (
                      <p className="text-sm text-yellow-200 mt-1">
                        Age: {calculateAge(formData.dateOfBirth)} years
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Gender *
                    </label>
                    <div className="relative">
                      <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-yellow-100 mb-2"
                  >
                    Address *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-yellow-300" />
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      placeholder="Full address including street, ward number, etc."
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-yellow-100 mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                  />
                </div>
              </div>

              {/* Cricket Information Section */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                  <GiCricketBat className="mr-3" />
                  Cricket Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="playingRole"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Primary Playing Role *
                    </label>
                    <select
                      id="playingRole"
                      name="playingRole"
                      required
                      value={formData.playingRole}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    >
                      <option value="">Select Role</option>
                      {playingRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="battingStyle"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Batting Style *
                    </label>
                    <select
                      id="battingStyle"
                      name="battingStyle"
                      required
                      value={formData.battingStyle}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    >
                      <option value="">Select Batting Style</option>
                      {battingStyles.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="bowlingStyle"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Bowling Style *
                    </label>
                    <select
                      id="bowlingStyle"
                      name="bowlingStyle"
                      required
                      value={formData.bowlingStyle}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    >
                      <option value="">Select Bowling Style</option>
                      {bowlingStyles.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="preferredPosition"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Preferred Position *
                    </label>
                    <select
                      id="preferredPosition"
                      name="preferredPosition"
                      required
                      value={formData.preferredPosition}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    >
                      <option value="">Select Position</option>
                      {preferredPositions.map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Physical Attributes */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                  <FaTshirt className="mr-3" />
                  Physical Attributes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="height"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Height (cm) *
                    </label>
                    <div className="relative">
                      <FaRuler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <input
                        type="number"
                        id="height"
                        name="height"
                        required
                        min="100"
                        max="250"
                        value={formData.height}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Weight (kg) *
                    </label>
                    <div className="relative">
                      <FaWeight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        required
                        min="30"
                        max="150"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                  Playing Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="playingExperience"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Playing Experience Level *
                    </label>
                    <select
                      id="playingExperience"
                      name="playingExperience"
                      required
                      value={formData.playingExperience}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    >
                      <option value="">Select Experience Level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="previousTeams"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Previous Teams/Clubs
                    </label>
                    <textarea
                      id="previousTeams"
                      name="previousTeams"
                      rows={3}
                      value={formData.previousTeams}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      placeholder="List any previous teams or clubs you've played for"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="achievements"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Notable Achievements
                    </label>
                    <textarea
                      id="achievements"
                      name="achievements"
                      rows={3}
                      value={formData.achievements}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                      placeholder="Any awards, records, or notable performances"
                    />
                  </div>
                </div>
              </div>

              {/* Availability Section */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                  Availability
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="availableFrom"
                      className="block text-sm font-medium text-yellow-100 mb-2"
                    >
                      Available to Start From *
                    </label>
                    <input
                      type="date"
                      id="availableFrom"
                      name="availableFrom"
                      required
                      value={formData.availableFrom}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-yellow-300 border-opacity-30 rounded-md px-3 py-2 text-white focus:outline-none focus:border-yellow-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100 mb-2">
                      Available Training Days *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableDaysOptions.map((day) => (
                        <label
                          key={day}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="availableDays"
                            value={day}
                            checked={formData.availableDays.includes(day)}
                            onChange={handleChange}
                            className="rounded border-yellow-300 text-yellow-300 focus:ring-yellow-300"
                          />
                          <span className="text-yellow-100 text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-black bg-opacity-30 border border-yellow-300 border-opacity-20 rounded-lg p-4">
                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-300 focus:ring-yellow-300 border-yellow-300 rounded mt-1"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-3 text-yellow-100 text-sm"
                  >
                    I hereby declare that all the information provided above is
                    true and correct to the best of my knowledge. I understand
                    that providing false information may lead to
                    disqualification from the trials. I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-yellow-300 hover:text-yellow-200 underline"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and
                    <Link
                      to="/privacy"
                      className="text-yellow-300 hover:text-yellow-200 underline ml-1"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
                >
                  Register for Trials
                  <FaArrowRight className="ml-2 -mr-1 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-yellow-100">
              For any queries, contact us at{" "}
              <a
                href="mailto:trials@gurkhas.com.np"
                className="text-yellow-300 hover:text-yellow-200"
              >
                trials@gurkhas.com.np
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
      </div>
    </section>
  );
};

export default Trial;
