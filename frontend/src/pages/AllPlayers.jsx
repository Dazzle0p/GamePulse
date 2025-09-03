import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  X,
  Users,
  Swords,
  Crown,
  Star,
  MapPin,
  Heart,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

// All Players Page Component
const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    game: "all",
    tier: "all",
    team: "all",
    status: "all",
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/players`);
        if (!response.ok) throw new Error("Failed to fetch players");
        const data = await response.json();
        setPlayers(data);
        setFilteredPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
    let results = players;

    // Apply search filter

    if (searchTerm) {
      results = results.filter(
        (player) =>
          player.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.realName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.ign?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (player.team &&
            player.team.name
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())) ||
          player.game?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    if (filters.game !== "all") {
      results = results.filter((player) => player.game === filters.game);
    }

    if (filters.tier !== "all") {
      results = results.filter((player) => player.tier === filters.tier);
    }

    if (filters.team !== "all") {
      results = results.filter(
        (player) => player.team && player.team.name === filters.team
      );
    }

    if (filters.status !== "all") {
      results = results.filter((player) => player.status === filters.status);
    }

    setFilteredPlayers(results);
  }, [searchTerm, filters, players]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      game: "all",
      tier: "all",
      team: "all",
      status: "all",
    });
    setSearchTerm("");
  };

  // Get unique values for filter options
  const games = [...new Set(players.map((p) => p.game).filter(Boolean))];
  const tiers = [...new Set(players.map((p) => p.tier).filter(Boolean))];
  const teams = [
    ...new Set(
      players
        .map((p) => (typeof p.team === "object" ? p.team.name : p.team))
        .filter(Boolean)
    ),
  ];
  const statuses = [...new Set(players.map((p) => p.status).filter(Boolean))];

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Esports Players</h1>
            <p className="text-gray-400">
              Discover top gaming talent from around the world
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-orange-400 font-semibold">
              {filteredPlayers.length}{" "}
              {filteredPlayers.length === 1 ? "Player" : "Players"}
            </span>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search players by name, team, or game..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Filter size={20} />
              Filters
              {(filters.game !== "all" ||
                filters.tier !== "all" ||
                filters.team !== "all" ||
                filters.status !== "all") && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </button>

            {(searchTerm ||
              filters.game !== "all" ||
              filters.tier !== "all" ||
              filters.team !== "all" ||
              filters.status !== "all") && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-3 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
                Clear
              </button>
            )}
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-700">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Game
                    </label>
                    <select
                      value={filters.game}
                      onChange={(e) =>
                        handleFilterChange("game", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="all">All Games</option>
                      {games.map((game) => (
                        <option key={game} value={game}>
                          {game}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Tier
                    </label>
                    <select
                      value={filters.tier}
                      onChange={(e) =>
                        handleFilterChange("tier", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="all">All Tiers</option>
                      {tiers.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Team
                    </label>
                    <select
                      value={filters.team}
                      onChange={(e) =>
                        handleFilterChange("team", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="all">All Teams</option>
                      {teams.map((team) => (
                        <option key={team} value={team}>
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Status
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="all">All Status</option>
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Players Grid */}
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-16">
            <Users size={48} className="mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">No players found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredPlayers.map((player, index) => (
                <PlayerCard key={player._id} player={player} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Player Card Component
// Player Card Component
const PlayerCard = ({ player, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 inset-0 w-full bg-cover  transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: player.image
            ? `url(${player.image})`
            : "linear-gradient(to right, #1a202c, #2d3748)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Top Section: Accent and Menu */}
      <div className="absolute top-0 right-0 p-4 flex items-center">
        <div className="w-12 h-1 bg-orange-500 transform -rotate-45 translate-x-4 -translate-y-4"></div>
        {player.tier === "S-Tier" && (
          <div className="text-yellow-400 z-10">
            <Crown size={20} />
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h2 className="text-2xl font-bold">{player.playerName}</h2>
        <p className="text-sm font-light opacity-80">{player.realName}</p>

        <div className="flex items-center gap-2 mt-2">
          {player.team && player.team.name && (
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
              {player.team.name}
            </span>
          )}
          {player.game && (
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
              {player.game}
            </span>
          )}
        </div>

        {/* Details Section */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex justify-between items-center mb-3">
            {player.tier && (
              <span
                className={`text-xs px-2 py-1 rounded-full font-bold ${
                  player.tier === "S-Tier"
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {player.tier}
              </span>
            )}
            {player.earnings && (
              <span className="text-xs font-bold">{player.earnings}</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <Link
              to={`/players/profile/${player._id}`}
              className="px-4 py-2 text-xs font-bold bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              View Profile
            </Link>
            <div className="flex items-center gap-1 text-xs">
              <Heart size={12} />
              <span>{player.likeCount || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400">Loading players...</p>
    </div>
  </div>
);

// Error Page Component
const ErrorPage = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-gray-400 mb-6">{error}</p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default AllPlayers;
