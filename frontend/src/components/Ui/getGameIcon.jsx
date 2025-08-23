import {
  Gamepad,
  Swords,
  Shield,
  Crown,
  Zap,
  Trophy,
  Users,
  Calendar,
  Search,
  Award,
} from "lucide-react";

const getGameIcon = (game) => {
  switch (game) {
    case "Valorant":
      return <Shield className="w-4 h-4" />;
    case "Counter-Strike 2":
      return <Swords className="w-4 h-4" />;
    case "League of Legends":
      return <Crown className="w-4 h-4" />;
    case "BGMI":
      return <Gamepad className="w-3 h-3" />;
    case "Free Fire":
      return <Zap className="w-3 h-3" />;
    case "Call of Duty":
      return <Swords className="w-3 h-3" />;
    default:
      return <Gamepad className="w-4 h-4" />;
  }
};

export default getGameIcon;
