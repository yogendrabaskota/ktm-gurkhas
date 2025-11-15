import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFlag,
  FaStar,
  FaHistory,
  FaMedal,
} from "react-icons/fa";

const About = () => {
  // Team milestones
  const milestones = [
    {
      year: "2018",
      title: "Franchise Foundation",
      description:
        "Kathmandu Gurkhas was established as a professional cricket franchise with the vision of promoting Nepali cricket talent.",
      icon: FaFlag,
    },
    {
      year: "2019",
      title: "First Season Debut",
      description:
        "Made our debut in the Nepal Premier League, finishing as semi-finalists in our inaugural season.",
      icon: FaHistory,
    },
    {
      year: "2020",
      title: "Community Outreach",
      description:
        "Launched the Gurkhas Cricket Academy to nurture young talent across Kathmandu Valley.",
      icon: FaUsers,
    },
    {
      year: "2022",
      title: "Championship Victory",
      description:
        "Won our first NPL championship in a thrilling final against Pokhara Rhinos.",
      icon: FaTrophy,
    },
    {
      year: "2023",
      title: "International Recognition",
      description:
        "Expanded our fan base globally with partnerships and international friendly matches.",
      icon: FaStar,
    },
  ];

  // Team statistics
  const stats = [
    { number: "5", label: "Seasons Played", icon: FaCalendarAlt },
    { number: "1", label: "Championships", icon: FaTrophy },
    { number: "42", label: "Players Developed", icon: FaUsers },
    { number: "15,000+", label: "Loyal Fans", icon: FaStar },
  ];

  // Management team
  const management = [
    {
      name: "Rajesh Thapa",
      position: "Chairman & Owner",
      experience: "15+ years in sports management",
      image: "/management/chairman.jpg",
    },
    {
      name: "Suresh Gurung",
      position: "Team Manager",
      experience: "Former national team player",
      image: "/management/manager.jpg",
    },
    {
      name: "Dr. Anita Sharma",
      position: "Head of Operations",
      experience: "Sports administration specialist",
      image: "/management/operations.jpg",
    },
  ];

  return (
    <section id="about">
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden min-h-screen">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">OUR STORY</span>
              <span className="block text-gold-500 mt-2">
                KATHMANDU GURKHAS
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-yellow-100">
              From humble beginnings to becoming one of Nepal's most celebrated
              cricket franchises
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-yellow-300 mb-6">
                  The Gurkhas Legacy
                </h2>
                <p className="text-yellow-100 text-lg leading-relaxed mb-6">
                  Founded in 2018, Kathmandu Gurkhas emerged with a mission to
                  revolutionize Nepali cricket. Named after the legendary Gurkha
                  warriors known for their courage and resilience, our team
                  embodies these same values on the cricket field.
                </p>
                <p className="text-yellow-100 text-lg leading-relaxed">
                  Based at the historic Tribhuvan University Ground, we've grown
                  from a promising startup franchise to championship winners,
                  all while maintaining our core commitment to developing local
                  talent and engaging with our passionate fan base.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/about-hero.jpg"
                  alt="Kathmandu Gurkhas Team Celebration"
                  className="w-full rounded-lg shadow-2xl border-2 border-yellow-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-black px-4 py-2 rounded-lg font-bold">
                  Since 2018
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center hover:border-yellow-400 transition duration-300"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-yellow-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaStar className="mr-3" />
                Our Mission
              </h3>
              <p className="text-yellow-100 leading-relaxed">
                To develop world-class cricket talent in Nepal while promoting
                sportsmanship, community engagement, and national pride. We
                strive to be more than just a cricket team – we aim to be a
                source of inspiration for aspiring athletes across the country.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaMedal className="mr-3" />
                Our Vision
              </h3>
              <p className="text-yellow-100 leading-relaxed">
                To establish Kathmandu Gurkhas as a globally recognized cricket
                franchise that consistently produces international-level players
                while maintaining deep roots in our local community and
                upholding the rich cricketing heritage of Nepal.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-300 h-full opacity-30"></div>

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 hover:border-yellow-400 transition duration-300">
                        <div className="flex items-center mb-3">
                          <milestone.icon className="w-6 h-6 text-yellow-300 mr-3" />
                          <span className="text-yellow-300 font-bold text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-yellow-100">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300 rounded-full border-4 border-black"></div>

                    {/* Empty space for alternating sides */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current State Section */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-8">
              Where We Are Today
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Current Achievements
                </h3>
                <ul className="text-yellow-100 space-y-3">
                  <li className="flex items-start">
                    <FaTrophy className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>2022 NPL Championship winners</span>
                  </li>
                  <li className="flex items-start">
                    <FaUsers className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>42 players developed through our academy system</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>5 players selected for national team duties</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Expanded community programs to 15 schools in Kathmandu
                      Valley
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Future Goals
                </h3>
                <ul className="text-yellow-100 space-y-3">
                  <li className="flex items-start">
                    <FaMedal className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Win back-to-back NPL championships</span>
                  </li>
                  <li className="flex items-start">
                    <FaUsers className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Develop 20+ international-level players in next 5 years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Establish cricket academies in 3 new regions of Nepal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaTrophy className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Participate in international T20 tournaments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {management.map((person, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center hover:border-yellow-400 transition duration-300"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-yellow-300 mx-auto mb-4 overflow-hidden bg-gray-800">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {person.name}
                  </h3>
                  <p className="text-yellow-300 font-semibold mb-2">
                    {person.position}
                  </p>
                  <p className="text-yellow-100 text-sm">{person.experience}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action - Updated to match your design */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
              WANT TO JOIN THE GURKHA WARRIORS?
            </h3>
            <p className="text-yellow-100 mb-6">
              We're always looking for passionate players who embody the
              #AAYOGORKHALI spirit
            </p>
            <Link
              to="/trials"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
            >
              Register for Trials
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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

export default About;
