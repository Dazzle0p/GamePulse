import React, { useState } from "react";
import {
  Gamepad,
  Swords,
  Shield,
  Crown,
  Zap,
  Trophy,
  Users,
  Calendar,
  Search,
} from "lucide-react";

// Player Card Component matching your TalentCard style
const PlayerCard = ({ player }) => {
  const getTierBadge = (tier) => {
    const styles = {
      "S-Tier": "bg-gradient-to-r from-yellow-600 to-amber-500",
      Elite: "bg-gradient-to-r from-blue-600 to-indigo-500",
      "A-Tier": "bg-gradient-to-r from-purple-600 to-indigo-500",
      "B-Tier": "bg-gradient-to-r from-green-600 to-emerald-500",
    };
    return styles[tier] || "bg-gray-600";
  };

  return (
    <div className="bg-gpblack border border-gpgray/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-gpred-500 hover:shadow-lg hover:shadow-gpred-500/20">
      {/* Header with Tier Badge */}
      <div className="relative h-40 bg-gpdark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <div
          className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full ${getTierBadge(
            player.tier
          )} z-20`}
        >
          {player.tier}
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-xl font-bold text-white">{player.name}</h3>
          <p className="text-gpred-500 text-sm">{player.realName}</p>
        </div>
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gpgray">Team</p>
          <p className="font-medium text-white">{player.team}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gpdark p-2 rounded-lg text-center">
            <p className="text-xs text-gpgray">Game</p>
            <p className="font-bold text-sm text-white">{player.game}</p>
          </div>
          <div className="bg-gpdark p-2 rounded-lg text-center">
            <p className="text-xs text-gpgray">Earnings</p>
            <p className="font-bold text-sm text-white">{player.earnings}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gpgray">Region: {player.region}</span>
        </div>

        <button className="w-full py-2 bg-gpdark border border-gpred-500 text-gpred-500 rounded-lg text-sm font-semibold hover:bg-gpred-500/10 transition-colors flex items-center justify-center gap-1">
          View Profile
        </button>
      </div>
    </div>
  );
};

// Enhanced Teams Section with Game Filter
const TeamsSection = () => {
  const [selectedGame, setSelectedGame] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample player data based on your schema
  const players = [
    {
      id: 1,
      name: "Jonathan",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
      realName: "Jonathan Jude",
      game: "BGMI",
      team: "GodLike Esports",
      earnings: "$150K",
      achievements: "PMGC 2021 Finalist",
      mvp: 20,
      tier: "S-Tier",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/jonathan",
      },
    },
    {
      id: 2,
      name: "Sc0utOP",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000",
      realName: "Tanmay Singh",
      game: "BGMI",
      team: "Team XSpark",
      earnings: "$120K",
      achievements: "BGIS 2023 Champion",
      mvp: 18,
      tier: "S-Tier",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/sc0utop",
      },
    },
    {
      id: 3,
      name: "Shadow",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
      realName: "Salman Ahmad",
      game: "Valorant",
      team: "Global Esports",
      earnings: "$80K",
      achievements: "VCT 2023 Participant",
      mvp: 12,
      tier: "A-Tier",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/shad0w",
      },
    },
    {
      id: 4,
      name: "SkRossi",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
      realName: "Ganesh Gangadhar",
      game: "Valorant",
      team: "Global Esports",
      earnings: "$100K",
      achievements: "VCT 2022 MVP",
      mvp: 15,
      tier: "S-Tier",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/skrossi",
      },
    },
    {
      id: 5,
      name: "Mortal",
      image:
        "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1000",
      realName: "Naman Mathur",
      game: "BGMI",
      team: "S8UL Esports",
      earnings: "$200K",
      achievements: "India's top creator",
      mvp: 25,
      tier: "Elite",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/mortal",
      },
    },
    {
      id: 6,
      name: "Goblin",
      image:
        "https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=1000",
      realName: "Chandrashekhar Gupta",
      game: "Valorant",
      team: "Enigma Gaming",
      earnings: "$70K",
      achievements: "VCT Challengers Finalist",
      mvp: 10,
      tier: "A-Tier",
      region: "India",
      type: "player",
      social: {
        instagram: "https://instagram.com/goblin",
      },
    },
  ];

  // Get unique games from players
  const games = ["All", ...new Set(players.map((player) => player.game))];

  // Filter players based on selected game and search query
  const filteredPlayers = players.filter((player) => {
    const matchesGame = selectedGame === "All" || player.game === selectedGame;
    const matchesSearch =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.realName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGame && matchesSearch;
  });

  return (
    <section className="py-20 bg-gpblack">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
            Our Players
          </h2>
          <p className="text-xl text-gpgray">
            Elite competitors across multiple games
          </p>
        </div>

        {/* Game Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {games.map((game) => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedGame === game
                    ? "bg-gpred-500 text-white"
                    : "bg-gpdark border border-gpgray/30 text-gpgray hover:border-gpred-500 hover:text-white"
                }`}
              >
                {game === "BGMI" ? (
                  <>
                    <Gamepad className="w-4 h-4" />
                    BGMI
                  </>
                ) : game === "Valorant" ? (
                  <>
                    <Shield className="w-4 h-4" />
                    Valorant
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    {game}
                  </>
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gpgray w-5 h-5" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gpdark border border-gpgray/30 rounded-full text-white placeholder-gpgray focus:outline-none focus:border-gpred-500"
            />
          </div>
        </div>

        {/* Players Grid */}
        {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gpgray text-lg">
              No players found matching your criteria.
            </p>
          </div>
        )}

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-gpred-900/30 to-gporange-900/30 border-y border-gpred-500/20 py-12 px-4 mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-xl border border-gpred-500/20 text-center">
              <div className="inline-block p-3 rounded-full mb-4 text-gpred-500">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">15+</h3>
              <p className="text-gpgray">Tournament Wins</p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-gpred-500/20 text-center">
              <div className="inline-block p-3 rounded-full mb-4 text-gporange-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">25+</h3>
              <p className="text-gpgray">Professional Players</p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-gpred-500/20 text-center">
              <div className="inline-block p-3 rounded-full mb-4 text-yellow-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">$2M+</h3>
              <p className="text-gpgray">Total Earnings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
