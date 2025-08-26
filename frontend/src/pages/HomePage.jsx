import ServicesSection from "../components/Sections/ServicesSection";
import Hero from "../components/Sections/HomeHero";
import FeaturedTournament from "../components/Sections/FeaturedTournament";
import WhatWeDo from "../components/subPages/WhatWeDo";
import FeaturedOrgs from "../components/Sections/FeaturedOrgs";
import PlatFeatures from "../components/Sections/PlatFeatures";
import DotGrid from "../components/Ui/DotGrid";

const HomePage = () => {
  return (
    <div className="relative bg-gpblack min-h-screen overflow-hidden text-gray-100">
      {/* Hero section without background */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Background with DotGrid for rest of page */}
      <div className="relative z-0">
        <div className="absolute inset-0 opacity-80 ">
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#5227FF"
            activeColor="#ff5500"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Foreground sections */}
        <div className="relative z-10">
          <FeaturedOrgs />
          <FeaturedTournament />
          <PlatFeatures />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
