import { Calendar, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import {
  MapPin,
  Trophy,
  Users,
  Search,
  Plus,
  BarChart2,
  Filter,
} from "lucide-react";
const FeaturedOrganization = () => {
  const organizations = [
    {
      id: "soul",
      name: "Team SouL",
      logo: "🔥",
      foundingYear: 2019,
      headquarters: "Mumbai, India",
      games: ["BGMI", "Valorant", "Free Fire"],
      achievements: 15,
      members: 45,
      tier: "Tier 1",
      social: {
        twitter: "https://twitter.com/TeamSouL",
        instagram: "https://instagram.com/TeamSouL",
        youtube: "https://youtube.com/TeamSouL",
      },
    },
    {
      id: "godlike",
      name: "GodLike Esports",
      logo: "⚡",
      foundingYear: 2020,
      headquarters: "Delhi, India",
      games: ["BGMI", "Free Fire", "Call of Duty"],
      achievements: 12,
      members: 38,
      tier: "Tier 1",
      social: {
        twitter: "https://twitter.com/GodLikeEsports",
        instagram: "https://instagram.com/GodLikeEsports",
        youtube: "https://youtube.com/GodLikeEsports",
      },
    },
    {
      id: "velocity",
      name: "Velocity Gaming",
      logo: "🚀",
      foundingYear: 2018,
      headquarters: "Bangalore, India",
      games: ["Valorant", "CS2", "BGMI"],
      achievements: 20,
      members: 52,
      tier: "Tier 1",
      social: {
        twitter: "https://twitter.com/VelocityGG",
        instagram: "https://instagram.com/VelocityGG",
        youtube: "https://youtube.com/VelocityGG",
      },
    },
  ];

  const getTierBadge = (tier) => {
    const tierStyles = {
      "Tier 1": "bg-gradient-to-r from-gpred-500 to-gporange-500",
      "Tier 2": "bg-gradient-to-r from-purple-500 to-blue-500",
      "Tier 3": "bg-gradient-to-r from-green-500 to-emerald-500",
    };
    return tierStyles[tier] || "bg-gray-500";
  };

  return (
    <section className="py-5 px-4">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Organizations</h2>
          <p className="text-gpgray">Indias Leading Organizations</p>
        </div>

        {/* Organizations Grid */}
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizations.map((org) => (
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
                            className="px-3 py-1 text-xs rounded-full bg-gporange-500/10 text-gporange-300 border border-gporange-300/20"
                          >
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
                    <div className="flex space-x-3 mb-6">
                      <a
                        href={org.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a
                        href={org.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href={org.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                      </a>
                    </div>

                    <Link to={`/organizations/${org.id}`}>
                      <button className="w-full py-3 bg-gradient-to-r from-gpred-500/50 to-gporange-500/50 border border-gporange-300/20 text-white rounded-xl hover:from-gpred-500 hover:to-gporange-500 transition-all">
                        View Organization
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Link to="/organizers">
          <button className="mt-8 px-6 py-3 border border-gporange-300 rounded-lg flex items-center gap-2 mx-auto hover:bg-gporange-300/10 transition-colors">
            View All Organizations <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedOrganization;
