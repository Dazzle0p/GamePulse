import React, { useState } from "react";
import TalentCard from "../components/Ui/TalentCard";
import { useNavigate } from "react-router-dom";
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
  Mic,
  Swords,
  Crown,
  Zap,
  X,
  Menu,
  Twitter,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

// Main Page Component
const GamingTalentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-900/50 to-black border-b border-orange-500/20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Gaming
              </span>{" "}
              Talent Hub
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover India's top gaming creators, casters, and esports
              professionals
            </p>
          </div>
        </div>
      </div>
      <SerchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Top Talent Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <TopCreatorsSection
          searchTerm={searchTerm}
          activeFilter={activeFilter}
          activeCategory={activeCategory}
        />
        <TopCastersSection
          searchTerm={searchTerm}
          activeFilter={activeFilter}
          activeCategory={activeCategory}
        />
        <TopEsportsPlayersSection
          searchTerm={searchTerm}
          activeFilter={activeFilter}
          activeCategory={activeCategory}
        />
      </div>

      {/* Stats Banner */}
      <StatsBanner />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Hero Section Component with Search & Filter
const SerchSection = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  activeCategory,
  setActiveCategory,
}) => {
  const filters = [
    { id: "all", name: "All" },
    { id: "s-tier", name: "S-Tier", icon: <Star className="w-4 h-4" /> },
    { id: "youtube", name: "YouTube", icon: <Youtube className="w-4 h-4" /> },
    { id: "twitch", name: "Twitch", icon: <Twitch className="w-4 h-4" /> },
    { id: "bgmi", name: "BGMI" },
    { id: "valorant", name: "Valorant" },
  ];

  const categories = [
    { id: "all", name: "All Talent", icon: <Users className="w-5 h-5" /> },
    {
      id: "creators",
      name: "Content Creators",
      icon: <Youtube className="w-5 h-5" />,
    },
    { id: "casters", name: "Casters", icon: <Mic className="w-5 h-5" /> },
    {
      id: "players",
      name: "Esports Players",
      icon: <Swords className="w-5 h-5" />,
    },
  ];

  return (
    <div className="mt-10 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative  mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search talents by name, game, or region..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-3 rounded-xl flex items-center gap-2 transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div>
          <div className="flex flex-wrap justify-start sm:justify-end gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-3 rounded-xl flex items-center gap-1  ${
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
      </div>
    </div>
  );
};

// Top Creators Section Component
const TopCreatorsSection = ({ searchTerm, activeFilter, activeCategory }) => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const topCreators = [
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
      type: "creator",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
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
      type: "creator",
      social: {
        youtube: "https://youtube.com/sc0ut",
        instagram: "https://instagram.com/sc0ut",
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
      type: "creator",
      social: {
        youtube: "https://youtube.com/carryminati",
        instagram: "https://instagram.com/carryminati",
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
      type: "creator",
      social: {
        youtube: "https://youtube.com/dynamogaming",
        instagram: "https://instagram.com/dynamogaming",
      },
    },
  ];

  // Filter logic
  const filteredCreators = topCreators.filter((creator) => {
    if (activeCategory !== "all" && activeCategory !== "creators") return false;

    const matchesSearch =
      searchTerm === "" ||
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.realName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.games.some((game) =>
        game.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      creator.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      creator.tier.toLowerCase().includes(activeFilter) ||
      creator.platform.toLowerCase().includes(activeFilter) ||
      creator.games.some((game) => game.toLowerCase().includes(activeFilter));

    return matchesSearch && matchesFilter;
  });

  if (activeCategory !== "all" && activeCategory !== "creators") return null;
  if (filteredCreators.length === 0 && (searchTerm || activeFilter !== "all"))
    return null;

  return (
    <SectionLayout
      title="Top Content Creators"
      icon={<Youtube className="w-6 h-6 text-red-500" />}
      viewMoreLink="/creators"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCreators.map((creator) => (
          <TalentCard
            key={creator.id}
            talent={creator}
            isHovered={hoveredCard === creator.id}
            onHover={setHoveredCard}
            type="creator"
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCreators.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Creators Found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </SectionLayout>
  );
};

// Top Casters Section Component
const TopCastersSection = ({ searchTerm, activeFilter, activeCategory }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const topCasters = [
    {
      id: 1,
      name: "Ocean Sharma",
      realName: "Ocean Sharma",
      specialty: "BGMI & Valorant",
      experience: "5 years",
      events: "PMGC, BGIS, VCC",
      tier: "Elite",
      region: "India",
      type: "caster",
      social: {
        twitter: "https://twitter.com/ocean",
        instagram: "https://instagram.com/ocean",
      },
    },
    {
      id: 2,
      name: "Spartan",
      realName: "Spartan",
      specialty: "BGMI & Free Fire",
      experience: "4 years",
      events: "ESL, LOCO Wars",
      tier: "Elite",
      region: "India",
      type: "caster",
      social: {
        twitter: "https://twitter.com/spartan",
        instagram: "https://instagram.com/spartan",
      },
    },
    {
      id: 3,
      name: "Ace",
      realName: "Ace",
      specialty: "Valorant & CS:GO",
      experience: "6 years",
      events: "VCT, ESL Pro League",
      tier: "Elite",
      region: "India",
      type: "caster",
      social: {
        twitter: "https://twitter.com/ace",
        instagram: "https://instagram.com/ace",
      },
    },
    {
      id: 4,
      name: "Kronten",
      realName: "Kronten",
      specialty: "BGMI & COD",
      experience: "3 years",
      events: "BMPS, COD Mobile Championship",
      tier: "A-Tier",
      region: "India",
      type: "caster",
      social: {
        twitter: "https://twitter.com/kronten",
        instagram: "https://instagram.com/kronten",
      },
    },
  ];

  // Filter logic
  const filteredCasters = topCasters.filter((caster) => {
    if (activeCategory !== "all" && activeCategory !== "casters") return false;

    const matchesSearch =
      searchTerm === "" ||
      caster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caster.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caster.events.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caster.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      caster.tier.toLowerCase().includes(activeFilter) ||
      caster.specialty.toLowerCase().includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  if (activeCategory !== "all" && activeCategory !== "casters") return null;
  if (filteredCasters.length === 0 && (searchTerm || activeFilter !== "all"))
    return null;

  return (
    <SectionLayout
      title="Top Casters"
      icon={<Mic className="w-6 h-6 text-blue-400" />}
      viewMoreLink="/casters"
      className="mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCasters.map((caster) => (
          <TalentCard
            key={caster.id}
            talent={caster}
            isHovered={hoveredCard === caster.id}
            onHover={setHoveredCard}
            type="caster"
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCasters.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Casters Found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </SectionLayout>
  );
};

// Top Esports Players Section Component
const TopEsportsPlayersSection = ({
  searchTerm,
  activeFilter,
  activeCategory,
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const topPlayers = [
    {
      id: 1,
      name: "Jonathan",
      realName: "Jonathan",
      game: "BGMI",
      team: "GodLike Esports",
      earnings: "$150K",
      achievements: "PMGC 2021 Finalist",
      mvp: 20,
      tier: "S-Tier",
      region: "India",
      type: "player",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
      social: {
        instagram: "https://instagram.com/jonathan",
        twitter: "https://twitter.com/jonathan",
      },
    },
    {
      id: 2,
      name: "Goblin",
      realName: "Goblin",
      game: "BGMI",
      team: "Team Soul",
      earnings: "$120K",
      achievements: "BGIS Champion",
      tier: "S-Tier",
      region: "India",
      type: "player",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
      social: {
        instagram: "https://instagram.com/goblin",
        twitter: "https://twitter.com/goblin",
      },
    },
    {
      id: 3,
      name: "Snax",
      realName: "Snax",
      game: "Valorant",
      team: "Global Esports",
      earnings: "$80K",
      achievements: "VCT Challengers",
      tier: "A-Tier",
      region: "India",
      type: "player",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
      social: {
        instagram: "https://instagram.com/snax",
        twitter: "https://twitter.com/snax",
      },
    },
    {
      id: 4,
      name: "Omega",
      realName: "Omega",
      game: "Free Fire",
      team: "TSM India",
      earnings: "$95K",
      achievements: "FFIC 2022 Champion",
      tier: "S-Tier",
      region: "India",
      type: "player",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887",
      social: {
        instagram: "https://instagram.com/omega",
        twitter: "https://twitter.com/omega",
      },
    },
  ];

  // Filter logic
  const filteredPlayers = topPlayers.filter((player) => {
    if (activeCategory !== "all" && activeCategory !== "players") return false;

    const matchesSearch =
      searchTerm === "" ||
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      player.tier.toLowerCase().includes(activeFilter) ||
      player.game.toLowerCase().includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  if (activeCategory !== "all" && activeCategory !== "players") return null;
  if (filteredPlayers.length === 0 && (searchTerm || activeFilter !== "all"))
    return null;

  return (
    <SectionLayout
      title="Top Esports Players"
      icon={<Swords className="w-6 h-6 text-purple-500" />}
      viewMoreLink="/players"
      className="mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isHovered={hoveredCard === player.id}
            onHover={setHoveredCard}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredPlayers.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Players Found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </SectionLayout>
  );
};

// New Player Card Component with the second style
const PlayerCard = ({ player, isHovered, onHover }) => {
  const accentColor = "bg-orange-500"; // Using orange as accent color for all players

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => onHover(player.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* 1. Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${player.image})` }}
      />

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* 3. Top Section: Accent and Menu */}
      <div className="absolute top-0 right-0 p-4 flex items-center">
        <div
          className={`w-12 h-1 ${accentColor} transform -rotate-45 translate-x-4 -translate-y-4`}
        ></div>
        <button className="text-white/80 hover:text-white transition-colors z-10">
          <Menu size={24} />
        </button>
      </div>

      {/* 4. Main Content Area */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h2 className="text-3xl font-bold">{player.name}</h2>
        <p className="text-sm font-light opacity-80">{player.realName}</p>
        <p className="text-xs opacity-70 mt-1">
          {player.team && (
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
              {typeof player.team === "object" ? player.team.name : player.team}
            </span>
          )}{" "}
          • {player.game}
        </p>

        {/* 5. Details Section */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs bg-orange-500 px-2 py-1 rounded-full font-bold">
              {player.tier}
            </span>
            <span className="text-xs font-bold">{player.earnings}</span>
          </div>
          <p className="text-xs opacity-70 mb-3 line-clamp-2">
            {player.achievements}
          </p>
          <div className="flex justify-between items-center">
            <button className="px-4 py-2 text-xs font-bold bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              View Profile
            </button>
            <div className="flex space-x-3">
              {player.social?.twitter && (
                <a
                  href={player.social.twitter}
                  className="opacity-70 hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={16} />
                </a>
              )}
              {player.social?.instagram && (
                <a
                  href={player.social.instagram}
                  className="opacity-70 hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Section Layout Component
const SectionLayout = ({
  title,
  icon,
  viewMoreLink,
  children,
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <section className={className}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-800 rounded-lg">{icon}</div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <button
          onClick={() => navigate(viewMoreLink)}
          className="flex items-center gap-1 text-orange-400 hover:text-orange-300 group"
        >
          View All
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      {children}
    </section>
  );
};

// Stats Banner Component
const StatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-y border-orange-500/20 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard
          icon={<Users className="w-8 h-8" />}
          value="500+"
          label="Talent in Network"
          color="text-orange-400"
        />
        <StatCard
          icon={<TrendingUp className="w-8 h-8" />}
          value="250M+"
          label="Combined Audience"
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
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Connect with top gaming talent to elevate your brand and events
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all group">
          Get Started{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
        </button>
        <button className="px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10 transition-colors">
          View Case Studies
        </button>
      </div>
    </div>
  );
};

// Reusable Components
const StatBox = ({ label, value }) => (
  <div className="bg-gray-800 p-2 rounded-lg text-center">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="font-bold text-sm">{value}</p>
  </div>
);

const StatCard = ({ icon, value, label, color }) => (
  <div className="bg-black/30 p-6 rounded-xl border border-orange-500/20 text-center hover:scale-105 transition-transform duration-300">
    <div className={`inline-block p-3 rounded-full mb-4 ${color}`}>{icon}</div>
    <h3 className="text-3xl font-bold mb-2">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default GamingTalentPage;
