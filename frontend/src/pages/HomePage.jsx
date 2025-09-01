import FeatueredTournament from "../components/Sections/FeatueredTournament";
import Hero from "../components/Sections/HomeHero";
import PlatFeatures from "../components/Sections/PlatFeatures";
import TrustedBy from "../components/Sections/TrustedBy";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100">
      <Hero />
      <FeatueredTournament />
      <TrustedBy />
      <PlatFeatures />
    </div>
  );
};

export default HomePage;
