import {
  Calendar,
  Trophy,
  Activity,
  Gamepad2,
  Search,
  Plus,
  BarChart2,
  Filter,
  Heart,
} from "lucide-react";
import { useState } from "react";

const TournamentOrganizers = () => {
  const [organizers, setOrganizers] = useState([
    {
      id: "esl",
      name: "ESL Gaming",
      logo: "🏆",
      tournamentsOrganized: 245,
      ongoingTournaments: 8,
      games: ["CS2", "Dota 2", "Valorant"],
      impressions: 15420,
      tier: "Tier 1",
      isLiked: false,
      social: {
        twitter: "https://twitter.com/ESL",
        website: "https://www.eslgaming.com/",
      },
    },
    {
      id: "pgl",
      name: "PGL Esports",
      logo: "🎯",
      tournamentsOrganized: 112,
      ongoingTournaments: 3,
      games: ["CS2", "PUBG"],
      impressions: 9820,
      tier: "Tier 1",
      isLiked: false,
      social: {
        twitter: "https://twitter.com/pglesports",
        website: "https://pglesports.com/",
      },
    },
    {
      id: "bts",
      name: "Beyond The Summit",
      logo: "🔥",
      tournamentsOrganized: 178,
      ongoingTournaments: 5,
      games: ["Dota 2", "Smash Bros"],
      impressions: 12750,
      tier: "Tier 1",
      isLiked: false,
      social: {
        twitter: "https://twitter.com/BeyondTheSummit",
        website: "https://www.beyondthesummit.tv/",
      },
    },
  ]);

  const handleLike = (id) => {
    setOrganizers(
      organizers.map((org) =>
        org.id === id
          ? {
              ...org,
              isLiked: !org.isLiked,
              impressions: org.isLiked
                ? org.impressions - 1
                : org.impressions + 1,
            }
          : org
      )
    );
  };

  const getTierBadge = (tier) => {
    const tierStyles = {
      "Tier 1": "bg-gradient-to-r from-gpred-500 to-gporange-500",
      "Tier 2": "bg-gradient-to-r from-purple-500 to-blue-500",
      "Tier 3": "bg-gradient-to-r from-green-500 to-emerald-500",
    };
    return tierStyles[tier] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gpblack">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gpred-900 to-gpblack border-b border-gporange-300/20">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gporange-500/20 backdrop-blur-sm border border-gporange-300/30">
            <Trophy className="w-5 h-5 mr-2 text-gporange-300" />
            <span className="text-sm font-medium">
              TOP TOURNAMENT ORGANIZERS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gpred-500 to-gporange-500">
              Tournament
            </span>{" "}
            Organizers
          </h1>
          <p className="text-xl text-gpgray max-w-2xl mx-auto">
            Discover India's leading tournament organizers, their upcoming
            events, and community engagement.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gpgray" />
                <input
                  type="text"
                  placeholder="Search organizers..."
                  className="pl-12 pr-4 py-3 w-full bg-gpdark border border-gporange-300/20 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-gporange-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 bg-gpdark border border-gporange-300/20 rounded-xl cursor-pointer hover:bg-gporange-500/10">
                <Filter className="w-5 h-5 mr-2 text-gporange-300" />
                <span className="text-white">Filters</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["All Games", "CS2", "Dota 2", "Valorant", "PUBG"].map(
                  (game) => (
                    <span
                      key={game}
                      className={`px-3 py-1.5 text-sm rounded-xl cursor-pointer border ${
                        game === "All Games"
                          ? "bg-gradient-to-r from-gpred-500 to-gporange-500 text-white border-transparent"
                          : "bg-gpdark text-gpgray border-gporange-300/20 hover:bg-gporange-500/10 hover:text-white"
                      }`}
                    >
                      {game}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((org) => (
              <div
                key={org.id}
                className="group relative bg-gpdark rounded-2xl border border-gporange-300/10 hover:border-gporange-300/30 transition-all duration-300 overflow-hidden"
              >
                {/* Tier Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${getTierBadge(
                    org.tier
                  )}`}
                >
                  {org.tier}
                </div>

                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-5xl">{org.logo}</div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {org.name}
                      </h2>
                      <div className="flex items-center mt-1 space-x-2 text-gpgray">
                        <Gamepad2 className="h-4 w-4" />
                        <span className="text-sm">{org.games.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-yellow-400" />
                        <span className="text-lg font-bold text-white">
                          {org.tournamentsOrganized}
                        </span>
                      </div>
                      <p className="text-xs text-gpgray mt-1">Tournaments</p>
                    </div>
                    <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-green-400" />
                        <span className="text-lg font-bold text-white">
                          {org.ongoingTournaments}
                        </span>
                      </div>
                      <p className="text-xs text-gpgray mt-1">Ongoing</p>
                    </div>
                  </div>

                  {/* Impression Button */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleLike(org.id)}
                        className={`p-2 rounded-full ${
                          org.isLiked
                            ? "text-red-500 bg-red-500/10"
                            : "text-gpgray hover:text-gporange-300"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            org.isLiked ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <span className="ml-2 text-sm text-white">
                        {org.impressions.toLocaleString()}
                      </span>
                    </div>

                    <div className="text-xs text-gpgray">
                      Community Approval
                    </div>
                  </div>

                  <a
                    href={org.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-gradient-to-r from-gpred-500/50 to-gporange-500/50 border border-gporange-300/20 text-white rounded-xl hover:from-gpred-500 hover:to-gporange-500 transition-all"
                  >
                    View Tournaments
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gpred-900/50 to-gpblack border-t border-b border-gporange-300/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <BarChart2 className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">85+</h3>
              <p className="text-gpgray">Active Organizers</p>
            </div>
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">1,200+</h3>
              <p className="text-gpgray">Tournaments Hosted</p>
            </div>
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">500K+</h3>
              <p className="text-gpgray">Community Impressions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gpdark rounded-2xl border border-gporange-300/10 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Become a Tournament Organizer
          </h2>
          <p className="text-gpgray mb-8 max-w-2xl mx-auto">
            Join our platform to host your tournaments, reach thousands of
            players, and grow your organizer reputation within the gaming
            community.
          </p>
          <button className="px-8 py-3.5 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-xl flex items-center gap-2 mx-auto hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg">
            <Plus className="w-5 h-5" />
            Register as Organizer
          </button>
        </div>
      </section>
    </div>
  );
};

export default TournamentOrganizers;
