import {
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  Flame,
  Trophy,
  Gamepad,
  TrendingUp,
  Bookmark,
} from "lucide-react";

const NewsPage = () => {
  const gamingNews = [
    {
      id: 0,
      title: "BGMI Returns to India: What This Means for the Esports Scene",
      excerpt:
        "After months of uncertainty, BGMI has officially returned to Indian app stores. We explore the impact on the competitive gaming landscape.",
      category: "Mobile Gaming",
      author: "Arjun Sharma",
      publishedAt: "2 hours ago",
      readTime: "5 min read",
      views: "12.5K",
      featured: true,
      trending: true,
      game: "BGMI",
    },
    {
      id: 1,
      title: "BGMI Unban: New Era for Indian Mobile Esports",
      excerpt:
        "Krafton announces official return with enhanced security features and new tournament roadmap",
      category: "Mobile Esports",
      author: "Rajat 'Rj' Mehta",
      publishedAt: "3 hours ago",
      readTime: "4 min read",
      views: "15.2K",
      trending: true,
      game: "BGMI",
    },
    {
      id: 2,
      title: "Valorant Champions Tour India Finals Breakdown",
      excerpt:
        "Team GodLike's strategic masterclass against Velocity Gaming in best-of-5 thriller",
      category: "Esports",
      author: "Priya 'Valkyrie' Nair",
      publishedAt: "8 hours ago",
      readTime: "6 min read",
      views: "22.7K",
      trending: true,
      game: "Valorant",
    },
    {
      id: 3,
      title: "Free Fire MAX World Series Prize Pool Revealed",
      excerpt:
        "$2 million total prize pool with Indian teams getting direct invites",
      category: "Tournaments",
      author: "Arjun 'Frosty' Sharma",
      publishedAt: "1 day ago",
      readTime: "3 min read",
      views: "8.4K",
      game: "Free Fire",
    },
    {
      id: 4,
      title: "New Indian Gaming Startups Securing Funding",
      excerpt:
        "5 gaming tech companies raised over $50M in Q1 2024 - full analysis",
      category: "Industry",
      author: "Neha 'Insider' Kapoor",
      publishedAt: "2 days ago",
      readTime: "7 min read",
      views: "5.1K",
      game: "Multi-Game",
    },
    {
      id: 5,
      title: "Mortal Announces New Gaming Org Partnership",
      excerpt:
        "Popular streamer teams up with international brand for new Indian roster",
      category: "Creators",
      author: "Rohit 'Statsman' Kumar",
      publishedAt: "2 days ago",
      readTime: "5 min read",
      views: "18.9K",
      trending: false,
      game: "Content Creation",
    },
  ];

  const getGameBadge = (game) => {
    const gameStyles = {
      BGMI: "bg-blue-900/30 text-blue-400 border-blue-500/30",
      Valorant: "bg-red-900/30 text-red-400 border-red-500/30",
      Free_Fire: "bg-amber-900/30 text-amber-400 border-amber-500/30",
      Multi_Game: "bg-purple-900/30 text-purple-400 border-purple-500/30",
      Content_Creation: "bg-green-900/30 text-green-400 border-green-500/30",
    };
    return (
      gameStyles[game] || "bg-gray-900/30 text-gray-400 border-gray-500/30"
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Mobile_Gaming: "bg-blue-100 text-blue-800",
      Esports: "bg-purple-100 text-purple-800",
      Industry: "bg-amber-100 text-amber-800",
      Creators: "bg-red-100 text-red-800",
      Business: "bg-emerald-100 text-emerald-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };
  return (
    <div className="min-h-screen bg-gpblack">
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-b from-gpred-900 to-gpblack border-b border-gporange-300/20">
          <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000')] bg-cover bg-center"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gporange-500/20 backdrop-blur-sm border border-gporange-300/30">
              <Gamepad className="w-5 h-5 mr-2 text-gporange-300" />
              <span className="text-sm font-medium">GAMING NEWS NETWORK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gpred-500 to-gporange-500">
                Gaming
              </span>{" "}
              Pulse
            </h1>
            <p className="text-xl text-gpgray max-w-2xl mx-auto">
              Your ultimate source for competitive gaming news, esports
              coverage, and industry updates
            </p>
          </div>
        </section>

        {/* Featured News Card */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Featured Story</h2>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">Most Viewed</span>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto bg-[url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000')] bg-cover bg-center"></div>
                  <div className="p-8 md:w-1/2">
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                          gamingNews[0].category
                        )}`}
                      >
                        {gamingNews[0].category}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {gamingNews[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {gamingNews[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{gamingNews[0].author}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {gamingNews[0].publishedAt}
                        </span>
                      </div>
                      <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center gap-2 hover:shadow-lg transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trending Now Section */}
        <section className="py-12 px-4 border-b border-gporange-300/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Flame className="w-6 h-6 mr-2 text-gporange-400" />
                TRENDING NOW
              </h2>
              <div className="flex items-center space-x-2 text-gporange-300">
                <Trophy className="w-5 h-5" />
                <span className="text-sm">Esports Focus</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gamingNews
                .filter((article) => article.trending)
                .map((article) => (
                  <div
                    key={article.id}
                    className="group relative bg-gpdark rounded-xl border border-gporange-300/10 hover:border-gporange-300/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${getGameBadge(
                          article.game
                        )}`}
                      >
                        {article.game}
                      </span>
                    </div>
                    <div className="h-48 bg-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-white line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gpgray text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gporange-300">
                        <span>By {article.author}</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <button className="mt-4 w-full py-2.5 bg-gradient-to-r from-gpred-500/30 to-gporange-500/30 border border-gporange-300/20 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white hover:bg-gporange-500/10 transition-colors">
                        Full Story
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Gaming News */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
                Latest Gaming News
              </h2>
              <div className="flex space-x-1 bg-gpblack p-1 rounded-full border border-gporange-300/20">
                {["All", "Esports", "Mobile", "Industry", "Creators"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 text-sm rounded-full ${
                        tab === "All"
                          ? "bg-gradient-to-r from-gpred-500 to-gporange-500 text-white"
                          : "text-gpgray hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamingNews.map((article) => (
                <div
                  key={article.id}
                  className="group bg-gpdark rounded-lg border border-gporange-300/10 hover:border-gporange-300/30 transition-all duration-300"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getGameBadge(
                          article.game
                        )}`}
                      >
                        {article.game}
                      </span>
                      <div className="flex items-center text-xs text-gpgray">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gpgray text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gpgray">
                      <span>{article.author}</span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.publishedAt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-3 border border-gporange-300/30 rounded-full text-gporange-300 hover:bg-gporange-500/10 transition-colors flex items-center gap-2 mx-auto">
                Load More News
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Esports Newsletter */}
        <section className="py-16 px-4 bg-gradient-to-br from-gpred-900/50 to-gpblack border-t border-b border-gporange-300/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gporange-500/20 backdrop-blur-sm border border-gporange-300/30">
              <Trophy className="w-5 h-5 mr-2 text-gporange-300" />
              <span className="text-sm font-medium">ESPORTS NEWSLETTER</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss a Match
            </h2>
            <p className="text-gpgray mb-6">
              Get weekly esports updates, tournament schedules, and exclusive
              interviews
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-3 rounded-lg bg-gpdark border border-gporange-300/20 text-white focus:outline-none focus:ring-1 focus:ring-gporange-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-lg hover:from-gpred-600 hover:to-gporange-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsPage;
