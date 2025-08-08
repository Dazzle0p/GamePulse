import React, { useState } from "react";
import { Trophy, Megaphone } from "lucide-react";
import {
  Users,
  Calendar,
  BarChart2,
  BookOpen,
  Briefcase,
  ShoppingCart,
  Shield,
  Star,
  TrendingUp,
  Video,
  HelpCircle,
  ArrowRight,
  Search,
} from "react-feather";

import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredService, setHoveredService] = useState(null);

  const categories = [
    { id: "all", name: "All Services" },
    { id: "orgs", name: "Organizations" },
    { id: "creators", name: "Creators" },
    { id: "events", name: "Events" },
    { id: "business", name: "Business" },
  ];

  const services = [
    {
      id: 1,
      title: "Esports Organizations",
      description: "Find and connect with professional gaming organizations",
      icon: <Trophy className="w-8 h-8" />,
      category: "orgs",
      color: "from-red-600 to-orange-500",
      path: "/organizations",
    },

    {
      id: 2,
      title: "Event & Tournament's",
      description:
        "Scroll through India's biggest and most exciting gaming events, all in one place.",
      icon: <Calendar className="w-8 h-8" />,
      category: "events",
      color: "from-blue-600 to-cyan-500",
      path: "/events",
    },
    {
      id: 3,
      title: "Gaming Personality",
      description:
        "Connect with gaming influencers, streamers, Casters and many more",
      icon: <Video className="w-8 h-8" />,
      category: "creators",
      color: "from-yellow-600 to-amber-500",
      path: "/creators",
    },
    {
      id: 4,
      title: "Tournament Organizers",
      description: "Discover tournament hosts and event managers",
      icon: <Calendar className="w-8 h-8" />,
      category: "events",
      color: "from-purple-600 to-indigo-500",
    },
    {
      id: 8,
      title: "Community Hub",
      description: "Forums, news, and social features",
      icon: <Users className="w-8 h-8" />,
      category: "creators",
      color: "from-cyan-600 to-sky-500",
      path: "/news",
    },
    {
      id: 9,
      title: "Marketplace",
      description: "Buy, sell, and trade gaming merchandise",
      icon: <ShoppingCart className="w-8 h-8" />,
      category: "business",
      color: "from-orange-600 to-amber-500",
    },
    {
      id: 10,
      title: "Media & Promotion",
      description: "Amplify your reach with our marketing tools",
      icon: <Megaphone className="w-8 h-8" />,
      category: "creators",
      color: "from-teal-600 to-green-500",
    },
    {
      id: 11,
      title: "Learning Resources",
      description: "Tutorials, guides, and coaching materials",
      icon: <BookOpen className="w-8 h-8" />,
      category: "orgs",
      color: "from-violet-600 to-purple-500",
    },
    {
      id: 12,
      title: "Career & Jobs",
      description: "Level Up Your Career in Esports & Gaming.",
      icon: <Shield className="w-8 h-8" />,
      category: "Career",
      color: "from-rose-600 to-pink-500",
    },
  ];

  // Filter services based on category and search term
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            What Are You Looking For?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive suite of services designed specifically
            for the gaming community
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10">
          {/* Search Bar */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl ${
                  hoveredService === service.id
                    ? "border-orange-500 scale-[1.02]"
                    : ""
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
                ></div>

                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mr-4`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <Link to={service.path}>
                    <button className="flex items-center text-orange-400 font-medium group">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>

                {/* Hover effect */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-4 mb-4 rounded-full bg-gray-800">
              <Search className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Services Found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">500+</div>
              <p className="text-orange-300">Organizations Registered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">2.5M+</div>
              <p className="text-orange-300">Monthly Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">120+</div>
              <p className="text-orange-300">Services Available</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our support team is ready to help you find the perfect solution for
            your gaming needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all">
              <HelpCircle className="w-5 h-5" />
              Contact Support
            </button>
            <button className="px-8 py-3.5 border border-orange-500 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
