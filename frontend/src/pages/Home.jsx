import ServicesSection from "../components/Sections/ServicesSection";
import Hero from "../components/Sections/Hero";
import FeaturedTournament from "../components/Sections/FeaturedTournament";
import WhatWeDo from "../components/subPages/WhatWeDo";

const Home = () => {
  return (
    <div className="mt-0 min-h-screen bg-gpblack text-white">
      <Hero />
      <FeaturedTournament />
      <WhatWeDo />
    </div>
  );
};

export default Home;
