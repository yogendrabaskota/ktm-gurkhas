import { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Sample gallery data - replace with your actual images
  const galleryData = [
    {
      id: 1,
      image: "/players/karan.png",
      season: "2023",
      match: "Match 1",
      caption: "Opening ceremony of season 2023",
    },
    {
      id: 2,
      image: "/players/karan.png",
      season: "2023",
      match: "Match 1",
      caption: "Team huddle before the game",
    },
    {
      id: 3,
      image: "/players/karan.png",
      season: "2023",
      match: "Match 1",
      caption: "Victory celebration",
    },
    {
      id: 4,
      image: "/players/karan.png",
      season: "2023",
      match: "Match 2",
      caption: "Player receiving award",
    },
    {
      id: 5,
      image: "/players/karan.png",
      season: "2023",
      match: "Match 2",
      caption: "Team photo after win",
    },
    {
      id: 6,
      image: "/players/karan.png",
      season: "2022",
      match: "Match 1",
      caption: "2022 season opener",
    },
    {
      id: 7,
      image: "/players/karan.png",
      season: "2022",
      match: "Match 1",
      caption: "Fan interaction",
    },
    {
      id: 8,
      image: "/players/karan.png",
      season: "2022",
      match: "Match 2",
      caption: "Training session",
    },
    {
      id: 9,
      image: "/players/karan.png",
      season: "2022",
      match: "Match 2",
      caption: "Player in action",
    },
    {
      id: 10,
      image: "/players/karan.png",
      season: "2021",
      match: "Match 1",
      caption: "Historic first match",
    },
    {
      id: 11,
      image: "/players/karan.png",
      season: "2021",
      match: "Match 1",
      caption: "Team celebration",
    },
    {
      id: 12,
      image: "/gallery/match6-1.jpg",
      season: "2021",
      match: "Match 2",
      caption: "Player interview",
    },
  ];

  // Get unique seasons and matches for filters
  const seasons = [...new Set(galleryData.map((item) => item.season))];
  const matches = [...new Set(galleryData.map((item) => item.match))];

  // State for filters
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [selectedMatch, setSelectedMatch] = useState("All");

  // Filter images based on selections
  const filteredImages = galleryData.filter((image) => {
    const seasonMatch =
      selectedSeason === "All" || image.season === selectedSeason;
    const matchMatch = selectedMatch === "All" || image.match === selectedMatch;
    return seasonMatch && matchMatch;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            <span className="block text-yellow-300">GURKHAS</span>
            <span className="block text-gold-500 mt-2">GALLERY</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-yellow-100">
            Relive the thrilling moments from our journey
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-auto">
              <label
                htmlFor="season-filter"
                className="block text-sm font-medium text-yellow-100 mb-1"
              >
                Filter by Season
              </label>
              <select
                id="season-filter"
                className="bg-gray-900 border border-yellow-300 text-yellow-100 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5"
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                <option value="All">All Seasons</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-auto">
              <label
                htmlFor="match-filter"
                className="block text-sm font-medium text-yellow-100 mb-1"
              >
                Filter by Match
              </label>
              <select
                id="match-filter"
                className="bg-gray-900 border border-yellow-300 text-yellow-100 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5"
                value={selectedMatch}
                onChange={(e) => setSelectedMatch(e.target.value)}
              >
                <option value="All">All Matches</option>
                {matches.map((match) => (
                  <option key={match} value={match}>
                    {match}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                setSelectedSeason("All");
                setSelectedMatch("All");
              }}
              className="mt-5.5 px-4 py-2 border border-yellow-300 text-yellow-100 rounded-md hover:bg-yellow-300 hover:bg-opacity-10 transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg border-2 border-yellow-300 shadow-lg transition-transform duration-300 hover:shadow-xl hover:border-yellow-200"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.match} - {item.season}
                  </h3>
                  <p className="text-yellow-100 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-yellow-100 text-xl">
              No images found matching your filters
            </p>
            <button
              onClick={() => {
                setSelectedSeason("All");
                setSelectedMatch("All");
              }}
              className="mt-4 px-6 py-2 border border-yellow-300 text-yellow-100 rounded-md hover:bg-yellow-300 hover:bg-opacity-10 transition duration-300"
            >
              Show All Images
            </button>
          </div>
        )}

        {/* Back to Team Link */}
        <div className="mt-16 text-center">
          <Link
            to="/team"
            className="inline-flex items-center px-6 py-3 border border-yellow-300 text-base font-medium rounded-md text-yellow-100 hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Team
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
    </section>
  );
};

export default Gallery;
