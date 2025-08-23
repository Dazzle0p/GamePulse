import React, { useState } from "react";
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
} from "lucide-react";

// Talent Card Component
const TalentCard = ({ talent, isHovered, onHover, type }) => {
  const navigate = useNavigate();

  const getTierBadge = (tier) => {
    const styles = {
      "S-Tier": "bg-gradient-to-r from-yellow-600 to-amber-500",
      Elite: "bg-gradient-to-r from-blue-600 to-indigo-500",
      "A-Tier": "bg-gradient-to-r from-purple-600 to-indigo-500",
      "B-Tier": "bg-gradient-to-r from-green-600 to-emerald-500",
    };
    return styles[tier] || "bg-gray-600";
  };

  const getTypeSpecificContent = () => {
    switch (type) {
      case "creator":
        return (
          <>
            <div className="flex items-center gap-2 mb-2">
              {talent.platform === "YouTube" ? (
                <Youtube className="w-5 h-5 text-red-500" />
              ) : (
                <Twitch className="w-5 h-5 text-purple-500" />
              )}
              <span className="font-medium">{talent.platform}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <StatBox label="Subscribers" value={talent.subscribers} />
              <StatBox label="Avg Views" value={talent.averageViews} />
            </div>
          </>
        );
      case "caster":
        return (
          <>
            <div className="mb-2">
              <p className="text-sm text-gray-400">Specialty</p>
              <p className="font-medium">{talent.specialty}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <StatBox label="Experience" value={talent.experience} />
              <StatBox
                label="Major Events"
                value={talent.events.split(", ").length}
              />
            </div>
          </>
        );
      case "player":
        return (
          <>
            <div className="mb-2">
              <p className="text-sm text-gray-400">Team</p>
              <p className="font-medium">{talent.team}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <StatBox label="Game" value={talent.game} />
              <StatBox label="Earnings" value={talent.earnings} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 ${
        isHovered ? "scale-[1.02]" : ""
      }`}
      onMouseEnter={() => onHover(talent.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Header with Tier Badge */}
      <div className="relative h-40 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <div
          className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full ${getTierBadge(
            talent.tier
          )} z-20`}
        >
          {talent.tier}
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-xl font-bold">{talent.name}</h3>
          <p className="text-orange-400 text-sm">
            {talent.realName || talent.game}
          </p>
        </div>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000')] bg-cover bg-center"></div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {getTypeSpecificContent()}

        {/* Region */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Region: {talent.region}</span>
        </div>

        {/* View Button */}
        <button
          onClick={() => navigate(`/${type}s/${talent.id}`)}
          className="w-full py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg text-sm flex items-center justify-center gap-1 transition-all hover:gap-2"
        >
          View Profile <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
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

export default TalentCard;
