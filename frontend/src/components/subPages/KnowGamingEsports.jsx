import React from "react";
import { Link } from "react-router-dom";
import {
  Gamepad,
  Trophy,
  Users,
  DollarSign,
  BarChart,
  Briefcase,
  Calendar,
  Book,
  Mic,
  Shield,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Globe,
  Youtube,
  Twitch,
  Instagram,
  Shirt,
} from "lucide-react";

export default function KnowGamingEsports() {
  // Industry statistics
  const stats = [
    {
      value: "$200B+",
      label: "Global Gaming Market",
      description: "Projected value by 2023",
    },
    {
      value: "3.2B",
      label: "Gamers Worldwide",
      description: "Active players across platforms",
    },
    {
      value: "$1.8B",
      label: "Esports Industry",
      description: "Estimated value in 2024",
    },
    {
      value: "532M",
      label: "Esports Viewers",
      description: "Global audience in 2024",
    },
  ];

  // Career paths
  const careers = [
    {
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
      title: "Pro Player",
      description: "Competes in tournaments for prize money and salaries",
    },
    {
      icon: <Mic className="w-6 h-6 text-orange-500" />,
      title: "Streamer/Creator",
      description:
        "Creates gaming content for platforms like YouTube and Twitch",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
      title: "Team Manager",
      description: "Manages esports team operations and logistics",
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: "Event Producer",
      description: "Organizes tournaments and gaming events",
    },
  ];

  // Revenue streams
  const revenueStreams = [
    {
      title: "Tournament Winnings",
      amount: "$50k-$5M+",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      title: "Team Salaries",
      amount: "$30k-$300k/year",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Sponsorships",
      amount: "$10k-$1M+/deal",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Streaming Revenue",
      amount: "$1k-$500k/month",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "Content Creation",
      amount: "$500-$100k/video",
      icon: <Book className="w-5 h-5" />,
    },
    {
      title: "Merchandise",
      amount: "$5k-$500k/month",
      icon: <Shirt className="w-5 h-5" />,
    },
  ];

  // Glossary terms
  const glossary = [
    {
      term: "Org (Organisation)",
      definition: "Company that fields teams and manages players",
    },
    {
      term: "TO (Tournament Organizer)",
      definition: "Entity that plans, runs and broadcasts tournaments",
    },
    {
      term: "Caster/Commentator",
      definition: "Live commentator who narrates matches",
    },
    {
      term: "Franchising",
      definition: "League model with fixed team slots and revenue sharing",
    },
    {
      term: "VOD",
      definition:
        "Video-on-demand - recorded content like highlights or tutorials",
    },
    {
      term: "Bootcamp",
      definition: "Intensive training period where a team practices together",
    },
    {
      term: "Grinding",
      definition: "Dedicated practice sessions to improve skills",
    },
    {
      term: "Meta",
      definition:
        "Most effective tactics available - current dominant strategies",
    },
    {
      term: "GG (Good Game)",
      definition: "Sportsmanship phrase used at the end of matches",
    },
  ];

  // Major events
  const majorEvents = [
    {
      name: "Esports World Cup",
      location: "Riyadh, Saudi Arabia",
      prize: "$60M",
      games: "Multiple titles",
    },
    {
      name: "The International",
      location: "Seattle, USA",
      prize: "$40M",
      games: "Dota 2",
    },
    {
      name: "League of Legends World Championship",
      location: "Rotating",
      prize: "$2.25M",
      games: "League of Legends",
    },
    {
      name: "Fortnite World Cup",
      location: "New York, USA",
      prize: "$30M",
      games: "Fortnite",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 mb-6">
                <Gamepad className="w-5 h-5 text-orange-300" />
                <span className="text-sm font-medium">GAMING 101</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Know Gaming & Esports
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Your beginner-friendly guide to understanding gaming, esports
                careers, and the billion-dollar industry - even if you've never
                played a video game.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#what-is-gaming"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold hover:from-red-700 hover:to-orange-600 transition-all"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#glossary"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-400 font-semibold hover:bg-orange-500/10"
                >
                  Quick Glossary
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-orange-500/20">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-gray-800/30 to-transparent p-4 rounded-xl border border-gray-700"
                  >
                    <div className="text-xl md:text-2xl font-bold text-orange-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-400">
                Sources: Newzoo, Statista, PwC Gaming Reports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Gaming? */}
      <section id="what-is-gaming" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <Gamepad className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What is <span className="text-orange-500">Gaming</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-blue-400" />
              Casual & Social Gaming
            </h3>
            <p className="text-gray-300 mb-4">
              Simple, easy-to-pick-up games played for fun and social
              connection:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Mobile puzzle games (Candy Crush, Among Us)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Social simulation games (Animal Crossing, The Sims)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Party games (Mario Kart, Fall Guys)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              Hardcore & Competitive Gaming
            </h3>
            <p className="text-gray-300 mb-4">
              Games with deep mechanics played at professional and competitive
              levels:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>First-person shooters (Valorant, Counter-Strike)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>MOBAs (League of Legends, Dota 2)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Battle royales (Fortnite, PUBG)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is Esports? */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What is <span className="text-orange-500">Esports</span>?
          </h2>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 mb-10">
          <p className="text-gray-300 mb-6">
            <strong className="text-orange-400">
              Esports (electronic sports)
            </strong>{" "}
            are organized, competitive video game events where teams or
            individuals compete in structured matches and tournaments. Esports
            mirrors traditional sports with:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <h4 className="font-bold text-orange-400 mb-2">
                Teams & Players
              </h4>
              <p className="text-gray-300">
                Professional organizations with contracted athletes
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <h4 className="font-bold text-orange-400 mb-2">
                Leagues & Tournaments
              </h4>
              <p className="text-gray-300">
                Structured competitions with seasons and playoffs
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <h4 className="font-bold text-orange-400 mb-2">
                Broadcasts & Fans
              </h4>
              <p className="text-gray-300">
                Live streams and in-person events with large audiences
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Major Esports Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">{event.name}</h4>
                  <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-sm font-bold">
                    ${event.prize}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{event.location}</span>
                  <span>{event.games}</span>
                </div>
                <div
                  className="h-32 bg-gray-700 rounded-lg mb-4"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1000)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How People Earn */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            How People Earn in{" "}
            <span className="text-orange-500">Gaming & Esports</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  {stream.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{stream.title}</h3>
                  <p className="text-orange-400 font-medium">{stream.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="text-green-500" />
            Reality Check: Income Volatility & Risks
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>
                <strong>Income unpredictability:</strong> Prize money and
                sponsorships fluctuate; multiple income streams are essential
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>
                <strong>Contract awareness:</strong> Carefully review payout
                splits, exclusivity terms, and IP rights
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>
                <strong>Health challenges:</strong> Long practice hours and
                travel impact physical and mental wellbeing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>
                <strong>Scam prevention:</strong> Verify tournament organizers
                and sponsors; avoid upfront payment requests
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Career <span className="text-orange-500">Opportunities</span>
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Esports Creates Diverse Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-400">
                Direct Roles
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Pro players, coaches & analysts</strong> - Team
                    performance specialists
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Content creators & streamers</strong> - Build
                    audiences and communities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Event producers & broadcast engineers</strong> -
                    Tournament operations
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-400">
                Supporting Roles
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Marketing & sales professionals</strong> -
                    Sponsorships and partnerships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Game developers & data analysts</strong> - Technical
                    backbone
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <strong>Esports educators & coaches</strong> - Talent
                    development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Popular Career Paths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  {career.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{career.title}</h4>
                <p className="text-gray-400">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Getting <span className="text-orange-500">Started</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              For Aspiring Players
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Master 1-2 Games</h4>
                  <p className="text-gray-400">
                    Focus on games with strong competitive scenes
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Join Local Tournaments</h4>
                  <p className="text-gray-400">
                    Gain experience and build your reputation
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Build Your Highlight Reel</h4>
                  <p className="text-gray-400">
                    Showcase your best plays for team applications
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">4</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Network in Communities</h4>
                  <p className="text-gray-400">
                    Connect in Discord servers and local LAN events
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Youtube className="text-red-500" />
              For Aspiring Creators
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Choose Your Platform</h4>
                  <p className="text-gray-400">
                    Focus on YouTube, Twitch, or short-form content
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Develop Consistent Content</h4>
                  <p className="text-gray-400">
                    Start with highlight clips and tutorials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Engage Your Audience</h4>
                  <p className="text-gray-400">
                    Respond to chat and collaborate with others
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-500">4</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Monetize Gradually</h4>
                  <p className="text-gray-400">
                    Add ads, subscriptions, and affiliate links
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">The Path to Success</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Focus on consistent skill development and authentic community
            building rather than chasing viral fame. Sustainable careers are
            built through dedication and gradual growth.
          </p>
          <div className="flex justify-center">
            <Link
              to={"/learn"}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-medium"
            >
              Explore Learning Resources <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <Book className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Gaming <span className="text-orange-500">Glossary</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossary.map((term, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all"
            >
              <h3 className="font-bold text-lg mb-2 text-orange-400">
                {term.term}
              </h3>
              <p className="text-gray-300">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enter the{" "}
            <span className="text-orange-500">Gaming World</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join millions of gamers, creators, and fans who are part of the
            fastest-growing entertainment industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all"
            >
              Create Your Profile <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-orange-500 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10"
            >
              Explore Tournaments
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
