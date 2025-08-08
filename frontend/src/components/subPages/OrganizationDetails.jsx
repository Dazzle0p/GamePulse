import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Trophy,
  Users,
  Calendar,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  Star,
  Briefcase,
  Mic,
  Award,
  BarChart2,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";

// Theme color mapping
const colorMap = {
  green: {
    primary: "bg-green-600",
    dark: "bg-green-800",
    light: "bg-green-200",
    text: "text-green-600",
    border: "border-green-600",
    gradient: "from-green-600 to-green-800",
  },
  yellow: {
    primary: "bg-yellow-500",
    dark: "bg-yellow-700",
    light: "bg-yellow-200",
    text: "text-yellow-500",
    border: "border-yellow-500",
    gradient: "from-yellow-500 to-yellow-700",
  },
  blue: {
    primary: "bg-blue-600",
    dark: "bg-blue-800",
    light: "bg-blue-200",
    text: "text-blue-600",
    border: "border-blue-600",
    gradient: "from-blue-600 to-blue-800",
  },
  red: {
    primary: "bg-red-600",
    dark: "bg-red-800",
    light: "bg-red-200",
    text: "text-red-600",
    border: "border-red-600",
    gradient: "from-red-600 to-red-800",
  },
};

// Mock data
const organizations = [
  {
    id: "soul",
    name: "Team SouL",
    logo: "🔥",
    tagline: "The Soul of Indian Gaming",
    foundingYear: 2019,
    headquarters: "Mumbai, India",
    games: ["BGMI", "Valorant", "Free Fire"],
    achievements: 15,
    members: 45,
    themeColor: "green",
    description:
      "Team SouL is one of India's premier esports organizations, known for its dominance in mobile gaming tournaments. Founded by MortaL, the team has consistently ranked among the top competitors in BGMI and Valorant circuits.",

    // Memorable achievement
    memorableAchievement: {
      title: "BMPS Season 1 Champions",
      date: "2022",
      description: "Dominating performance with 3 chicken dinners in finals",
      prize: "₹20 Lakhs",
    },

    // Ownership
    ownership: [
      {
        name: "Naman 'MortaL' Mathur",
        role: "Founder & CEO",
        quote: "We don't just play games, we create legacies",
        social: {
          twitter: "#",
          instagram: "#",
          youtube: "#",
        },
      },
      {
        name: "Rishabh 'Regaltos' Kandoi",
        role: "Co-Owner",
        quote: "Passion meets professionalism in our approach",
        social: {
          twitter: "#",
          instagram: "#",
          youtube: "#",
        },
      },
    ],

    // Top creators
    topCreators: [
      {
        name: "Mortal",
        role: "Content Creator",
        followers: "6.2M",
        platform: "YouTube",
        social: {
          youtube: "#",
          instagram: "#",
        },
      },
      {
        name: "Regaltos",
        role: "Streamer",
        followers: "1.8M",
        platform: "YouTube",
        social: {
          youtube: "#",
          instagram: "#",
        },
      },
      {
        name: "SoulGoblin",
        role: "Content Strategist",
        followers: "850K",
        platform: "Instagram",
        social: {
          instagram: "#",
        },
      },
    ],

    // Rosters by game
    rosters: {
      bgmi: [
        { name: "MortaL", role: "IGL", joinDate: "2019" },
        { name: "Regaltos", role: "Assaulter", joinDate: "2020" },
        { name: "Akshat", role: "Support", joinDate: "2021" },
        { name: "Rony", role: "Sniper", joinDate: "2022" },
      ],
      valorant: [
        { name: "Sid", role: "Duelist", joinDate: "2021" },
        { name: "Rony", role: "Controller", joinDate: "2022" },
        { name: "Revo", role: "Initiator", joinDate: "2022" },
        { name: "Raja", role: "Sentinel", joinDate: "2023" },
      ],
    },

    // Achievements
    achievementsList: [
      {
        title: "BMPS Season 1 Champions",
        date: "2022",
        game: "BGMI",
        prize: "₹20 Lakhs",
      },
      {
        title: "Skyesports Championship Winners",
        date: "2021",
        game: "BGMI",
        prize: "₹15 Lakhs",
      },
      {
        title: "Valorant Conquerors Championship",
        date: "2023",
        game: "Valorant",
        prize: "₹12 Lakhs",
      },
      {
        title: "Free Fire India Championship",
        date: "2022",
        game: "Free Fire",
        prize: "₹10 Lakhs",
      },
    ],

    // Upcoming events
    upcomingEvents: [
      {
        title: "BGMI Masters Series",
        date: "Oct 15, 2023",
        prize: "₹50 Lakhs",
      },
      {
        title: "Valorant India Invitational",
        date: "Nov 5, 2023",
        prize: "₹30 Lakhs",
      },
    ],

    // Brand collaborations
    collaborations: [
      {
        brand: "Red Bull",
        type: "Energy Drink",
        duration: "2021-Present",
        description: "Official energy drink partner",
      },
      {
        brand: "Lenovo Legion",
        type: "Gaming Gear",
        duration: "2022-Present",
        description: "Official gaming laptop partner",
      },
      {
        brand: "Boat",
        type: "Audio",
        duration: "2020-2022",
        description: "Exclusive audio equipment partner",
      },
      {
        brand: "AMD",
        type: "Hardware",
        duration: "2022-Present",
        description: "Processor technology partner",
      },
    ],

    social: {
      twitter: "https://twitter.com/teamsoulofficial",
      instagram: "https://instagram.com/teamsoulofficial",
      youtube: "https://youtube.com/teamsoul",
      website: "https://teamsoul.gg",
    },
  },
  // Other organizations would follow the same structure
];

const OrganizationDetails = () => {
  const { id } = useParams();
  const org = organizations.find((org) => org.id === id);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!org) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Organization Not Found</h2>
          <p className="text-gray-400">
            The organization you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const theme = colorMap[org.themeColor] || colorMap.green;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full ${theme.primary} p-4 flex justify-between items-center z-40`}
      >
        <Link to="/organizations" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-white">{org.name}</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-30 ${theme.primary} pt-16`}>
          <div className="p-4 space-y-4">
            {[
              "overview",
              "roster",
              "creators",
              "achievements",
              "events",
              "collaborations",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-3 rounded-lg ${
                  activeTab === tab ? "bg-black/20 text-white" : "text-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div
        className={`pt-16 md:pt-0 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-7xl bg-black/20 p-6 rounded-2xl">
              {org.logo}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {org.name}
              </h1>
              <p className="text-xl opacity-90 mb-4">{org.tagline}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{org.headquarters}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Est. {org.foundingYear}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <a
                  href={org.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 p-2 rounded-full hover:bg-black/30"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={org.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 p-2 rounded-full hover:bg-black/30"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={org.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 p-2 rounded-full hover:bg-black/30"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={org.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 p-2 rounded-full hover:bg-black/30"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <button className="bg-black/20 p-2 rounded-full hover:bg-black/30">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold">
                {org.achievements}
              </div>
              <div className="text-xs text-gray-400">ACHIEVEMENTS</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold">
                {org.members}+
              </div>
              <div className="text-xs text-gray-400">MEMBERS</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold">
                {Object.keys(org.rosters).length}
              </div>
              <div className="text-xs text-gray-400">COMPETITIVE GAMES</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold">
                {org.collaborations.length}
              </div>
              <div className="text-xs text-gray-400">BRAND PARTNERS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex overflow-x-auto hide-scrollbar">
          {[
            "overview",
            "roster",
            "creators",
            "achievements",
            "events",
            "collaborations",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-4 font-medium min-w-max ${
                activeTab === tab
                  ? `${theme.primary} text-white`
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">About {org.name}</h2>
              <p className="mb-6 leading-relaxed text-gray-300">
                {org.description}
              </p>

              <div className="flex items-center text-gray-400 text-sm">
                <Heart className="w-4 h-4 mr-1" />
                <span>1.2K supporters</span>
              </div>
            </div>

            {/* Memorable Achievement */}
            <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold">Memorable Achievement</h2>
              </div>

              <div className="bg-black/30 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-green-400">
                  {org.memorableAchievement.title}
                </h3>
                <div className="flex items-center text-gray-400 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{org.memorableAchievement.date}</span>
                  <span className="mx-2">•</span>
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>{org.memorableAchievement.prize}</span>
                </div>
                <p className="mt-3 text-gray-300">
                  {org.memorableAchievement.description}
                </p>
              </div>
            </div>

            {/* Ownership Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {org.ownership.map((owner, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-xl">
                    <div className="flex items-start">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-lg">{owner.name}</h3>
                        <p className="text-sm text-gray-500">{owner.role}</p>
                        <p className="mt-2 text-gray-400 italic">
                          "{owner.quote}"
                        </p>

                        <div className="flex mt-3 gap-2">
                          <a
                            href={owner.social.twitter}
                            className="text-gray-500 hover:text-blue-400"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                          <a
                            href={owner.social.instagram}
                            className="text-gray-500 hover:text-pink-500"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Games */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Competitive Games</h2>
              <div className="flex flex-wrap gap-3">
                {org.games.map((game) => (
                  <div
                    key={game}
                    className="px-4 py-2 bg-gray-900 rounded-lg font-medium flex items-center"
                  >
                    <span className="mr-2">🎮</span>
                    {game}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roster Tab */}
        {activeTab === "roster" && (
          <div className="space-y-8">
            {/* Rosters by Game */}
            {Object.entries(org.rosters).map(([game, players]) => (
              <div key={game} className="bg-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {game.toUpperCase()} Roster
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {players.map((player, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 p-4 rounded-xl flex items-center"
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-14 h-14" />
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-lg">{player.name}</h3>
                        <div className="flex justify-between mt-1">
                          <span className="text-sm text-gray-500">
                            {player.role}
                          </span>
                          <span className="text-sm text-gray-500">
                            Since {player.joinDate}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:text-white">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Creators Tab */}
        {activeTab === "creators" && (
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Top Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {org.topCreators.map((creator, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4">
                        <h3 className="font-bold text-lg">{creator.name}</h3>
                        <p className="text-sm text-gray-500">{creator.role}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <div className="text-xl font-bold">
                          {creator.followers}
                        </div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div className="text-sm bg-gray-800 px-2 py-1 rounded">
                        {creator.platform}
                      </div>
                    </div>

                    <div className="flex mt-4 gap-3">
                      <a
                        href={creator.social.youtube}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a
                        href={creator.social.instagram}
                        className="text-gray-500 hover:text-pink-500"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Achievements</h2>
                <div className="flex items-center text-yellow-400">
                  <Trophy className="w-5 h-5 mr-1" />
                  <span>{org.achievements} Trophies</span>
                </div>
              </div>

              <div className="space-y-4">
                {org.achievementsList.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 p-4 rounded-xl border-l-4 border-yellow-500"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="text-sm px-2 py-1 bg-gray-800 rounded mr-2">
                            {achievement.game}
                          </span>
                          <span className="text-sm text-gray-500">
                            <Calendar className="inline w-4 h-4 mr-1" />
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                      <div className="bg-yellow-500/10 p-2 rounded">
                        <div className="font-bold text-yellow-400">
                          {achievement.prize}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Tournament Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-400">85%</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <div className="text-3xl font-bold">42</div>
                  <div className="text-sm text-gray-400">
                    Tournaments Played
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-400">15</div>
                  <div className="text-sm text-gray-400">Finals Reached</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <div className="text-3xl font-bold">₹2.1Cr</div>
                  <div className="text-sm text-gray-400">Total Winnings</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {org.upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 p-4 rounded-xl border border-gray-700"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">{event.title}</h3>
                        <div className="flex items-center mt-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                          <span className="mx-2">•</span>
                          <Trophy className="w-4 h-4 mr-2" />
                          <span>{event.prize}</span>
                        </div>
                      </div>
                      <button
                        className={`px-4 py-2 rounded ${theme.primary} text-white flex items-center`}
                      >
                        Register <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Events</h2>
              <div className="space-y-4">
                {org.achievementsList.slice(0, 3).map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 p-4 rounded-xl border border-gray-700"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{event.title}</h3>
                        <div className="flex items-center mt-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold">
                        🏆 Champion
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Collaborations Tab */}
        {activeTab === "collaborations" && (
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Brand Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {org.collaborations.map((collab, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{collab.brand}</h3>
                      <p className="text-sm text-gray-500">{collab.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{collab.description}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    {collab.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Join CTA */}
        <div
          className={`mt-12 p-8 rounded-2xl bg-gradient-to-r ${theme.gradient} text-white text-center`}
        >
          <h2 className="text-2xl font-bold mb-4">Join {org.name}</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Become part of one of India's premier esports organizations. Apply
            now for player, content creator, or management positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`px-6 py-3 rounded-lg bg-black/20 hover:bg-black/30 transition`}
            >
              Apply as Player
            </button>
            <button
              className={`px-6 py-3 rounded-lg bg-white ${theme.text} font-medium hover:bg-gray-100 transition`}
            >
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
