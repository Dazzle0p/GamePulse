import {
  Trophy,
  Users,
  Calendar,
  Zap,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import Features from "../components/Sections/Features";

const Home = () => {
  const featuredOrgs = [
    { name: "Team SouL", logo: "🔥", members: 45, achievements: 15 },
    { name: "GodLike Esports", logo: "⚡", members: 38, achievements: 12 },
    { name: "Velocity Gaming", logo: "🚀", members: 52, achievements: 20 },
  ];

  const upcomingEvents = [
    {
      name: "Skyesports Championship",
      date: "Dec 15",
      prize: "₹10L",
      game: "Valorant",
    },
    { name: "BGMI Masters", date: "Jan 5", prize: "₹15L", game: "BGMI" },
    { name: "Free Fire Cup", date: "Dec 20", prize: "$50K", game: "Free Fire" },
  ];

  return (
    <div className="mt-0 min-h-screen bg-gpblack text-white">
      {/* Hero Section */}
      <section className="min-h-[91.25vh] relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover opacity-20"></div>
        <div className="mt-5 max-w-7xl mx-auto space-y-8 relative z-10 items-center">
          <div className=" space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              Game Pulse
            </h1>
            <p className="text-xl md:text-2xl text-gpgray">
              Empowering the Indian Gaming Community with esports infrastructure
              — connecting organizations, tournaments, creators, and brands.
            </p>
          </div>

          <div className="mt-15 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-lg flex items-center justify-center gap-2 hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg">
              <Trophy className="h-5 w-5" />
              <span className="font-medium">Explore Organizations</span>
            </button>
            <button className="px-8 py-4 border-2 border-gporange-300 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-gporange-300/10 transition-all">
              <Play className="h-5 w-5" />
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <Users className="h-10 w-10 mx-auto" />,
                value: "500+",
                label: "Organizations",
              },
              {
                icon: <Calendar className="h-10 w-10 mx-auto" />,
                value: "1000+",
                label: "Tournaments",
              },
              {
                icon: <Star className="h-10 w-10 mx-auto" />,
                value: "50K+",
                label: "Community Members",
              },
            ].map((stat, index) => (
              <div
                key={index}
                //className="bg-gpdark/80 backdrop-blur-sm p-6 rounded-xl border border-gporange-300/20 text-center hover:border-gporange-300/50 transition-all"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                <p className="text-gpgray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Organizations */}
      <section className="py-16 px-4 bg-gpdark">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Featured Organizations</h2>
            <p className="text-gpgray">
              Discover India's top esports orgs and their achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {featuredOrgs.map((org) => (
              <div
                key={org.name}
                className="bg-gpblack p-6 rounded-xl border border-gporange-300/20 hover:border-gporange-300/50 transition-all"
              >
                <div className="text-5xl mb-4 text-center text-gporange-300">
                  {org.logo}
                </div>
                <h3 className="text-xl font-bold text-center">{org.name}</h3>
                <div className="grid grid-cols-2 mt-6 text-center gap-4">
                  <div className="bg-gpdark p-3 rounded-lg">
                    <p className="text-2xl font-bold text-gporange-300">
                      {org.members}
                    </p>
                    <p className="text-sm text-gpgray">Members</p>
                  </div>
                  <div className="bg-gpdark p-3 rounded-lg">
                    <p className="text-2xl font-bold text-gporange-300">
                      {org.achievements}
                    </p>
                    <p className="text-sm text-gpgray">Achievements</p>
                  </div>
                </div>
                <button className="mt-6 w-full px-4 py-3 border border-gporange-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gporange-300/10 transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <Link to="/organizations">
            <button className="mt-8 px-6 py-3 border border-gporange-300 rounded-lg flex items-center gap-2 mx-auto hover:bg-gporange-300/10 transition-colors">
              View All Organizations <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 px-4 bg-gpblack">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Upcoming Tournaments</h2>
            <p className="text-gpgray">
              Don't miss these exciting upcoming esports events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="bg-gpdark border border-gporange-300/20 rounded-xl p-6 text-left hover:border-gporange-300/50 transition-all"
              >
                <span className="text-xs uppercase border border-gporange-300/30 px-3 py-1 rounded-full mb-4 inline-block text-gporange-300">
                  {event.game}
                </span>
                <h3 className="font-semibold text-lg mb-2">{event.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gpgray flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {event.date}
                  </span>
                  <span className="font-bold text-gporange-300">
                    {event.prize}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/organizers">
            <button className="mt-8 px-6 py-3 border border-gporange-300 rounded-lg flex items-center gap-2 mx-auto hover:bg-gporange-300/10 transition-colors">
              View All Events <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Platform Features */}
      <Features />
    </div>
  );
};

export default Home;
