import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Trophy,
  Users,
  Search,
  Plus,
  BarChart2,
  Filter,
  Gamepad,
  Shield,
  Swords,
  Crown,
  Zap,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  LinkedinIcon,
} from "lucide-react";

// Import reusable components
import SectionHeader from "../components/Ui/SectionHeader";
import FilterBar from "../components/Ui/FilterBar";
import Card from "../components/Ui/Card";
import Button from "../components/Ui/Button";
import StatsBanner from "../components/Ui/StatsBanner";
import SocialLinks from "../components/Ui/SocialLinks";
import getGameIcon from "../components/Ui/getGameIcon";
import getTierBadge from "../components/Ui/getTierBadge";

const FeaturedOrg = () => {
  const [selectedGame, setSelectedGame] = useState("All Games");
  const [searchQuery, setSearchQuery] = useState("");

  const organizations = [
    {
      id: "nexus",
      name: "NEXUS GAMING",
      logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200",
      foundingYear: 2018,
      headquarters: "Los Angeles, CA",
      games: ["Valorant", "Counter-Strike 2", "League of Legends", "BGMI"],
      achievements: 55,
      members: 15,
      tier: "Tier 1",
      themeColor: "#00D9FF",
      social: {
        twitter: "https://twitter.com/nexusgaming",
        instagram: "https://instagram.com/nexusgaming",
        youtube: "https://youtube.com/nexusgaming",
        twitch: "https://twitch.tv/nexusgaming",
        discord: "https://discord.gg/nexusgaming",
      },
      teams: [
        {
          name: "NEXUS Valorant",
          game: "Valorant",
          achievements: 15,
        },
        {
          name: "NEXUS CS2",
          game: "Counter-Strike 2",
          achievements: 22,
        },
        {
          name: "NEXUS League",
          game: "League of Legends",
          achievements: 18,
        },
      ],
    },
    {
      id: "soul",
      name: "Team SouL",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200",
      foundingYear: 2019,
      headquarters: "Mumbai, India",
      games: ["BGMI", "Valorant", "Free Fire"],
      achievements: 42,
      members: 28,
      tier: "Tier 1",
      themeColor: "#FF6B35",
      social: {
        twitter: "https://twitter.com/TeamSouL",
        instagram: "https://instagram.com/TeamSouL",
        youtube: "https://youtube.com/TeamSouL",
        facebook: "https://facebook.com/TeamSouL",
      },
    },
    {
      id: "godlike",
      name: "GodLike Esports",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200",
      foundingYear: 2020,
      headquarters: "Delhi, India",
      games: ["BGMI", "Free Fire", "Call of Duty"],
      achievements: 38,
      members: 32,
      tier: "Tier 1",
      themeColor: "#FFD700",
      social: {
        twitter: "https://twitter.com/GodLikeEsports",
        instagram: "https://instagram.com/GodLikeEsports",
        youtube: "https://youtube.com/GodLikeEsports",
        discord: "https://discord.gg/GodLikeEsports",
      },
    },
  ];

  const gameFilters = [
    { value: "All Games", label: "All Games", icon: Gamepad },
    { value: "Valorant", label: "Valorant", icon: Shield },
    { value: "Counter-Strike 2", label: "CS2", icon: Swords },
    { value: "League of Legends", label: "LoL", icon: Crown },
    { value: "BGMI", label: "BGMI", icon: Gamepad },
    { value: "Free Fire", label: "Free Fire", icon: Zap },
  ];

  const filteredOrgs = organizations.filter((org) => {
    const matchesGame =
      selectedGame === "All Games" || org.games.includes(selectedGame);
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.headquarters.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGame && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gpblack">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gpred-900 to-gpblack border-b border-gporange-300/20">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gporange-500/20 backdrop-blur-sm border border-gporange-300/30">
            <Trophy className="w-5 h-5 mr-2 text-gporange-300" />
            <span className="text-sm font-medium">PREMIER ESPORTS ORGS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gpred-500 to-gporange-500">
              Esports
            </span>{" "}
            Organizations
          </h1>
          <p className="text-xl text-gpgray max-w-2xl mx-auto">
            Discover leading esports organizations, their rosters, achievements,
            and latest updates.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            filters={gameFilters}
            activeFilter={selectedGame}
            onFilterChange={setSelectedGame}
            placeholder="Search organizations..."
            onSearch={setSearchQuery}
          />
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOrgs.map((org) => (
              <Card key={org.id} className="group relative overflow-hidden">
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
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-gpred-500 transition-colors">
                        {org.name}
                      </h2>
                      <div className="flex items-center mt-1 space-x-2 text-gpgray">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{org.headquarters}</span>
                      </div>
                      <p className="text-xs text-gporange-300 mt-1">
                        Est. {org.foundingYear}
                      </p>
                    </div>
                  </div>

                  {/* Games */}
                  <div className="mb-4">
                    <p className="text-sm text-gpgray mb-2">
                      Competitive Games
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {org.games.map((game) => (
                        <span
                          key={game}
                          className="px-3 py-1 text-xs rounded-full bg-gporange-500/10 text-gporange-300 border border-gporange-300/20 flex items-center gap-1"
                        >
                          {getGameIcon(game)}
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-yellow-400" />
                        <span className="text-lg font-bold text-white">
                          {org.achievements}
                        </span>
                      </div>
                      <p className="text-xs text-gpgray mt-1">Achievements</p>
                    </div>
                    <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-400" />
                        <span className="text-lg font-bold text-white">
                          {org.members}
                        </span>
                      </div>
                      <p className="text-xs text-gpgray mt-1">Members</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mb-6">
                    <SocialLinks links={org.social} size="small" />
                  </div>

                  <Link to={`/organizations/${org.id}`}>
                    <Button variant="primary" className="w-full">
                      View Organization
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filteredOrgs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gpgray text-lg mb-4">
                No organizations found matching your criteria.
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedGame("All Games");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <StatsBanner
        stats={[
          {
            icon: <BarChart2 className="w-8 h-8" />,
            value: "120+",
            label: "Registered Organizations",
            color: "text-gpred-500",
          },
          {
            icon: <Users className="w-8 h-8" />,
            value: "2,500+",
            label: "Professional Players",
            color: "text-gporange-500",
          },
          {
            icon: <Trophy className="w-8 h-8" />,
            value: "500+",
            label: "Tournaments Hosted",
            color: "text-yellow-500",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <Card className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Register Your Organization
          </h2>
          <p className="text-gpgray mb-8 max-w-2xl mx-auto">
            Join our platform and showcase your organization to the gaming
            community. Get access to exclusive tools, analytics, and partnership
            opportunities.
          </p>
          <Button variant="primary" size="large" icon={Plus}>
            Register Organization
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default FeaturedOrg;
