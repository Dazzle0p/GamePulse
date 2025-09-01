import React from "react";
import LogoCarousel from "../Ui/LogoCarousel";
import cclogo from "../../assets/cclogo.webp";
import { Youtube, Instagram, Linkedin } from "react-feather";

const TrustedBy = () => {
  const sponsors = [
    {
      name: "TechCorp",
      logoUrl: cclogo,
      website: "https://techcorp.com",
    },
    {
      name: "GameGear",
      logoUrl: cclogo,
      website: "https://gamegear.com",
    },
    {
      name: "EnergySoda",
      logoUrl: cclogo,
      website: "https://energysoda.com",
    },
    {
      name: "StreamTech",
      logoUrl: cclogo,
      website: "https://streamtech.com",
    },
    {
      name: "ProPeripherals",
      logoUrl: cclogo,
      website: "https://propher.com",
    },
    {
      name: "CloudHost",
      logoUrl: cclogo,
      website: "https://cloudhost.com",
    },
  ];

  return (
    <div className="pt-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted <span className="text-orange-500">By</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Brands who've belived in GamePulse and trust our platform to deliver
          seamless experiences.
        </p>
      </div>
      <LogoCarousel logos={sponsors} />
    </div>
  );
};

export default TrustedBy;
