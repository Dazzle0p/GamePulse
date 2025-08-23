import React from "react";
import { motion } from "framer-motion";
import { Trophy, Video, HeartHandshake, Check, ArrowRight } from "lucide-react";
import { CardSpotlight } from "../Ui/CardSpotlight";
import SectionHeader from "../Ui/SectionHeader";

const services = [
  {
    icon: <Trophy className="w-10 h-10 text-orange-500" />,
    title: "For Gamers & Creators",
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
    icon: <Video className="w-10 h-10 text-orange-500" />,
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
    icon: <HeartHandshake className="w-10 h-10 text-orange-500" />,
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

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  color,
  isHighlighted,
}) => (
  <CardSpotlight
    className={`h-full   ${
      isHighlighted ? " border-2 border-gray-700" : "border-1 border-gray-700"
    }`}
  >
    <div className="relative h-full p-6 flex flex-col ">
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-xl mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-10 h-10  mt-1 text-orange-600" />
            <span className="text-md text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </CardSpotlight>
);

export const CoreServices = () => {
  return (
    <section>
      <SectionHeader title="Core Services" />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} isHighlighted={index === 1} />
        ))}
      </div>
    </section>
  );
};
