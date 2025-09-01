import FeaturedSection from "../Ui/FeaturedSection";
import bgms from "../../assets/bgms.webp";
import valo from "../../assets/valo.jpg";
import poke from "../../assets/pokemon.png";
import codm from "../../assets/codmwc.jpg";

const tournaments = [
  {
    name: "BGMI Pro Series",
    prizePool: "$100,000",
    location: "India",
    image: bgms,
  },
  {
    name: "Valorant Champions",
    prizePool: "$250,000",
    location: "Los Angeles, USA",
    image: valo,
  },
  {
    name: "Pokemon Unite India Series",
    prizePool: "$2,000,000",
    location: "Dubai, UAE",
    image: poke,
  },
  {
    name: "COD World ChampionShip 2022",
    prizePool: "$2,000,000",
    location: "Dubai, UAE",
    image: codm,
  },
];

export default function FeatueredTournament() {
  return (
    <div className="pt-5 pb-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-orange-500">Tournament</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4">
          Everything you need to compete, create, and connect in one place
        </p>
      </div>
      <FeaturedSection tournaments={tournaments} />
    </div>
  );
}
