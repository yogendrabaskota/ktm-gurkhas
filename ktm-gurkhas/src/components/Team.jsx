import { Link } from "react-router-dom";

const Team = () => {
  // Sample team data - replace with your actual data
  const players = [
    {
      id: 1,
      name: "karan KC",
      role: "Captain",
      image: "/players/karan.png",
      stats: "Matches: 24 | Runs: 1024 | Wickets: 12",
    },
    {
      id: 2,
      name: "Bhim Sharki",
      role: "Batsman",
      image: "/players/bhim.png",
      stats: "Matches: 18 | Runs: 845 | HS: 127",
    },
    {
      id: 3,
      name: "Pratik",
      role: "Bowler",
      image: "/players/pratik.png",
      stats: "Matches: 22 | Wickets: 34 | Best: 5/22",
    },
    {
      id: 4,
      name: "Dipesh",
      role: "All-Rounder",
      image: "/players/dipesh.png",
      stats: "Matches: 20 | Runs: 512 | Wickets: 18",
    },
    {
      id: 5,
      name: "Rashid",
      role: "All-Rounder",
      image: "/players/rashid.png",
      stats: "Matches: 20 | Runs: 512 | Wickets: 18",
    },
    {
      id: 6,
      name: "karan KC",
      role: "Captain",
      image: "/players/karan.png",
      stats: "Matches: 24 | Runs: 1024 | Wickets: 12",
    },
    {
      id: 7,
      name: "Bhim Sharki",
      role: "Batsman",
      image: "/players/bhim.png",
      stats: "Matches: 18 | Runs: 845 | HS: 127",
    },
    {
      id: 8,
      name: "Pratik",
      role: "Bowler",
      image: "/players/pratik.png",
      stats: "Matches: 22 | Wickets: 34 | Best: 5/22",
    },
  ];

  const coachingStaff = [
    {
      id: 1,
      name: "Head Coach",
      role: "Head Coach",
      image: "/players/karan.png",
    },
    {
      id: 2,
      name: "Batting Coach",
      role: "Batting Coach",
      image: "/players/karan.png",
    },
    {
      id: 3,
      name: "Bowling Coach",
      role: "Bowling Coach",
      image: "/players/karan.png",
    },
    {
      id: 1,
      name: "Fielding Coach",
      role: "Head Coach",
      image: "/players/karan.png",
    },
    {
      id: 2,
      name: "Asst. Coach",
      role: "Batting Coach",
      image: "/players/karan.png",
    },
    {
      id: 3,
      name: "Physio",
      role: "Bowling Coach",
      image: "/players/karan.png",
    },
  ];

  return (
    <section
      id="team-section"
      className="py-16 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background pattern matching Hero section */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Team Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">MEET THE</span>
              <span className="block text-gold-500 mt-2">GURKHA WARRIORS</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
              The fearless squad carrying the spirit of #AAYOGORKHALI
            </p>
          </div>

          {/* Players Section */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 text-center border-b border-yellow-300 pb-2 inline-block px-8">
              PLAYING SQUAD
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {players.map((player) => (
                <div key={player.id} className="relative group">
                  <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden border-2 border-yellow-300 shadow-lg">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-xl font-bold text-white">
                      {player.name}
                      <span className="block text-yellow-300 text-sm font-normal">
                        {player.role}
                      </span>
                    </h4>
                    <p className="mt-2 text-yellow-100 text-sm">
                      {player.stats}
                    </p>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-black rounded-full w-10 h-10 flex items-center justify-center border border-yellow-300">
                    <span className="text-yellow-300 font-bold text-xs">
                      #{player.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coaching Staff */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 text-center border-b border-yellow-300 pb-2 inline-block px-8">
              COACHING STAFF
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coachingStaff.map((staff) => (
                <div key={staff.id} className="text-center">
                  <div className="mx-auto w-40 h-40 rounded-full border-2 border-yellow-300 overflow-hidden shadow-lg mb-4">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {staff.name}
                    <span className="block text-yellow-300 text-sm font-normal">
                      {staff.role}
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
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

export default Team;
