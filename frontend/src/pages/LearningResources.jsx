import React, { useState } from "react";
import {
  BookOpen,
  Video,
  Headphones,
  BarChart,
  User,
  Award,
  ArrowRight,
  Search,
  PlayCircle,
  Bookmark,
  Download,
  Share2,
  ChevronDown,
} from "react-feather";

const LearningResources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedResource, setExpandedResource] = useState(null);

  const categories = [
    { id: "all", name: "All Resources", icon: <BookOpen size={20} /> },
    { id: "tutorials", name: "Tutorials", icon: <Video size={20} /> },
    { id: "guides", name: "Guides", icon: <BookOpen size={20} /> },
    { id: "coaching", name: "Coaching", icon: <User size={20} /> },
    { id: "audio", name: "Podcasts", icon: <Headphones size={20} /> },
    { id: "stats", name: "Analytics", icon: <BarChart size={20} /> },
  ];

  const resources = [
    {
      id: 1,
      title: "FPS Mastery Guide",
      category: "tutorials",
      level: "Beginner",
      duration: "45 min",
      type: "Video Course",
      description:
        "Learn aiming basics, map awareness, and game sense to dominate in popular shooter titles.",
      content:
        "This comprehensive guide covers everything from mouse sensitivity settings to advanced peeking techniques. Includes downloadable practice drills and custom maps.",
      stats: "12,500+ students • 4.8★ rating",
    },
    {
      id: 2,
      title: "MOBA Strategy Playbook",
      category: "tutorials",
      level: "Intermediate",
      duration: "2 hours",
      type: "Interactive Guide",
      description:
        "Understand lanes, hero roles, and objectives to dominate the map in MOBA games.",
      content:
        "Detailed analysis of meta strategies, hero counter-picking, and objective control. Includes interactive scenarios and replay analysis tools.",
      stats: "8,200+ downloads • Pro-approved",
    },
    {
      id: 3,
      title: "Streaming Setup Pro",
      category: "guides",
      level: "All Levels",
      duration: "1.5 hours",
      type: "Video + PDF",
      description:
        "Set up professional-quality broadcasts with equipment guides and software configurations.",
      content:
        "Step-by-step tutorials for OBS, Streamlabs, and hardware setups. Includes lighting techniques and overlay design templates.",
      stats: "15,000+ creators • Updated monthly",
    },
    {
      id: 4,
      title: "Esports Career Pathways",
      category: "guides",
      level: "All Levels",
      duration: "60 min",
      type: "eBook + Audio",
      description:
        "Learn about various roles in gaming & esports and how to get started in each field.",
      content:
        "Interviews with industry professionals, salary guides, and career development roadmaps. Includes resume templates for gaming jobs.",
      stats: "Industry insider knowledge",
    },
    {
      id: 5,
      title: "Pro Player Training Drills",
      category: "coaching",
      level: "Advanced",
      duration: "Daily",
      type: "Training Program",
      description:
        "Access routines used by top-level competitors to sharpen reflexes and strategies.",
      content:
        "30-day progressive training regimen with aim trainers, scenario drills, and VOD review techniques. Personalized feedback available.",
      stats: "Used by tournament winners",
    },
    {
      id: 6,
      title: "Mental Performance Bootcamp",
      category: "coaching",
      level: "All Levels",
      duration: "2 weeks",
      type: "Audio Course",
      description:
        "Master focus, stress management, and tournament-ready confidence techniques.",
      content:
        "Daily meditation guides, performance psychology lessons, and pre-game routines from esports psychologists.",
      stats: "97% reported improved performance",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  const toggleResource = (id) => {
    setExpandedResource(expandedResource === id ? null : id);
  };

  const stats = [
    { value: "850+", label: "Learning Resources" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "Pro", label: "Coaches" },
    { value: "24/7", label: "Access" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 85, 0, 0.1) 0%, transparent 70%), 
                            linear-gradient(0deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%),
                            linear-gradient(90deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-orange-500/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-300/30">
            <Award className="w-5 h-5 mr-2 text-orange-300" />
            <span className="text-sm font-medium">LEVEL UP YOUR SKILLS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
              Gaming Knowledge Hub
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            From basic tutorials to advanced coaching, master your gaming skills
            with our comprehensive learning resources.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search tutorials, guides, and resources..."
                className="pl-12 pr-4 py-4 w-full bg-gray-900 border border-orange-300/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-orange-300/20"
              >
                <h3 className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 lg:px-20 border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_0_10px_2px_rgba(255,85,0,0.5)]"
                    : "bg-gray-900 text-gray-400 hover:bg-orange-500/10 hover:text-white"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-6 hover:border-orange-300/50 transition-all hover:shadow-[0_0_20px_0_rgba(255,85,0,0.2)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300 border border-orange-300/20">
                    {resource.level}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                    {resource.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-orange-400">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {resource.stats}
                  </span>
                </div>

                <div className="mb-6">
                  <button
                    onClick={() => toggleResource(resource.id)}
                    className="flex items-center text-sm text-gray-400 hover:text-orange-300"
                  >
                    {expandedResource === resource.id ? (
                      <>
                        <span>Show less</span>
                        <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                      </>
                    ) : (
                      <>
                        <span>View details</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  {expandedResource === resource.id && (
                    <div className="mt-4 text-gray-400 text-sm bg-gray-800/50 p-4 rounded-lg">
                      {resource.content}
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <button className="flex items-center text-gray-400 hover:text-orange-300 text-sm">
                    <PlayCircle className="w-4 h-4 mr-1" /> Preview
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-orange-300 text-sm">
                    <Bookmark className="w-4 h-4 mr-1" /> Save
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-orange-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-orange-300 text-sm">
                    <Share2 className="w-4 h-4 mr-1" /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 rounded-3xl border border-orange-300/30 p-12 text-center relative overflow-hidden shadow-[0_0_30px_5px_rgba(255,50,0,0.3)]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1)),
                                   linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1))`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Gaming Mastery Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of gamers leveling up their skills with our
              expert-curated resources.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl flex items-center gap-2 font-bold hover:bg-gray-200 transition-all shadow-lg mx-auto">
              Explore All Resources <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-6 lg:px-20 border-t border-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow our expert-designed roadmaps to achieve specific gaming
              goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-red-900/20 rounded-2xl border border-orange-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                🎯 Competitive Player Path
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">1</span>
                  </div>
                  Fundamentals Mastery
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">2</span>
                  </div>
                  Advanced Mechanics
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">3</span>
                  </div>
                  Team Strategy & Communication
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">4</span>
                  </div>
                  Tournament Preparation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-orange-900/20 rounded-2xl border border-orange-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                🎥 Content Creator Path
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">1</span>
                  </div>
                  Streaming & Recording Setup
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">2</span>
                  </div>
                  Content Planning & Production
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">3</span>
                  </div>
                  Audience Growth Strategies
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">4</span>
                  </div>
                  Monetization & Sponsorships
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-red-900/20 rounded-2xl border border-orange-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                🧠 Game Analyst Path
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">1</span>
                  </div>
                  Game Mechanics Deep Dive
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">2</span>
                  </div>
                  VOD Analysis Techniques
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">3</span>
                  </div>
                  Statistical Analysis Fundamentals
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                    <span className="text-xs">4</span>
                  </div>
                  Team Coaching & Strategy Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-20 border-t border-orange-500/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 mb-4">
            GameMaster Academy
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Your pathway to gaming excellence since 2018
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mb-8">
            <a href="#" className="hover:text-orange-300 transition-colors">
              Learning Paths
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              Pro Coaches
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              Resource Library
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              Community
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © 2023 GameMaster Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearningResources;
