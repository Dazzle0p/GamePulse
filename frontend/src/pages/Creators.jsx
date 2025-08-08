import {
  Trophy,
  Youtube,
  Twitch,
  Instagram,
  Users,
  BarChart2,
  Heart,
  Gamepad,
  ArrowRight,
  Search,
  Filter,
  Star,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Creators = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCreator, setHoveredCreator] = useState(null);
  const navigate = useNavigate();

  const creators = [
    {
      id: 1,
      name: "MortaL",
      realName: "Naman Mathur",
      platform: "YouTube",
      subscribers: "6.2M",
      averageViews: "2.1M",
      engagement: "8.5%",
      games: ["BGMI", "Valorant", "GTA V RP"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
      },
      stats: {
        peakViewers: "285K",
        avgStreamHours: "42h/week",
        brandDeals: "Red Bull, OnePlus",
      },
    },
    {
      id: 2,
      name: "Sc0utOP",
      realName: "Tanmay Singh",
      platform: "YouTube",
      subscribers: "4.8M",
      averageViews: "1.8M",
      engagement: "9.2%",
      games: ["BGMI", "Free Fire"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/sc0ut",
        instagram: "https://instagram.com/sc0ut",
        twitch: null,
      },
      stats: {
        peakViewers: "198K",
        avgStreamHours: "35h/week",
        brandDeals: "Samsung, Intel",
      },
    },
    {
      id: 3,
      name: "CarryMinati",
      realName: "Ajey Nagar",
      platform: "YouTube",
      subscribers: "39M",
      averageViews: "15M",
      engagement: "7.8%",
      games: ["Minecraft", "Among Us", "BGMI"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/carryminati",
        instagram: "https://instagram.com/carryminati",
        twitch: null,
      },
      stats: {
        peakViewers: "520K",
        avgStreamHours: "25h/week",
        brandDeals: "Disney+ Hotstar, boAt",
      },
    },
    {
      id: 4,
      name: "Dynamo Gaming",
      realName: "Aaditya Sawant",
      platform: "YouTube",
      subscribers: "10.1M",
      averageViews: "3.2M",
      engagement: "6.9%",
      games: ["BGMI", "Free Fire", "Call of Duty"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/dynamogaming",
        instagram: "https://instagram.com/dynamogaming",
        twitch: null,
      },
      stats: {
        peakViewers: "310K",
        avgStreamHours: "38h/week",
        brandDeals: "Asus, Nodwin Gaming",
      },
    },
    {
      id: 5,
      name: "Total Gaming",
      realName: "Ajay",
      platform: "YouTube",
      subscribers: "34.5M",
      averageViews: "12M",
      engagement: "6.2%",
      games: ["Free Fire", "GTA V"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/totalgaming",
        instagram: "https://instagram.com/totalgaming",
        twitch: null,
      },
      stats: {
        peakViewers: "450K",
        avgStreamHours: "30h/week",
        brandDeals: "TechBurner, Ludo King",
      },
    },
    {
      id: 6,
      name: "Mythpat",
      realName: "Mithilesh Patankar",
      platform: "YouTube",
      subscribers: "12.7M",
      averageViews: "4.5M",
      engagement: "8.1%",
      games: ["Minecraft", "Among Us", "GTA V"],
      tier: "A-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/mythpat",
        instagram: "https://instagram.com/mythpat",
        twitch: null,
      },
      stats: {
        peakViewers: "220K",
        avgStreamHours: "28h/week",
        brandDeals: "Puma, Gillette",
      },
    },
    {
      id: 7,
      name: "Techno Gamerz",
      realName: "Ujjwal Chaurasia",
      platform: "YouTube",
      subscribers: "29.3M",
      averageViews: "9.8M",
      engagement: "7.5%",
      games: ["GTA V", "Minecraft", "BGMI"],
      tier: "S-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/technogamerz",
        instagram: "https://instagram.com/technogamerz",
        twitch: null,
      },
      stats: {
        peakViewers: "380K",
        avgStreamHours: "32h/week",
        brandDeals: "HP, Intel",
      },
    },
    {
      id: 8,
      name: "Lokesh Gamer",
      realName: "Lokesh Raj",
      platform: "YouTube",
      subscribers: "8.2M",
      averageViews: "2.8M",
      engagement: "7.9%",
      games: ["Free Fire", "BGMI"],
      tier: "A-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/lokeshgamer",
        instagram: "https://instagram.com/lokeshgamer",
        twitch: null,
      },
      stats: {
        peakViewers: "175K",
        avgStreamHours: "40h/week",
        brandDeals: "Fire-Boltt, Rooter",
      },
    },
    {
      id: 9,
      name: "GamerFleet",
      realName: "Ankit Pant",
      platform: "YouTube",
      subscribers: "5.1M",
      averageViews: "1.5M",
      engagement: "8.7%",
      games: ["Minecraft", "GTA V", "Among Us"],
      tier: "B-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/gamerfleet",
        instagram: "https://instagram.com/gamerfleet",
        twitch: null,
      },
      stats: {
        peakViewers: "120K",
        avgStreamHours: "25h/week",
        brandDeals: "Dell, Zebronics",
      },
    },
    {
      id: 10,
      name: "Desi Gamers",
      realName: "Amit Sharma",
      platform: "YouTube",
      subscribers: "7.8M",
      averageViews: "2.3M",
      engagement: "7.2%",
      games: ["BGMI", "Call of Duty", "GTA V"],
      tier: "A-Tier",
      region: "India",
      social: {
        youtube: "https://youtube.com/desigamers",
        instagram: "https://instagram.com/desigamers",
        twitch: null,
      },
      stats: {
        peakViewers: "195K",
        avgStreamHours: "35h/week",
        brandDeals: "Nvidia, AMD",
      },
    },
  ];

  const filters = [
    { id: "all", name: "All Creators" },
    { id: "s-tier", name: "S-Tier", icon: <Star className="w-4 h-4" /> },
    { id: "youtube", name: "YouTube", icon: <Youtube className="w-4 h-4" /> },
    { id: "twitch", name: "Twitch", icon: <Twitch className="w-4 h-4" /> },
    { id: "bgmi", name: "BGMI" },
    { id: "valorant", name: "Valorant" },
  ];

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.realName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "all" ||
      creator.tier.toLowerCase().includes(activeFilter) ||
      creator.platform.toLowerCase().includes(activeFilter) ||
      creator.games.some((game) => game.toLowerCase().includes(activeFilter));
    return matchesSearch && matchesFilter;
  });

  const getTierBadge = (tier) => {
    const styles = {
      "S-Tier": "bg-gradient-to-r from-yellow-600 to-amber-500",
      "A-Tier": "bg-gradient-to-r from-purple-600 to-indigo-500",
      "B-Tier": "bg-gradient-to-r from-green-600 to-emerald-500",
    };
    return styles[tier] || "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-900/50 to-black border-b border-orange-500/20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Gaming
            </span>{" "}
            Influencers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with India's elite gaming content creators for
            collaborations and sponsorships
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-1/2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl flex items-center gap-1 text-sm ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.icon &&
                  React.cloneElement(filter.icon, { className: "w-4 h-4" })}
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className={`bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 ${
                hoveredCreator === creator.id ? "scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredCreator(creator.id)}
              onMouseLeave={() => setHoveredCreator(null)}
            >
              {/* Header with Tier Badge */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${getTierBadge(
                    creator.tier
                  )} z-20`}
                >
                  {creator.tier}
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h2 className="text-2xl font-bold">{creator.name}</h2>
                  <p className="text-orange-400">{creator.realName}</p>
                </div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000')] bg-cover bg-center"></div>
              </div>

              {/* Stats Section */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {creator.platform === "YouTube" ? (
                    <Youtube className="w-6 h-6 text-red-500" />
                  ) : (
                    <Twitch className="w-6 h-6 text-purple-500" />
                  )}
                  <span className="font-medium">{creator.platform}</span>
                  <span className="ml-auto text-orange-400">
                    {creator.region}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <StatBox label="Subscribers" value={creator.subscribers} />
                  <StatBox label="Avg Views" value={creator.averageViews} />
                  <StatBox label="Engagement" value={creator.engagement} />
                </div>

                {/* Games */}
                <div className="mb-4">
                  <h4 className="text-sm text-gray-400 mb-2">Popular Games</h4>
                  <div className="flex flex-wrap gap-2">
                    {creator.games.map((game, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={creator.social.youtube}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a
                      href={creator.social.instagram}
                      className="text-gray-400 hover:text-pink-500"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={creator.social.twitch}
                      className="text-gray-400 hover:text-purple-500"
                    >
                      <Twitch className="w-5 h-5" />
                    </a>
                  </div>
                  <button
                    onClick={() => navigate(`/creators/${creator.id}`)}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg text-sm flex items-center gap-1"
                  >
                    View <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCreators.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
              <Search className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No Creators Found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-y border-orange-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            value="500+"
            label="Creators in Network"
            color="text-orange-400"
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            value="250M+"
            label="Combined Subscribers"
            color="text-red-400"
          />
          <StatCard
            icon={<BarChart2 className="w-8 h-8" />}
            value="7.5%"
            label="Avg Engagement Rate"
            color="text-yellow-400"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Connect with top gaming influencers to elevate your brand
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const StatBox = ({ label, value }) => (
  <div className="bg-gray-800 p-2 rounded-lg text-center">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="font-bold">{value}</p>
  </div>
);

const StatCard = ({ icon, value, label, color }) => (
  <div className="bg-black/30 p-6 rounded-xl border border-orange-500/20 text-center">
    <div className={`inline-block p-3 rounded-full mb-4 ${color}`}>{icon}</div>
    <h3 className="text-3xl font-bold mb-2">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default Creators;
