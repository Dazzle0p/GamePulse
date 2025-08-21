import {
  Trophy,
  Users,
  Video,
  ShoppingCart,
  BarChart2,
  HeartHandshake,
  Gamepad,
  ArrowRight,
  Shield,
  Briefcase,
  Megaphone,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { CoreServices } from "../Sections/CoreServices";

export default function WhatWeDo() {
  const stats = [
    {
      value: "500K+",
      label: "Active Gamers",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "500+",
      label: "Gaming Organizations",
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "5K+",
      label: "Creators Supported",
      icon: <Video className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "200+",
      label: "Brand Partners",
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    },
  ];

  const services = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: " For Gamers & Creators",
      description:
        "Helping players, streamers, and content creators get discovered and grow.",
      features: [
        "Get Discovered — Showcase your profile to teams, brands, and fans looking for fresh talent.",
        "Showcase Your Achievements — Highlight your tournament wins, stats, and best plays.",
        "Find Opportunities — Connect with teams, sponsors, and event organizers for collaborations.",
        "Track Your Scene — Stay updated with every major tournament and roster change in your game.",
      ],
      color: "from-red-600 to-orange-500",
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "For Brands & Sponsors",
      description:
        "Making it easy for brands to enter and succeed in India’s gaming market.",
      features: [
        "Discover Verified Talent — Search creators, teams, and influencers by game, reach, and engagement.",
        "Target the Right Audience — Find gaming personalities that match your brand’s voice and vision.",
        "Simplify Collaborations — Directly connect with the right talent without middlemen.",
        "Track Market Trends — See which games, teams, and creators are currently hot in the scene.",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: <HeartHandshake className="w-10 h-10" />,
      title: "For Tournament Organizers",
      description:
        "Helping TOs reach more players, attract sponsors, and build their brand.",
      features: [
        "Promote Your Events — List tournaments and leagues to reach players and audiences nationwide.",
        "Attract Sponsors — Showcase your track record and reach to secure brand partnerships.",
        "Connect with Talent — Find casters, analysts, players, and streamers for your events.",
        "Build Your Community — Grow a loyal audience by being visible on the national esports calendar",
      ],
      color: "from-purple-600 to-indigo-500",
    },
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Event Management",
      description:
        "Seamlessly organize and participate in gaming events with our automated tools",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
      title: "Organization Hubs",
      description:
        "Dedicated pages for esports organizations with rosters, achievements, and sponsor details.",
    },

    {
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      title: "Brand Partnerships",
      description:
        "Connect with top gaming brands for sponsorships and collaborations",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Community Hub",
      description: "Dedicated forums and chat channels for gamers to connect",
    },
    {
      icon: <Gamepad className="w-8 h-8 text-orange-500" />,
      title: "Game Integrations",
      description:
        "Direct API connections with popular games for seamless experiences",
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Safe Environment",
      description:
        "Robust moderation tools and anti-cheat systems for fair play",
    },
  ];

  return (
    <div className=" text-white min-h-screen bg-gpblack">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 mb-6">
            <Gamepad className="w-5 h-5 text-orange-300" />
            <span className="text-sm font-medium">THE GAMING ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              What We Do
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Building India's ultimate gaming hub — connecting players, creators,
            and brands through tournaments, community, and opportunities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gpblack">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-2xl">
            We provide comprehensive solutions for every aspect of the gaming
            ecosystem
          </p>
        </div>
        <CoreServices />
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 z-0"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block p-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>

          <blockquote className="text-xl italic text-gray-300 max-w-3xl mx-auto mb-8 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-orange-500/30">
            "To redefine the Indian gaming landscape by providing a single
            platform where competitive spirit meets creativity, and where every
            gamer can find their place, voice, and opportunities."
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to compete, create, and connect in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up Your{" "}
            <span className="text-orange-500">Gaming Experience</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of gamers, creators, and brands who are already part
            of India's fastest-growing gaming ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3.5 border border-orange-500 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
