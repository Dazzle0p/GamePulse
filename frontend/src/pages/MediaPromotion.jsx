import React, { useState, useEffect } from "react";
import {
  BarChart2,
  Target,
  Users,
  Video,
  Handshake,
  Share2,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  Mic2,
  Camera,
  TrendingUp,
  Globe,
  BadgeCheck,
  Zap,
  Rocket,
  Activity,
  Search,
  Filter,
} from "lucide-react";

const MediaPromotion = () => {
  const [activeTab, setActiveTab] = useState("influencers");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [gridSize, setGridSize] = useState(80);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Esports Team Manager",
      content:
        "Our engagement tripled after using the targeted ads. The analytics dashboard helped us refine our strategy in real-time.",
      rating: 5,
      logo: "🔥",
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      role: "Gaming Influencer",
      content:
        "The brand partnership tools connected me with sponsors I never would've reached on my own. Life-changing opportunities!",
      rating: 4,
      logo: "🎮",
    },
    {
      id: 3,
      name: "TechGear Inc.",
      role: "Gaming Hardware Brand",
      content:
        "Our product launch campaign reached 3x more gamers than expected. The ROI was exceptional.",
      rating: 5,
      logo: "⚡",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I start seeing results?",
      answer:
        "Most campaigns begin showing measurable results within 48 hours. Influencer campaigns typically gain traction within the first week, while targeted ads can show immediate engagement.",
    },
    {
      question: "What makes your platform different?",
      answer:
        "Our AI-driven targeting specializes in gaming audiences with precision demographics. We offer real-time analytics dashboards specifically designed for gaming metrics, and our network includes exclusive access to top-tier gaming influencers.",
    },
    {
      question: "Do you support content creators?",
      answer:
        "Absolutely! We offer special programs for content creators including free analytics tools, sponsorship opportunities, and cross-promotion with other creators in our network.",
    },
    {
      question: "What payment models do you offer?",
      answer:
        "We provide flexible options: Pay-per-click (PPC), fixed campaign pricing, commission-based partnerships, and enterprise-level subscription plans for large organizations.",
    },
  ];

  const stats = [
    { value: "3.2M", label: "Active Gamers Reached" },
    { value: "42%", label: "Avg. Engagement Increase" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "24/7", label: "Campaign Support" },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Influencer Campaigns",
      description:
        "Collaborate with top gaming influencers to create authentic, engaging campaigns that resonate with your audience.",
      badges: ["Creator Matching", "Content Strategy", "Performance Tracking"],
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Targeted Ads",
      description:
        "Run precise ad campaigns targeting gamers, esports fans, and niche gaming communities for maximum ROI.",
      badges: [
        "Demographic Filters",
        "Behavioral Targeting",
        "Platform Optimization",
      ],
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-orange-400" />,
      title: "Analytics Dashboard",
      description:
        "Track campaign performance in real-time with detailed metrics on reach, engagement, and conversions.",
      badges: ["Real-time Data", "Custom Reports", "ROI Calculator"],
    },
    {
      icon: <Video className="w-8 h-8 text-orange-400" />,
      title: "Content Boost",
      description:
        "Promote your videos, streams, and highlights directly to a gaming-focused audience.",
      badges: ["Video Promotion", "Stream Highlights", "Content Syndication"],
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-400" />,
      title: "Brand Partnerships",
      description:
        "Connect with brands for sponsorships, product placements, and co-branded content opportunities.",
      badges: ["Sponsorship Deals", "Product Integration", "Revenue Sharing"],
    },
    {
      icon: <Share2 className="w-8 h-8 text-orange-400" />,
      title: "Social Amplification",
      description:
        "Leverage our network to push your content across multiple platforms for broader exposure.",
      badges: ["Cross-Platform", "Viral Tools", "Community Building"],
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Filter features based on search
  const filteredFeatures = features.filter(
    (feature) =>
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.badges.some((badge) =>
        badge.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Adjust grid size based on window width
  useEffect(() => {
    const handleResize = () => {
      setGridSize(
        window.innerWidth > 1024 ? 80 : window.innerWidth > 768 ? 60 : 40
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Dynamic Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 85, 0, 0.1) 0%, transparent 70%), 
            linear-gradient(0deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%),
            linear-gradient(90deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 border-b border-orange-300/20">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
                 linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1)),
                 linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1))
               `,
            backgroundSize: `${gridSize / 2}px ${gridSize / 2}px`,
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-300/30">
                <Zap className="w-5 h-5 mr-2 text-orange-300" />
                <span className="text-sm font-medium">
                  POWERFUL GAMING MARKETING
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">
                  Amplify Your Reach
                </span>{" "}
                <br />
                In The Gaming World
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Whether you're a gaming influencer, esports team, or brand, our
                platform offers tailored tools to boost your visibility, engage
                your audience, and grow your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl flex items-center gap-2 font-bold hover:from-red-600 hover:to-orange-600 transition-all shadow-[0_0_15px_2px_rgba(255,85,0,0.5)] hover:shadow-[0_0_20px_5px_rgba(255,85,0,0.7)]">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-gray-900/80 border border-orange-300/30 text-white rounded-xl flex items-center gap-2 font-bold hover:bg-orange-500/10 transition-all">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-orange-300/20 rounded-2xl p-6 shadow-lg">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-red-900 to-gray-950 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-orange-300 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    Campaign Showcase
                  </h3>
                  <div className="flex gap-2">
                    <div className="p-2 rounded-full bg-gray-800 border border-orange-300/20">
                      <Mic2 className="w-5 h-5 text-orange-300" />
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 border border-orange-300/20">
                      <Camera className="w-5 h-5 text-orange-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/80 p-4 rounded-xl border border-orange-300/20 shadow-md"
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Tabs */}
      <section className="py-16 px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solutions For Every Gaming Entity
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored marketing strategies designed specifically for different
              players in the gaming ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["influencers", "teams", "brands", "tournaments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_0_10px_2px_rgba(255,85,0,0.5)]"
                    : "bg-gray-800 text-gray-400 hover:bg-orange-500/10 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-orange-300/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Influencer Collaboration
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Match with ideal content creators
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Campaign performance tracking
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Authentic content creation
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-orange-300/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Multi-Platform Amplification
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Cross-platform promotion
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Social media integration
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Community engagement tools
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-orange-300/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Performance Analytics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Real-time campaign tracking
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Audience demographic insights
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ROI measurement tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-red-900/30 to-gray-900/30 border-y border-orange-300/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Marketing Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive tools designed to elevate your presence in the
              gaming ecosystem
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full bg-gray-800 border border-orange-300/20 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-orange-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 bg-gray-800 border border-orange-300/20 rounded-xl cursor-pointer hover:bg-orange-500/10">
                <Filter className="w-5 h-5 mr-2 text-orange-300" />
                <span className="text-white">Filters</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["All", "Analytics", "Ads", "Partnerships"].map((filter) => (
                  <span
                    key={filter}
                    className={`px-3 py-1.5 text-sm rounded-xl cursor-pointer border ${
                      filter === "All"
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent"
                        : "bg-gray-800 text-gray-400 border-orange-300/20 hover:bg-orange-500/10 hover:text-white"
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-6 hover:border-orange-300/50 transition-all group hover:shadow-[0_0_20px_0_rgba(255,85,0,0.2)]"
              >
                <div className=" w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r from-red-500 to-orange-500 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-400 border border-orange-300/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from creators and brands who've transformed their reach with
              our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-8 hover:shadow-[0_0_20px_0_rgba(255,85,0,0.2)] transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{testimonial.logo}</div>
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BadgeCheck className="w-5 h-5 text-blue-400" />
                  Verified campaign results
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-red-900/30 to-gray-900/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our media and promotion services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-orange-300/20 overflow-hidden hover:border-orange-300/50 transition-all"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-900/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-300" />
                  )}
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 bg-gray-900/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 p-12 text-center relative overflow-hidden shadow-[0_0_30px_5px_rgba(255,50,0,0.3)]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                   linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1)),
                   linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1))
                 `,
              backgroundSize: `${gridSize / 2}px ${gridSize / 2}px`,
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Dominate the Gaming Scene?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of creators and brands already boosting their reach
              with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl flex items-center gap-2 font-bold hover:bg-gray-200 transition-all shadow-lg">
                Get Started Now <Rocket className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-900/80 border border-orange-300/30 text-white rounded-xl flex items-center gap-2 font-bold hover:bg-orange-500/10 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPromotion;
