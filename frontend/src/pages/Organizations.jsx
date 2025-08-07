import {
  MapPin,
  Trophy,
  Users,
  Search,
  Plus,
  BarChart2,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Organizations = () => {
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
            Discover India's leading esports organizations, their rosters,
            achievements, and latest updates.
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
                  placeholder="Search organizations..."
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
                {["All Games", "BGMI", "Valorant", "Free Fire", "CS2"].map(
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

      {/* Organizations Grid */}
      <section className="pb-16 px-4">
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gpred-900/50 to-gpblack border-t border-b border-gporange-300/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <BarChart2 className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">120+</h3>
              <p className="text-gpgray">Registered Organizations</p>
            </div>
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <Users className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">2,500+</h3>
              <p className="text-gpgray">Professional Players</p>
            </div>
            <div className="text-center p-8 bg-gpdark/50 rounded-2xl border border-gporange-300/10">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-gporange-300" />
              <h3 className="text-4xl font-bold mb-2 text-white">500+</h3>
              <p className="text-gpgray">Tournaments Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gpdark rounded-2xl border border-gporange-300/10 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Register Your Organization
          </h2>
          <p className="text-gpgray mb-8 max-w-2xl mx-auto">
            Join the IGC platform and showcase your organization to the gaming
            community. Get access to exclusive tools, analytics, and partnership
            opportunities.
          </p>
          <button className="px-8 py-3.5 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-xl flex items-center gap-2 mx-auto hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg">
            <Plus className="w-5 h-5" />
            Register Organization
          </button>
        </div>
      </section>
    </div>
  );
};

export default Organizations;

// import {
//   MapPin,
//   Trophy,
//   Users,
//   Search,
//   Plus,
//   BarChart2,
//   Filter,
//   ArrowRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Organizations = () => {
//   const organizations = [
//     {
//       id: "soul",
//       name: "Team SouL",
//       logo: "🔥",
//       foundingYear: 2019,
//       headquarters: "Mumbai, India",
//       games: ["BGMI", "Valorant", "Free Fire"],
//       achievements: 15,
//       members: 45,
//       tier: "Tier 1",
//       social: {
//         twitter: "#",
//         instagram: "#",
//         youtube: "#",
//       },
//     },
//     {
//       id: "godlike",
//       name: "GodLike Esports",
//       logo: "⚡",
//       foundingYear: 2020,
//       headquarters: "Delhi, India",
//       games: ["BGMI", "Free Fire", "Call of Duty"],
//       achievements: 12,
//       members: 38,
//       tier: "Tier 1",
//       social: {
//         twitter: "#",
//         instagram: "#",
//         youtube: "#",
//       },
//     },
//     {
//       id: "velocity",
//       name: "Velocity Gaming",
//       logo: "🚀",
//       foundingYear: 2018,
//       headquarters: "Bangalore, India",
//       games: ["Valorant", "CS2", "BGMI"],
//       achievements: 20,
//       members: 52,
//       tier: "Tier 1",
//       social: {
//         twitter: "#",
//         instagram: "#",
//         youtube: "#",
//       },
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover opacity-20"></div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//               Esports{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//                 Organizations
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Discover India's leading esports organizations, their rosters,
//               achievements, and latest updates.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Banner */}
//       <div className="py-8 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold mb-2">120+</div>
//               <p className="text-gray-300">Registered Organizations</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold mb-2">2,500+</div>
//               <p className="text-gray-300">Professional Players</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold mb-2">500+</div>
//               <p className="text-gray-300">Tournaments Hosted</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search & Filters */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
//           <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
//             <div className="w-full md:w-1/2">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search organizations..."
//                   className="pl-12 pr-4 py-3 w-full bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <button className="flex items-center px-4 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl font-medium">
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filters
//               </button>

//               <div className="flex flex-wrap gap-2">
//                 {["All Games", "BGMI", "Valorant", "Free Fire", "CS2"].map(
//                   (game) => (
//                     <button
//                       key={game}
//                       className={`px-4 py-2 rounded-xl font-medium text-sm ${
//                         game === "All Games"
//                           ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {game}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Organizations Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {organizations.map((org) => (
//             <div
//               key={org.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//             >
//               {/* Organization Header */}
//               <div className="bg-gradient-to-r from-indigo-700 to-purple-800 p-6">
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-center">
//                     <div className="text-4xl mr-4">{org.logo}</div>
//                     <div>
//                       <h2 className="text-xl font-bold text-white">
//                         {org.name}
//                       </h2>
//                       <div className="flex items-center mt-1">
//                         <MapPin className="h-4 w-4 text-indigo-300 mr-1" />
//                         <span className="text-indigo-200 text-sm">
//                           {org.headquarters}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">
//                     {org.tier}
//                   </span>
//                 </div>
//               </div>

//               {/* Organization Details */}
//               <div className="p-6">
//                 <div className="mb-6">
//                   <h3 className="text-sm font-semibold text-gray-500 mb-2">
//                     COMPETITIVE GAMES
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {org.games.map((game) => (
//                       <span
//                         key={game}
//                         className="px-3 py-1 text-sm rounded-full bg-amber-50 text-amber-700 border border-amber-200"
//                       >
//                         {game}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="bg-indigo-50 p-4 rounded-xl text-center">
//                     <div className="flex items-center justify-center mb-1">
//                       <Trophy className="h-5 w-5 text-amber-500 mr-1" />
//                       <span className="text-lg font-bold">
//                         {org.achievements}
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-500">Achievements</p>
//                   </div>
//                   <div className="bg-indigo-50 p-4 rounded-xl text-center">
//                     <div className="flex items-center justify-center mb-1">
//                       <Users className="h-5 w-5 text-indigo-500 mr-1" />
//                       <span className="text-lg font-bold">{org.members}</span>
//                     </div>
//                     <p className="text-xs text-gray-500">Members</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <p className="text-sm text-gray-500">
//                     Est. {org.foundingYear}
//                   </p>
//                   <Link to={`/orgs/${org.id}`}>
//                     <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
//                       View Details <ArrowRight className="w-4 h-4 ml-1" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
//           <div className="p-8 md:p-12 text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Register Your Organization
//             </h2>
//             <p className="text-amber-100 max-w-2xl mx-auto mb-6">
//               Join the IGC platform and showcase your organization to the gaming
//               community. Get access to exclusive tools, analytics, and
//               partnership opportunities.
//             </p>
//             <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-xl flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors shadow-lg">
//               <Plus className="w-5 h-5" />
//               Register Organization
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Our platform brings together the entire Indian gaming ecosystem
//               with powerful tools and analytics
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Trophy className="w-10 h-10" />,
//                 value: "500+",
//                 label: "Tournaments",
//               },
//               {
//                 icon: <Users className="w-10 h-10" />,
//                 value: "50K+",
//                 label: "Community Members",
//               },
//               {
//                 icon: <BarChart2 className="w-10 h-10" />,
//                 value: "250M+",
//                 label: "Monthly Views",
//               },
//               {
//                 icon: <MapPin className="w-10 h-10" />,
//                 value: "25+",
//                 label: "Cities Represented",
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-amber-500 transition-all"
//               >
//                 <div className="text-amber-400 mb-4 mx-auto flex justify-center">
//                   {stat.icon}
//                 </div>
//                 <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                 <p className="text-gray-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Organizations;
