import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaHistory,
} from "react-icons/fa";

const Schedule = () => {
  // Sample schedule data
  const allMatches = [
    {
      id: 1,
      date: "2024-12-02",
      time: "14:00",
      opponent: "Chitwan Rhinos",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Lost by 5 wickets",
    },
    {
      id: 2,
      date: "2027-12-04",
      time: "11:00",
      opponent: "Karnali Yaks",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Won by 3 wickets",
    },
    {
      id: 2,
      date: "2024-12-04",
      time: "11:00",
      opponent: "Karnali Yaks",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Won by 3 wickets",
    },
    {
      id: 3,
      date: "2024-12-05",
      time: "13:30",
      opponent: "Sudur Paschim Royals",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Lost by 73 runs",
    },
    {
      id: 4,
      date: "2024-12-11", // Future date for demonstration
      time: "10:30",
      opponent: "Lumbini Lions",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Won by 18 runs",
    },
    {
      id: 5,
      date: "2024-12-12", // Future date for demonstration
      time: "15:00",
      opponent: "Janakpur Boltz",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Lost by 5 wickets",
    },
    {
      id: 5,
      date: "2024-12-14", // Future date for demonstration
      time: "15:00",
      opponent: "Pokhara Avengers",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Won by 6 wickets",
    },
    {
      id: 5,
      date: "2024-12-15", // Future date for demonstration
      time: "15:00",
      opponent: "Biratnagar Kings",
      venue: "Tribhuvan University Ground",
      competition: "NPL T20",
      isHome: true,
      ticketLink: "#",
      result: "Won by 1 Wickets",
    },
  ];

  // Get current date
  const currentDate = new Date();

  // Filter matches into upcoming and past
  const upcomingMatches = allMatches.filter(
    (match) => new Date(match.date) >= currentDate
  );
  const pastMatches = allMatches
    .filter((match) => new Date(match.date) < currentDate)
    .reverse(); // Reverse to show most recent first

  // Function to render match rows
  const renderMatchRows = (matches, isPast = false) => {
    return matches.map((match) => (
      <tr
        key={match.id}
        className={`hover:bg-black hover:bg-opacity-50 transition duration-150 ${
          isPast ? "opacity-80" : ""
        }`}
      >
        <td className="px-6 py-5 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 text-yellow-300">
              <FaCalendarAlt className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-white">
                {new Date(match.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm text-yellow-100">{match.time}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-5 whitespace-nowrap">
          <div className="flex items-center">
            <div
              className={`flex-shrink-0 h-10 w-10 ${
                match.isHome ? "text-yellow-300" : "text-gray-400"
              }`}
            >
              {match.isHome ? (
                <span className="text-xs font-bold">HOME</span>
              ) : (
                <span className="text-xs font-bold">AWAY</span>
              )}
            </div>
            <div className="ml-4">
              <div className="text-lg font-bold text-white">
                Kathmandu Gurkhas
              </div>
              <div className="text-sm text-yellow-100">vs {match.opponent}</div>
              {isPast && match.result && (
                <div
                  className={`text-xs mt-1 ${
                    match.result.includes("Won")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {match.result}
                </div>
              )}
            </div>
          </div>
        </td>
        <td className="px-6 py-5 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 text-yellow-300">
              <FaMapMarkerAlt className="h-5 w-5" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-white">
                {match.venue}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-5 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-300 bg-opacity-10 text-yellow-300">
            {match.competition}
          </span>
        </td>
        <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
          {isPast ? (
            <Link
              to={`/match-details/${match.id}`}
              className="inline-flex items-center px-4 py-2 border border-yellow-300 rounded-md shadow-sm text-sm font-medium text-yellow-300 hover:bg-yellow-300 hover:text-white hover:bg-opacity-10 transition duration-300"
            >
              Match Report
            </Link>
          ) : (
            <Link
              to={match.ticketLink}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300"
            >
              <FaTicketAlt className="-ml-1 mr-2 h-4 w-4" />
              Get Tickets
            </Link>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <section id="schedule">
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden min-h-screen">
        {/* Background pattern matching Hero section */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">MATCH</span>
              <span className="block text-gold-500 mt-2">
                SCHEDULE & RESULTS
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
              Follow your Gurkhas through the season. #AAYOGORKHALI
            </p>
          </div>

          {/* Upcoming Matches */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
              <FaCalendarAlt className="mr-2" />
              UPCOMING MATCHES
            </h3>

            {upcomingMatches.length > 0 ? (
              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-yellow-300 divide-opacity-20">
                    <thead className="bg-black bg-opacity-70">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Match
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Venue
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Competition
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Tickets
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-black bg-opacity-30 divide-y divide-yellow-300 divide-opacity-10">
                      {renderMatchRows(upcomingMatches)}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center">
                <p className="text-yellow-100">
                  No upcoming matches scheduled. Check back later!
                </p>
              </div>
            )}
          </div>

          {/* Past Matches */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
              <FaHistory className="mr-2" />
              PAST MATCHES
            </h3>

            {pastMatches.length > 0 ? (
              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-yellow-300 divide-opacity-20">
                    <thead className="bg-black bg-opacity-70">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Match & Result
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Venue
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Competition
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-medium text-yellow-300 uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-black bg-opacity-30 divide-y divide-yellow-300 divide-opacity-10">
                      {renderMatchRows(pastMatches, true)}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center">
                <p className="text-yellow-100">No past matches recorded yet.</p>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                SEASON TICKETS
              </h3>
              <p className="text-yellow-100 mb-4">
                Don't miss a single match! Get our exclusive season ticket
                package and enjoy all home games with premium benefits.
              </p>
              <Link
                to=""
                // to="/season-tickets"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                MATCH DAY EXPERIENCE
              </h3>
              <p className="text-yellow-100 mb-4">
                Enjoy the ultimate cricket experience with our hospitality
                packages, including premium seating, food, and exclusive access.
              </p>
              <Link
                // to="/hospitality"
                to=""
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements matching Hero section */}
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

export default Schedule;
