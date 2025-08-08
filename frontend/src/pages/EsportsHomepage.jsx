import React, { useState } from "react";
import {
  Search,
  Flame,
  Eye,
  Swords,
  Calendar,
  Trophy,
  Users,
  TrendingUp,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const EsportsHomepage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredGame, setHoveredGame] = useState(null);
  const navigate = useNavigate();

  // Filters
  const filters = [
    { id: "all", name: "All Games" },
    { id: "trending", name: "Trending", icon: <Flame size={16} /> },
    { id: "fps", name: "FPS" },
    { id: "moba", name: "MOBA" },
    { id: "battle-royale", name: "Battle Royale" },
  ];

  // Games data
  const games = [
    {
      id: 1,
      name: "Valorant",
      logo: "/valorant-logo.png",
      viewers: "1.2M",
      tournaments: 8,
      live: true,
      genre: "fps",
      color: "from-red-600 to-orange-500",
      path: "/valorant",
    },
    {
      id: 2,
      name: "League of Legends",
      logo: "/lol-logo.png",
      viewers: "950K",
      tournaments: 12,
      live: true,
      genre: "moba",
      color: "from-blue-600 to-cyan-500",
      path: "/lol",
    },
    {
      id: 3,
      name: "Counter-Strike 2",
      logo: "/cs2-logo.png",
      viewers: "800K",
      tournaments: 5,
      live: false,
      genre: "fps",
      color: "from-yellow-600 to-amber-500",
      path: "/cs2",
    },
    {
      id: 4,
      name: "Dota 2",
      logo: "/dota2-logo.png",
      viewers: "750K",
      tournaments: 7,
      live: true,
      genre: "moba",
      color: "from-purple-600 to-indigo-500",
      path: "/dota2",
    },
    {
      id: 5,
      name: "Apex Legends",
      logo: "/apex-logo.png",
      viewers: "600K",
      tournaments: 4,
      live: false,
      genre: "battle-royale",
      color: "from-rose-600 to-pink-500",
      path: "/apex",
    },
    {
      id: 6,
      name: "Fortnite",
      logo: "/fortnite-logo.png",
      viewers: "1.5M",
      tournaments: 9,
      live: true,
      genre: "battle-royale",
      color: "from-teal-600 to-green-500",
      path: "/fortnite",
    },
  ];

  // Filter games
  const filteredGames = games.filter((game) => {
    const matchesFilter =
      activeFilter === "all" ||
      game.genre === activeFilter ||
      (activeFilter === "trending" && game.viewers.includes("M"));
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                ESPORTS HUB
              </h1>
              <p className="text-xl text-gray-400">
                Track tournaments, teams, and stats across all major games
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center p-4 bg-black/30 rounded-xl">
                <div className="text-3xl font-bold text-white flex items-center gap-1">
                  <Flame className="text-orange-500" /> 12
                </div>
                <p className="text-orange-300">Live Events</p>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-xl">
                <div className="text-3xl font-bold text-white">5.2M+</div>
                <p className="text-orange-300">Viewers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10">
          {/* Search Bar */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Game Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.icon && React.cloneElement(filter.icon, { size: 16 })}
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className={`relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl ${
                  hoveredGame === game.id
                    ? "border-orange-500 scale-[1.02]"
                    : ""
                }`}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${game.color}`}
                ></div>

                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-xl mr-4 flex items-center justify-center">
                      <img
                        src={game.logo}
                        alt={game.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {game.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {game.live && (
                          <span className="flex items-center gap-1 text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                            <Flame size={12} /> LIVE
                          </span>
                        )}
                        <span className="text-sm text-gray-400">
                          {game.genre.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-2 text-orange-400">
                      <Eye size={16} />
                      <span>{game.viewers}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Swords size={16} />
                      <span>{game.tournaments} tournaments</span>
                    </div>
                  </div>

                  <Link to={`/esports${game.path}`}>
                    <button className="w-full py-2.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                      {game.live ? "Watch Now" : "View Details"}
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>

                {/* Hover effect */}
                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
              <Search className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Games Found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Featured Tournament */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="text-orange-400" />
                <span className="text-orange-400 font-medium">
                  FEATURED TOURNAMENT
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Valorant Champions 2024
              </h3>
              <p className="text-gray-300 mb-4">
                $2,500,000 prize pool • 16 teams • Seoul, South Korea
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-orange-400">
                  <Calendar size={16} /> July 15-30, 2024
                </span>
                <span className="flex items-center gap-2 text-white">
                  <TrendingUp size={16} /> 1.8M peak viewers
                </span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all flex items-center gap-2">
              Follow Tournament <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to organize your own tournament?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get access to our tournament management tools and reach millions of
            esports fans
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all">
              <HelpCircle className="w-5 h-5" />
              Contact Our Team
            </button>
            <button className="px-8 py-3.5 border border-orange-500 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-colors">
              View All Tournaments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsportsHomepage;
