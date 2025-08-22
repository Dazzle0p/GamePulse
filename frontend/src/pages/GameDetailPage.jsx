import React, { useState } from "react";
import {
  Flame,
  Trophy,
  Calendar,
  Users,
  BarChart2,
  Award,
  Clock,
  MapPin,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Mock data - replace with API calls
const gameData = {
  id: "valorant",
  name: "VALORANT",
  logo: "/valorant-logo.png",
  activePlayers: "15M+",
  developer: "Riot Games",
  releaseYear: 2020,
  tournaments: {
    ongoing: [
      {
        id: "vct-2024",
        name: "VCT 2024: Masters Madrid",
        date: "Mar 14 - 24, 2024",
        prizePool: "$1,000,000",
        participatingteams: 12,
        location: "Madrid, Spain",
        status: "Playoffs",
        teams: [
          {
            id: 1,
            name: "Sentinels",
            logo: "/team-sen.png",
            wins: 5,
            losses: 1,
          },
          { id: 2, name: "Fnatic", logo: "/team-fnc.png", wins: 5, losses: 1 },
          // ...more teams
        ],
        format: "Double Elimination Bracket",
        stages: ["Group Stage", "Playoffs"],
      },
    ],
    upcoming: [
      {
        id: "champions-2024",
        name: "VALORANT Champions 2024",
        date: "Aug 1 - 18, 2024",
        prizePool: "$2,500,000",
        teams: 16,
        location: "Seoul, South Korea",
      },
    ],
    past: [
      {
        id: "champions-2023",
        name: "VALORANT Champions 2023",
        date: "Aug 6 - 26, 2023",
        winner: "Evil Geniuses",
        prizePool: "$2,250,000",
      },
    ],
  },
  topTeams: [
    { rank: 1, name: "Sentinels", logo: "/team-sen.png", points: 450 },
    { rank: 2, name: "Fnatic", logo: "/team-fnc.png", points: 420 },
    // ...top 10 teams
  ],
  recentMatches: [
    {
      team1: { name: "Sentinels", score: 2 },
      team2: { name: "LOUD", score: 1 },
      date: "Mar 20, 2024",
      event: "Masters Madrid",
    },
  ],
};

const GameDetailPage = () => {
  const navigate = useNavigate();
  // Get URL params (e.g., /games/valorant → gameId = "valorant")
  const { gameId } = useParams();
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-4">
              <img
                src={gameData.logo}
                alt={gameData.name}
                className="w-12 h-12"
              />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                {gameData.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Game Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            icon={<Users size={24} />}
            value={gameData.activePlayers}
            label="Active Players"
          />
          <StatCard
            icon={<Flame size={24} />}
            value={gameData.tournaments.ongoing.length}
            label="Live Events"
            highlight={true}
          />
          <StatCard
            icon={<Trophy size={24} />}
            value="12"
            label="Major Tournaments"
          />
          <StatCard
            icon={<Award size={24} />}
            value="2024"
            label="Latest Champion"
          />
        </div>

        {/* Tournament Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-800 pb-2">
            {["ongoing", "upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-t-lg font-medium flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {tab === "ongoing" && <Flame size={16} />}
                {tab === "upcoming" && <Clock size={16} />}
                {tab === "past" && <Trophy size={16} />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tournament Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameData.tournaments[activeTab].map((tournament) => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                type={activeTab}
              />
            ))}
          </div>
        </div>

        {/* Detailed Ongoing Tournament Section */}
        {activeTab === "ongoing" && gameData.tournaments.ongoing.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Flame className="text-orange-500" />
              {gameData.tournaments.ongoing[0].name} - Detailed View
            </h2>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              {/* Tournament Header */}
              <div className="bg-gradient-to-r from-red-900/50 to-orange-900/30 p-6 border-b border-orange-500/20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      {gameData.tournaments.ongoing[0].name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <span className="flex items-center gap-1 text-orange-400">
                        <Calendar size={14} />{" "}
                        {gameData.tournaments.ongoing[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} />{" "}
                        {gameData.tournaments.ongoing[0].prizePool}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />{" "}
                        {gameData.tournaments.ongoing[0].location}
                      </span>
                    </div>
                  </div>
                  <div className="bg-black/40 px-4 py-2 rounded-lg border border-orange-500/30">
                    <span className="text-orange-400 font-medium">
                      {gameData.tournaments.ongoing[0].status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tournament Content */}
              <div className="p-6">
                {/* Teams Standings */}
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart2 size={18} /> Current Standings
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-gray-400 border-b border-gray-700">
                        <th className="py-3 text-left">#</th>
                        <th className="py-3 text-left">Team</th>
                        <th className="py-3 text-center">W</th>
                        <th className="py-3 text-center">L</th>
                        <th className="py-3 text-center">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gameData.tournaments.ongoing[0].teams.map((team) => (
                        <tr
                          key={team.id}
                          className="border-b border-gray-700 hover:bg-gray-700/50"
                        >
                          <td className="py-3">{team.id}</td>
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={team.logo}
                                alt={team.name}
                                className="w-6 h-6"
                              />
                              <span>{team.name}</span>
                            </div>
                          </td>
                          <td className="py-3 text-center">{team.wins}</td>
                          <td className="py-3 text-center">{team.losses}</td>
                          <td className="py-3 text-center font-medium text-orange-400">
                            {team.wins * 3 - team.losses}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tournament Format */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">Format</h4>
                  <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                    <p>{gameData.tournaments.ongoing[0].format}</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {gameData.tournaments.ongoing[0].stages.map(
                        (stage, i) => (
                          <li key={i}>{stage}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Prize Distribution */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">
                    Prize Distribution
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        place: "1st",
                        prize: "$400,000",
                        color: "from-yellow-400 to-yellow-600",
                      },
                      {
                        place: "2nd",
                        prize: "$200,000",
                        color: "from-gray-300 to-gray-500",
                      },
                      {
                        place: "3rd",
                        prize: "$100,000",
                        color: "from-amber-600 to-amber-800",
                      },
                    ].map((item) => (
                      <div
                        key={item.place}
                        className={`bg-gradient-to-r ${item.color} p-4 rounded-lg`}
                      >
                        <div className="font-bold text-lg">{item.place}</div>
                        <div className="text-sm">{item.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Top Teams Ranking */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Top {gameData.name} Teams</h2>
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Team</th>
                  <th className="py-4 px-6 text-center">Points</th>
                  <th className="py-4 px-6 text-center">Recent</th>
                </tr>
              </thead>
              <tbody>
                {gameData.topTeams.map((team) => (
                  <tr
                    key={team.rank}
                    className="border-b border-gray-700 hover:bg-gray-700/50"
                  >
                    <td className="py-4 px-6 font-bold">{team.rank}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={team.logo}
                          alt={team.name}
                          className="w-8 h-8"
                        />
                        <span>{team.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-orange-400 font-medium">
                      {team.points}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <span className="bg-green-600/30 text-green-400 px-2 py-1 rounded text-xs">
                          W3-L1
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

// Component: Stat Card
const StatCard = ({ icon, value, label, highlight = false }) => (
  <div
    className={`p-4 rounded-xl border ${
      highlight
        ? "border-orange-500 bg-gradient-to-br from-orange-900/30 to-transparent"
        : "border-gray-700 bg-gray-800"
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`p-2 rounded-lg ${
          highlight
            ? "bg-orange-500/20 text-orange-400"
            : "bg-gray-700 text-gray-400"
        }`}
      >
        {icon}
      </div>
      <div>
        <div
          className={`text-xl font-bold ${
            highlight ? "text-orange-400" : "text-white"
          }`}
        >
          {value}
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  </div>
);

// Component: Tournament Card
const TournamentCard = ({ tournament, type }) => (
  <Link to={`/tournament/${tournament.id}`}>
    <div
      className={`bg-gray-800 rounded-xl border ${
        type === "ongoing"
          ? "border-orange-500 hover:shadow-orange-500/20"
          : type === "upcoming"
          ? "border-blue-500 hover:shadow-blue-500/20"
          : "border-gray-700 hover:shadow-gray-500/20"
      } hover:shadow-lg transition-all cursor-pointer`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg">{tournament.name}</h3>
          {type === "ongoing" && (
            <span className="bg-red-600 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
              <Flame size={12} /> LIVE
            </span>
          )}
        </div>

        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={14} />
            <span>{tournament.prizePool}</span>
          </div>
          {tournament.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{tournament.location}</span>
            </div>
          )}
          {tournament.winner && (
            <div className="flex items-center gap-2">
              <Award size={14} />
              <span className="text-yellow-400">
                Winner: {tournament.winner}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default GameDetailPage;
