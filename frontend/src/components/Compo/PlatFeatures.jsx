import React from "react";
import { Calendar, BarChart2, MessageSquare, Shield } from "react-feather";
import { Megaphone, Gamepad } from "lucide-react";
const features = [
  {
    icon: <Gamepad className="w-8 h-8 text-orange-500" />,
    title: "E-sports Stats",
    description:
      "Track live stats, match updates, and tournament details in real time.",
  },
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
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "Safe Environment",
    description: "Robust moderation tools and anti-cheat systems for fair play",
  },
];
const PlatFeatures = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Features Section */}
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
  );
};

export default PlatFeatures;
