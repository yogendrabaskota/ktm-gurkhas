/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaChartLine,
  FaBaseballBall,
  FaArrowLeft,
} from "react-icons/fa";

const MatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample match data with innings breakdown
  const matchDetails = {
    id: "1",
    date: "2023-10-15",
    time: "14:00",
    opponent: "Pokhara Rhinos",
    venue: "Tribhuvan University Ground",
    competition: "NPL T20",
    isHome: true,
    result: "Won by 28 runs",
    toss: "Pokhara Rhinos won the toss and elected to field",
    mom: "Player One (KTM Gurkhas) - 78 runs (45 balls)",
    summary:
      "Kathmandu Gurkhas put up a dominant performance against Pokhara Rhinos in the NPL T20 opener. Player One's explosive 78 off just 45 balls set the foundation for Gurkhas' total of 185. The bowlers then restricted Rhinos to 157, with Player Three taking 3 crucial wickets.",
    highlights: [
      "Player One's 78 runs included 6 fours and 4 sixes",
      "Player Three's bowling figures of 3/22 in 4 overs",
      "Brilliant fielding by Player Five with 2 catches and a run-out",
      "50-run partnership between Player One and Player Two in just 5.2 overs",
    ],
    firstInnings: {
      team: "Kathmandu Gurkhas",
      score: "185/6 (20 overs)",
      batting: [
        {
          name: "Player One",
          runs: 78,
          balls: 45,
          fours: 6,
          sixes: 4,
          out: "c RhinoPlayerA b RhinoPlayerB",
        },
        {
          name: "Player Two",
          runs: 32,
          balls: 28,
          fours: 3,
          sixes: 1,
          out: "lbw b RhinoPlayerE",
        },
        {
          name: "Player Three",
          runs: 15,
          balls: 8,
          fours: 2,
          sixes: 0,
          out: "not out",
        },
        {
          name: "Player Four",
          runs: 22,
          balls: 12,
          fours: 1,
          sixes: 2,
          out: "run out",
        },
        {
          name: "Player Five",
          runs: 18,
          balls: 10,
          fours: 2,
          sixes: 0,
          out: "st RhinoPlayerC b RhinoPlayerE",
        },
      ],
      bowling: [
        {
          name: "RhinoPlayerB",
          overs: 4,
          maidens: 0,
          runs: 32,
          wickets: 1,
          economy: 8.0,
        },
        {
          name: "RhinoPlayerC",
          overs: 4,
          maidens: 0,
          runs: 40,
          wickets: 0,
          economy: 10.0,
        },
        {
          name: "RhinoPlayerD",
          overs: 4,
          maidens: 0,
          runs: 38,
          wickets: 0,
          economy: 9.5,
        },
        {
          name: "RhinoPlayerE",
          overs: 4,
          maidens: 0,
          runs: 28,
          wickets: 3,
          economy: 7.0,
        },
        {
          name: "RhinoPlayerA",
          overs: 4,
          maidens: 0,
          runs: 42,
          wickets: 1,
          economy: 10.5,
        },
      ],
    },
    secondInnings: {
      team: "Pokhara Rhinos",
      score: "157/8 (20 overs)",
      batting: [
        {
          name: "RhinoPlayerA",
          runs: 45,
          balls: 32,
          fours: 5,
          sixes: 1,
          out: "c PlayerFive b PlayerThree",
        },
        {
          name: "RhinoPlayerB",
          runs: 12,
          balls: 8,
          fours: 2,
          sixes: 0,
          out: "b PlayerThree",
        },
        {
          name: "RhinoPlayerC",
          runs: 28,
          balls: 22,
          fours: 3,
          sixes: 1,
          out: "run out",
        },
        {
          name: "RhinoPlayerD",
          runs: 30,
          balls: 25,
          fours: 4,
          sixes: 0,
          out: "c PlayerOne b PlayerFour",
        },
        {
          name: "RhinoPlayerE",
          runs: 8,
          balls: 5,
          fours: 1,
          sixes: 0,
          out: "not out",
        },
      ],
      bowling: [
        {
          name: "PlayerThree",
          overs: 4,
          maidens: 0,
          runs: 22,
          wickets: 3,
          economy: 5.5,
        },
        {
          name: "PlayerFour",
          overs: 4,
          maidens: 0,
          runs: 30,
          wickets: 1,
          economy: 7.5,
        },
        {
          name: "PlayerOne",
          overs: 3,
          maidens: 0,
          runs: 28,
          wickets: 0,
          economy: 9.3,
        },
        {
          name: "PlayerTwo",
          overs: 4,
          maidens: 0,
          runs: 35,
          wickets: 2,
          economy: 8.75,
        },
        {
          name: "PlayerFive",
          overs: 2,
          maidens: 0,
          runs: 15,
          wickets: 0,
          economy: 7.5,
        },
      ],
    },
  };

  const renderBattingTable = (innings) => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-yellow-300 border-opacity-20">
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Batsman
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Runs
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Balls
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              4s
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              6s
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Dismissal
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-300 divide-opacity-10">
          {innings.batting.map((player, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.runs}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.balls}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.fours}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.sixes}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-yellow-100">
                {player.out || "not out"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBowlingTable = (innings) => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-yellow-300 border-opacity-20">
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Bowler
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Overs
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Maidens
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Runs
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Wickets
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">
              Economy
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-300 divide-opacity-10">
          {innings.bowling.map((player, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.overs}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.maidens}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.runs}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.wickets}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-white">
                {player.economy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900 min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)} // Goes back to previous page
          className="flex items-center text-yellow-300 hover:text-yellow-200 mb-6 transition duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Matches
        </button>
        {/* Match Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-300 mb-2">
            Match Report
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Kathmandu Gurkhas vs {matchDetails.opponent}
          </h2>
          <div
            className={`mt-4 inline-block px-4 py-1 rounded-full text-sm font-bold ${
              matchDetails.result.includes("Won")
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {matchDetails.result}
          </div>
        </div>

        {/* Match Overview */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <FaCalendarAlt className="text-yellow-300 text-xl mr-3" />
              <div>
                <h3 className="text-sm text-yellow-100">Date & Time</h3>
                <p className="text-white font-medium">
                  {new Date(matchDetails.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <br />
                  {matchDetails.time}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-300 text-xl mr-3" />
              <div>
                <h3 className="text-sm text-yellow-100">Venue</h3>
                <p className="text-white font-medium">{matchDetails.venue}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaTrophy className="text-yellow-300 text-xl mr-3" />
              <div>
                <h3 className="text-sm text-yellow-100">Competition</h3>
                <p className="text-white font-medium">
                  {matchDetails.competition}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Summary */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
            <FaChartLine className="mr-2" />
            Match Summary
          </h3>
          <div className="mb-6">
            <p className="text-lg font-bold text-white mb-2">
              <span className="text-yellow-300">
                {matchDetails.firstInnings.team}:
              </span>{" "}
              {matchDetails.firstInnings.score}
            </p>
            <p className="text-lg font-bold text-white mb-2">
              <span className="text-yellow-300">
                {matchDetails.secondInnings.team}:
              </span>{" "}
              {matchDetails.secondInnings.score}
            </p>
            <p className="text-yellow-100 mb-4">{matchDetails.toss}</p>
            <p className="text-yellow-100 mb-4">
              <span className="font-bold text-yellow-300">
                Player of the Match:
              </span>{" "}
              {matchDetails.mom}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-2">
              Match Summary
            </h4>
            <p className="text-yellow-100 mb-4">{matchDetails.summary}</p>
            <h4 className="text-lg font-bold text-yellow-300 mb-2">
              Key Highlights
            </h4>
            <ul className="list-disc list-inside text-yellow-100 space-y-1">
              {matchDetails.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* First Innings */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
            <FaBaseballBall className="mr-2" />
            First Innings: {matchDetails.firstInnings.team}{" "}
            {matchDetails.firstInnings.score}
          </h3>

          <h4 className="text-lg font-medium text-yellow-300 mb-2">Batting</h4>
          {renderBattingTable(matchDetails.firstInnings)}

          <h4 className="text-lg font-medium text-yellow-300 mt-6 mb-2">
            Bowling
          </h4>
          {renderBowlingTable(matchDetails.firstInnings)}
        </div>

        {/* Second Innings */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
            <FaBaseballBall className="mr-2" />
            Second Innings: {matchDetails.secondInnings.team}{" "}
            {matchDetails.secondInnings.score}
          </h3>

          <h4 className="text-lg font-medium text-yellow-300 mb-2">Batting</h4>
          {renderBattingTable(matchDetails.secondInnings)}

          <h4 className="text-lg font-medium text-yellow-300 mt-6 mb-2">
            Bowling
          </h4>
          {renderBowlingTable(matchDetails.secondInnings)}
        </div>

        {/* Gallery and Media (placeholder) */}
        <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            Match Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-yellow-100"
              >
                Image {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
