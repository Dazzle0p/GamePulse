import FeatueredTournament from "../components/Sections/FeatueredTournament";
import { FeaturedGames } from "../components/Sections/FeaturedGames";
import Hero from "../components/Sections/HomeHero";
import PlatFeatures from "../components/Sections/PlatFeatures";
import TrustedBy from "../components/Sections/TrustedBy";

const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-100">
      <Hero />
      <FeatueredTournament />
      <FeaturedGames />
      <TrustedBy />
      <PlatFeatures />
    </div>
  );
};

export default HomePage;
