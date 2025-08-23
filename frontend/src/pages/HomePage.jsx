import ServicesSection from "../components/Sections/ServicesSection";
import Hero from "../components/Sections/HomeHero";
import FeaturedTournament from "../components/Sections/FeaturedTournament";
import WhatWeDo from "../components/subPages/WhatWeDo";
import FeaturedOrgs from "../components/Sections/FeaturedOrgs";
import PlatFeatures from "../components/Sections/PlatFeatures";

const HomePage = () => {
  return (
    <div className="mt-0 min-h-screen bg-gpblack  text-gray-100 ">
      <Hero />
      <FeaturedOrgs />
      <FeaturedTournament />
      <PlatFeatures />
    </div>
  );
};

export default HomePage;
