import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  BarChart2,
  Heart,
  ArrowLeft,
  Calendar,
  MapPin,
  Swords,
  Crown,
  Star,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  ExternalLink,
  ChevronDown,
  Filter,
  Search,
  X,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

// Player Profile Page Component
const PlayerProfile = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("achievements");

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/players/${id}`);
        console.log(response);
        if (!response.ok) throw new Error("Player not found");
        const data = await response.json();
        setPlayer(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage error={error} />;
  if (!player) return <ErrorPage error="Player not found" />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              player.galleryImages?.length > 0
                ? `url(${player.galleryImages[0]})`
                : "linear-gradient(to right, #1a202c, #2d3748)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-6">
          <Link
            to="/players"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Players
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-6 mt-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-orange-500 overflow-hidden">
                <img
                  src={
                    player.image ||
                    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  }
                  alt={player.playerName}
                  className="w-full h-full object-cover"
                />
              </div>
              {player.tier === "S-Tier" && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-1">
                  <Crown size={20} className="text-white" />
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {player.playerName}
                </h1>
                {player.tier && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      player.tier === "S-Tier"
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {player.tier}
                  </span>
                )}
              </div>

              <p className="text-xl text-orange-400 mb-2">{player.realName}</p>

              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                {player.team && (
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>
                      {typeof player.team === "object"
                        ? player.team.name
                        : player.team}
                    </span>
                  </div>
                )}

                {player.game && (
                  <div className="flex items-center gap-1">
                    <Swords size={16} />
                    <span>{player.game}</span>
                  </div>
                )}

                {player.country && (
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{player.country}</span>
                  </div>
                )}

                {player.birthDate && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>
                      {new Date(player.birthDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                {player.socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {social.platform.toLowerCase() === "twitter" && (
                      <Twitter size={20} />
                    )}
                    {social.platform.toLowerCase() === "instagram" && (
                      <Instagram size={20} />
                    )}
                    {social.platform.toLowerCase() === "youtube" && (
                      <Youtube size={20} />
                    )}
                    {social.platform.toLowerCase() === "twitch" && (
                      <Twitch size={20} />
                    )}
                  </a>
                ))}

                <button onClick={handleLike} className="flex items-center gap-1 ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
                  <Heart size={16} />
                  <span>{player.likeCount || 0}</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2">Career Earnings</h3>
              <p className="text-2xl font-bold text-orange-400">
                {player.earnings || "$0"}
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-8">
          {["achievements", "stats", "media", "references"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-orange-400 border-b-2 border-orange-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "achievements" && (
              <AchievementsTab player={player} />
            )}
            {activeTab === "stats" && <StatsTab player={player} />}
            {activeTab === "media" && <MediaTab player={player} />}
            {activeTab === "references" && <ReferencesTab player={player} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

// Tab Components
const AchievementsTab = ({ player }) => {
  if (!player.achievements || player.achievements.length === 0) {
    return (
      <div className="text-center py-12">
        <Trophy size={48} className="mx-auto text-gray-500 mb-4" />
        <p className="text-gray-400">No achievements recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {player.achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-400/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{achievement.tournament}</h3>
              <p className="text-gray-400">
                {achievement.placement} • {achievement.tier}
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2">
              <Trophy size={20} className="text-black" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-medium">{achievement.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Prize</p>
              <p className="font-medium">{achievement.prize}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Team</p>
              <p className="font-medium">{achievement.team}</p>
            </div>
          </div>

          {achievement.tournamentLink && (
            <a
              href={achievement.tournamentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-orange-400 hover:text-orange-300 transition-colors"
            >
              Tournament Details <ExternalLink size={14} />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const StatsTab = ({ player }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Total Earnings"
        value={player.earnings || "$0"}
        icon={<BarChart2 size={24} />}
        color="text-orange-400"
      />

      <StatCard
        title="Tournaments Played"
        value={player.achievements?.length || 0}
        icon={<Swords size={24} />}
        color="text-blue-400"
      />

      <StatCard
        title="Likes"
        value={player.likeCount || 0}
        icon={<Heart size={24} />}
        color="text-red-400"
      />

      {/* Earnings Chart */}
      {player.earningsChart && player.earningsChart.length > 0 && (
        <div className="md:col-span-2 lg:col-span-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4">Earnings Over Time</h3>
          <div className="flex items-end h-40 gap-2">
            {player.earningsChart.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-orange-500 to-orange-600 rounded-t transition-all hover:from-orange-400 hover:to-orange-500"
                  style={{
                    height: `${Math.min(100, (item.earnings / 10000) * 100)}%`,
                  }}
                ></div>
                <p className="text-xs text-gray-400 mt-2">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MediaTab = ({ player }) => {
  if (!player.mediaLinks || player.mediaLinks.length === 0) {
    return (
      <div className="text-center py-12">
        <Youtube size={48} className="mx-auto text-gray-500 mb-4" />
        <p className="text-gray-400">No media links available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {player.mediaLinks.map((media, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-400/30 transition-colors"
        >
          <div className="h-48 bg-gray-700 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Youtube size={48} className="text-red-500" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">{media.platform} Content</h3>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
            >
              Watch Now <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ReferencesTab = ({ player }) => {
  if (!player.references || player.references.length === 0) {
    return (
      <div className="text-center py-12">
        <Star size={48} className="mx-auto text-gray-500 mb-4" />
        <p className="text-gray-400">No references available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {player.references.map((reference, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-400/30 transition-colors"
        >
          <h3 className="text-xl font-bold mb-2">{reference.title}</h3>
          <p className="text-gray-400 mb-4">{reference.date}</p>
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
          >
            Read More <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-400">{title}</h3>
      <div className={color}>{icon}</div>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400">Loading player data...</p>
    </div>
  </div>
);

// Error Page Component
const ErrorPage = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-gray-400 mb-6">{error}</p>
      <Link
        to="/players"
        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Players
      </Link>
    </div>
  </div>
);

export default PlayerProfile;
