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
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

// Theme color mapping with shades for dark/light modes
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
    roster: [
      { name: "MortaL", role: "Owner/Player", game: "BGMI" },
      { name: "Regaltos", role: "Player", game: "BGMI" },
      { name: "Akshat", role: "Player", game: "BGMI" },
      { name: "Rony", role: "Player", game: "Valorant" },
      { name: "Sid", role: "Player", game: "Valorant" },
    ],
    achievementsList: [
      { title: "BMPS Season 1 Champions", date: "2022", game: "BGMI" },
      { title: "Skyesports Championship Winners", date: "2021", game: "BGMI" },
      {
        title: "Valorant Conquerors Championship",
        date: "2023",
        game: "Valorant",
      },
    ],
    upcomingEvents: [
      { title: "BGMI Masters Series", date: "Oct 15, 2023" },
      { title: "Valorant India Invitational", date: "Nov 5, 2023" },
    ],
    social: {
      twitter: "https://twitter.com/teamsoulofficial",
      instagram: "https://instagram.com/teamsoulofficial",
      youtube: "https://youtube.com/teamsoul",
      website: "https://teamsoul.gg",
    },
  },
  {
    id: "godlike",
    name: "GodLike Esports",
    logo: "⚡",
    tagline: "Born to Dominate",
    foundingYear: 2020,
    headquarters: "Delhi, India",
    games: ["BGMI", "Free Fire", "Call of Duty"],
    achievements: 12,
    members: 38,
    themeColor: "yellow",
    description:
      "GodLike Esports is a powerhouse in the Indian esports scene, known for its aggressive playstyle and championship-winning teams across multiple games.",
    roster: [
      { name: "Jonathan", role: "Player", game: "BGMI" },
      { name: "Zgod", role: "Player", game: "BGMI" },
      { name: "Neyoo", role: "Player", game: "Call of Duty" },
    ],
    achievementsList: [
      {
        title: "Free Fire India Championship",
        date: "2022",
        game: "Free Fire",
      },
      {
        title: "CODM World Championship Qualifiers",
        date: "2023",
        game: "Call of Duty",
      },
    ],
    upcomingEvents: [{ title: "Free Fire All-Stars", date: "Oct 20, 2023" }],
    social: {
      twitter: "https://twitter.com/godlike_esports",
      instagram: "https://instagram.com/godlike_esports",
      youtube: "https://youtube.com/godlikeesports",
      website: "https://godlikeesports.in",
    },
  },
  {
    id: "velocity",
    name: "Velocity Gaming",
    logo: "🚀",
    tagline: "Accelerating Esports Excellence",
    foundingYear: 2018,
    headquarters: "Bangalore, India",
    games: ["Valorant", "CS2", "BGMI"],
    achievements: 20,
    members: 52,
    themeColor: "blue",
    description:
      "Velocity Gaming is a premier esports organization with a focus on PC gaming. Known for their strategic gameplay and consistent performances in Valorant tournaments.",
    roster: [
      { name: "Antidote", role: "Player", game: "Valorant" },
      { name: "DeXteR", role: "Player", game: "Valorant" },
      { name: "Karam", role: "Player", game: "CS2" },
    ],
    achievementsList: [
      {
        title: "Valorant Conquerors Championship",
        date: "2022",
        game: "Valorant",
      },
      { title: "ESL India Championship", date: "2021", game: "CS2" },
    ],
    upcomingEvents: [
      { title: "Valorant Challengers South Asia", date: "Oct 25, 2023" },
      { title: "CS2 India Open", date: "Nov 10, 2023" },
    ],
    social: {
      twitter: "https://twitter.com/velocitygg",
      instagram: "https://instagram.com/velocitygg",
      youtube: "https://youtube.com/velocitygg",
      website: "https://velocitygg.gg",
    },
  },
];

const OrganizationDetails = () => {
  const { id } = useParams();
  const org = organizations.find((org) => org.id === id);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("dark"); // 'dark' or 'light'

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
  const bgClass = themeMode === "dark" ? "bg-gray-900" : "bg-gray-50";
  const textClass = themeMode === "dark" ? "text-white" : "text-gray-900";
  const cardClass = themeMode === "dark" ? "bg-gray-800" : "bg-white";

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}
    >
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
          className={`p-2 rounded-full ${theme.primary} text-white shadow-lg`}
        >
          {themeMode === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

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
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "overview"
                  ? "bg-black/20 text-white"
                  : "text-gray-200"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("roster")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "roster"
                  ? "bg-black/20 text-white"
                  : "text-gray-200"
              }`}
            >
              Roster
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "achievements"
                  ? "bg-black/20 text-white"
                  : "text-gray-200"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "events"
                  ? "bg-black/20 text-white"
                  : "text-gray-200"
              }`}
            >
              Events
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div
        className={`pt-16 md:pt-0 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative">
          <Link
            to="/organizations"
            className="hidden md:flex items-center text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to Organizations</span>
          </Link>

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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-gray-800 border-b border-gray-700 md:border-none">
        <div className="max-w-7xl mx-auto hidden md:flex justify-center">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-4 font-medium ${
              activeTab === "overview"
                ? `${theme.primary} text-white`
                : "text-gray-400 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("roster")}
            className={`px-6 py-4 font-medium ${
              activeTab === "roster"
                ? `${theme.primary} text-white`
                : "text-gray-400 hover:text-white"
            }`}
          >
            Roster
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-6 py-4 font-medium ${
              activeTab === "achievements"
                ? `${theme.primary} text-white`
                : "text-gray-400 hover:text-white"
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-4 font-medium ${
              activeTab === "events"
                ? `${theme.primary} text-white`
                : "text-gray-400 hover:text-white"
            }`}
          >
            Events
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${cardClass} shadow-lg`}>
              <h2 className="text-2xl font-bold mb-4">About {org.name}</h2>
              <p className="mb-6 leading-relaxed">{org.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div
                  className={`p-4 rounded-lg ${theme.light} ${
                    themeMode === "dark" ? "bg-opacity-20" : "bg-opacity-50"
                  }`}
                >
                  <div className="flex items-center">
                    <Trophy className={`w-8 h-8 ${theme.text} mr-3`} />
                    <div>
                      <p className="text-2xl font-bold">{org.achievements}</p>
                      <p className="text-sm">Achievements</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${theme.light} ${
                    themeMode === "dark" ? "bg-opacity-20" : "bg-opacity-50"
                  }`}
                >
                  <div className="flex items-center">
                    <Users className={`w-8 h-8 ${theme.text} mr-3`} />
                    <div>
                      <p className="text-2xl font-bold">{org.members}</p>
                      <p className="text-sm">Members</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${theme.light} ${
                    themeMode === "dark" ? "bg-opacity-20" : "bg-opacity-50"
                  }`}
                >
                  <div className="flex items-center">
                    <Calendar className={`w-8 h-8 ${theme.text} mr-3`} />
                    <div>
                      <p className="text-2xl font-bold">{org.foundingYear}</p>
                      <p className="text-sm">Established</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${cardClass} shadow-lg`}>
              <h2 className="text-2xl font-bold mb-4">Competitive Games</h2>
              <div className="flex flex-wrap gap-3">
                {org.games.map((game) => (
                  <span
                    key={game}
                    className={`px-4 py-2 rounded-full ${theme.light} ${
                      theme.text
                    } font-medium ${
                      themeMode === "dark" ? "bg-opacity-20" : "bg-opacity-50"
                    }`}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roster Tab */}
        {activeTab === "roster" && (
          <div className={`p-6 rounded-xl ${cardClass} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-6">Team Roster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {org.roster.map((member, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${theme.border} ${
                    themeMode === "dark"
                      ? "border-opacity-30"
                      : "border-opacity-50"
                  } hover:${theme.border} hover:${
                    themeMode === "dark"
                      ? "border-opacity-70"
                      : "border-opacity-100"
                  } transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <div className="flex items-center mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            theme.light
                          } ${theme.text} ${
                            themeMode === "dark"
                              ? "bg-opacity-20"
                              : "bg-opacity-50"
                          }`}
                        >
                          {member.game}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className={`p-6 rounded-xl ${cardClass} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-6">Achievements & Trophies</h2>
            <div className="space-y-4">
              {org.achievementsList.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${theme.border} ${
                    themeMode === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{achievement.title}</h3>
                      <div className="flex items-center mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded mr-2 ${
                            theme.light
                          } ${theme.text} ${
                            themeMode === "dark"
                              ? "bg-opacity-20"
                              : "bg-opacity-50"
                          }`}
                        >
                          {achievement.game}
                        </span>
                        <span className="text-sm text-gray-500">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded ${theme.light} ${
                        themeMode === "dark" ? "bg-opacity-20" : "bg-opacity-30"
                      }`}
                    >
                      <Trophy className={`w-5 h-5 ${theme.text}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className={`p-6 rounded-xl ${cardClass} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {org.upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    themeMode === "dark" ? "bg-gray-800" : "bg-gray-50"
                  } border ${theme.border} ${
                    themeMode === "dark"
                      ? "border-opacity-30"
                      : "border-opacity-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{event.title}</h3>
                      <div className="flex items-center mt-1 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
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
              className={`px-6 py-3 rounded-lg bg-white text-${org.themeColor}-600 font-medium hover:bg-gray-100 transition`}
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
