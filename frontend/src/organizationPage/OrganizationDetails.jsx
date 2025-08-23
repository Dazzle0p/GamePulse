import { useEffect, useState } from "react";
import s8ulbg from "../assets/s8ulBg.webp";
import s8ullogo from "../assets/s8ullogo.png";

import LogoCarousel from "../components/Ui/LogoCarousel";
import TeamsSection from "./TeamsSection";

// Import reusable components
import FilterBar from "../components/Ui/FilterBar";
import SectionHeader from "../components/Ui/SectionHeader";
import Card from "../components/Ui/Card";
import Button from "../components/Ui/Button";
import SocialLinks from "../components/Ui/SocialLinks";
import StatsBanner from "../components/Ui/StatsBanner";

import {
  Youtube,
  Instagram,
  Twitter,
  Twitch,
  Globe,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Users,
  Trophy,
  Calendar,
  Award,
  Target,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  LinkedinIcon,
  Gamepad,
  Swords,
  Shield,
  Crown,
  Search,
} from "lucide-react";

const organizationData = {
  name: "NEXUS GAMING",
  logoUrl:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  bannerUrl:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  foundedYear: 2018,
  headquarters: "Los Angeles, CA",
  themeColor: "#00D9FF",

  // Founders and Co-founders
  founders: [
    {
      name: "Alex Rivera",
      nickname: "Vision",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
      bio: "Former professional esports athlete with over a decade of competitive experience. Founded Nexus Gaming in 2018 with a vision to create the most player-focused organization.",
      socialLinks: {
        twitter: "https://twitter.com/alexvision",
        instagram: "https://instagram.com/alexvision",
        linkedin: "https://linkedin.com/in/alexvision",
      },
    },
  ],
  coFounders: [
    {
      name: "Maria Johnson",
      nickname: "Strategist",
      role: "COO & Business Development",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
      bio: "Former marketing executive with expertise in brand partnerships and team management.",
      socialLinks: {
        twitter: "https://twitter.com/mariastrategist",
        instagram: "https://instagram.com/mariastrategist",
        linkedin: "https://linkedin.com/in/mariastrategist",
      },
    },
    {
      name: "David Kim",
      nickname: "TechGuru",
      role: "CTO & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500",
      bio: "Tech innovator specializing in streaming infrastructure and content creation tools.",
      socialLinks: {
        twitter: "https://twitter.com/davidtechguru",
        instagram: "https://instagram.com/davidtechguru",
        linkedin: "https://linkedin.com/in/davidtechguru",
      },
    },
    {
      name: "Sarah Lee",
      nickname: "EagleEye",
      role: "Talent Scout & Player Development",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
      bio: "Former coach with an eye for discovering and nurturing raw talent into championship players.",
      socialLinks: {
        twitter: "https://twitter.com/saraheagleeye",
        instagram: "https://instagram.com/saraheagleeye",
        linkedin: "https://linkedin.com/in/saraheagleeye",
      },
    },
  ],

  socialLinks: {
    website: { url: "https://nexusgaming.gg" },
    youtube: { url: "https://youtube.com/nexusgaming", followers: 2500000 },
    instagram: { url: "https://instagram.com/nexusgaming", followers: 1800000 },
    twitter: { url: "https://twitter.com/nexusgaming", followers: 3200000 },
    twitch: { url: "https://twitch.tv/nexusgaming", followers: 1200000 },
    discord: { url: "https://discord.gg/nexusgaming", followers: 850000 },
  },

  sponsors: [
    {
      name: "TechCorp",
      logoUrl: "https://via.placeholder.com/200x100/333/fff?text=TechCorp",
      website: "https://techcorp.com",
    },
    {
      name: "GameGear",
      logoUrl: "https://via.placeholder.com/200x100/333/fff?text=GameGear",
      website: "https://gamegear.com",
    },
    {
      name: "EnergySoda",
      logoUrl: "https://via.placeholder.com/200x100/333/fff?text=EnergySoda",
      website: "https://energysoda.com",
    },
    {
      name: "StreamTech",
      logoUrl: "https://via.placeholder.com/200x100/333/fff?text=StreamTech",
      website: "https://streamtech.com",
    },
    {
      name: "ProPeripherals",
      logoUrl:
        "https://via.placeholder.com/200x100/333/fff?text=ProPeripherals",
      website: "https://propher.com",
    },
    {
      name: "CloudHost",
      logoUrl: "https://via.placeholder.com/200x100/333/fff?text=CloudHost",
      website: "https://cloudhost.com",
    },
  ],

  participatingTeams: [
    {
      _id: "1",
      name: "NEXUS Valorant",
      game: "Valorant",
      logoUrl: "https://via.placeholder.com/100x100/00D9FF/000?text=NV",
      achievements: 15,
      establishedYear: 2020,
      players: [
        {
          name: "Phoenix",
          realName: "James Wilson",
          role: "Duelist",
          profileImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
          earnings: "$120K",
          achievements: "VCT 2023 Champion, First Strike Winner",
          mvp: 15,
          tier: "S-Tier",
          region: "North America",
          social: {
            twitter: "https://twitter.com/phoenix",
            instagram: "https://instagram.com/phoenix",
            twitch: "https://twitch.tv/phoenix",
          },
        },
        {
          name: "Sage",
          realName: "Emily Chen",
          role: "Sentinel",
          profileImage:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500",
          earnings: "$95K",
          achievements: "VCT 2022 Finalist, Masters Qualifier",
          mvp: 8,
          tier: "A-Tier",
          region: "North America",
          social: {
            twitter: "https://twitter.com/sage",
            instagram: "https://instagram.com/sage",
            youtube: "https://youtube.com/sage",
          },
        },
        {
          name: "Sova",
          realName: "Mikhail Volkov",
          role: "Initiator",
          profileImage:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
          earnings: "$110K",
          achievements: "Champions Tour Participant, Regional MVP",
          mvp: 12,
          tier: "S-Tier",
          region: "Europe",
          social: {
            twitter: "https://twitter.com/sova",
            instagram: "https://instagram.com/sova",
            twitch: "https://twitch.tv/sova",
          },
        },
        {
          name: "Omen",
          realName: "Carlos Rodriguez",
          role: "Controller",
          profileImage:
            "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=500",
          earnings: "$85K",
          achievements: "First Strike Competitor, Open Qualifier Winner",
          mvp: 6,
          tier: "A-Tier",
          region: "Latin America",
          social: {
            twitter: "https://twitter.com/omen",
            instagram: "https://instagram.com/omen",
          },
        },
        {
          name: "Jett",
          realName: "Kim Min-ji",
          role: "Duelist",
          profileImage:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=500",
          earnings: "$130K",
          achievements: "VCT 2023 MVP, World Championship Finalist",
          mvp: 18,
          tier: "S-Tier",
          region: "South Korea",
          social: {
            twitter: "https://twitter.com/jett",
            instagram: "https://instagram.com/jett",
            youtube: "https://youtube.com/jett",
          },
        },
      ],
    },
    {
      _id: "2",
      name: "NEXUS CS2",
      game: "Counter-Strike 2",
      logoUrl: "https://via.placeholder.com/100x100/00D9FF/000?text=NC",
      achievements: 22,
      establishedYear: 2019,
      players: [
        {
          name: "AimBot",
          realName: "Lars Nielsen",
          role: "AWPer",
          profileImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
          earnings: "$180K",
          achievements: "Major Championship Winner, ESL Pro League Champion",
          mvp: 22,
          tier: "Elite",
          region: "Europe",
          social: {
            twitter: "https://twitter.com/aimbot",
            instagram: "https://instagram.com/aimbot",
            twitch: "https://twitch.tv/aimbot",
          },
        },
        {
          name: "FlashKing",
          realName: "Tyler Johnson",
          role: "Entry Fragger",
          profileImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
          earnings: "$150K",
          achievements: "IEM Champion, Blast Premier Finalist",
          mvp: 16,
          tier: "S-Tier",
          region: "North America",
          social: {
            twitter: "https://twitter.com/flashking",
            instagram: "https://instagram.com/flashking",
          },
        },
        {
          name: "SmokeScreen",
          realName: "Andrei Petrov",
          role: "Support",
          profileImage:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
          earnings: "$120K",
          achievements: "Major Tournament Winner, Regional Champion",
          mvp: 9,
          tier: "A-Tier",
          region: "CIS",
          social: {
            twitter: "https://twitter.com/smokescreen",
            instagram: "https://instagram.com/smokescreen",
          },
        },
        {
          name: "ClutchMaster",
          realName: "Park Ji-hoon",
          role: "Lurker",
          profileImage:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
          earnings: "$140K",
          achievements: "World Championship MVP, Asian Games Gold Medalist",
          mvp: 19,
          tier: "S-Tier",
          region: "South Korea",
          social: {
            twitter: "https://twitter.com/clutchmaster",
            instagram: "https://instagram.com/clutchmaster",
          },
        },
        {
          name: "SprayControl",
          realName: "Ricardo Silva",
          role: "IGL",
          profileImage:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
          earnings: "$160K",
          achievements: "Major Tournament Champion, IGL of the Year",
          mvp: 14,
          tier: "S-Tier",
          region: "Brazil",
          social: {
            twitter: "https://twitter.com/spraycontrol",
            instagram: "https://instagram.com/spraycontrol",
          },
        },
      ],
    },
    {
      _id: "3",
      name: "NEXUS League",
      game: "League of Legends",
      logoUrl: "https://via.placeholder.com/100x100/00D9FF/000?text=NL",
      achievements: 18,
      establishedYear: 2018,
      players: [
        {
          name: "TopLaner",
          realName: "Zhang Wei",
          role: "Top Lane",
          profileImage:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500",
          earnings: "$200K",
          achievements: "Worlds Finalist, LPL Champion",
          mvp: 17,
          tier: "S-Tier",
          region: "China",
          social: {
            twitter: "https://twitter.com/toplaner",
            instagram: "https://instagram.com/toplaner",
          },
        },
        {
          name: "JungleKing",
          realName: "Kim Tae-hyun",
          role: "Jungle",
          profileImage:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
          earnings: "$180K",
          achievements: "World Champion, LCK MVP",
          mvp: 21,
          tier: "Elite",
          region: "South Korea",
          social: {
            twitter: "https://twitter.com/jungleking",
            instagram: "https://instagram.com/jungleking",
          },
        },
        {
          name: "MidGod",
          realName: "Søren Bjerg",
          role: "Mid Lane",
          profileImage:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
          earnings: "$220K",
          achievements: "Worlds Champion, MSI Winner",
          mvp: 25,
          tier: "Elite",
          region: "Europe",
          social: {
            twitter: "https://twitter.com/midgod",
            instagram: "https://instagram.com/midgod",
            youtube: "https://youtube.com/midgod",
          },
        },
        {
          name: "ADCPro",
          realName: "Park Jae-hyuk",
          role: "ADC",
          profileImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
          earnings: "$190K",
          achievements: "Worlds Finalist, LCK Champion",
          mvp: 19,
          tier: "S-Tier",
          region: "South Korea",
          social: {
            twitter: "https://twitter.com/adcpro",
            instagram: "https://instagram.com/adcpro",
          },
        },
        {
          name: "SupportGOAT",
          realName: "Hu Shuo-Chieh",
          role: "Support",
          profileImage:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500",
          earnings: "$170K",
          achievements: "Worlds Champion, MSI MVP",
          mvp: 16,
          tier: "S-Tier",
          region: "Taiwan",
          social: {
            twitter: "https://twitter.com/supportgoat",
            instagram: "https://instagram.com/supportgoat",
          },
        },
      ],
    },
  ],

  creators: [
    {
      _id: "1",
      name: "StreamerPro",
      realName: "Marcus Johnson",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
      primaryPlatform: "Twitch",
      followerCount: 850000,
      contentType: "Gaming Streamer",
      game: "Valorant",
      type: "Streamer",
      socialLinks: {
        twitch: "https://twitch.tv/streamerpro",
        youtube: "https://youtube.com/streamerpro",
        twitter: "https://twitter.com/streamerpro",
        instagram: "https://instagram.com/streamerpro",
      },
    },
    {
      _id: "2",
      name: "ContentKing",
      realName: "David Miller",
      profileImage:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
      primaryPlatform: "YouTube",
      followerCount: 1200000,
      contentType: "Content Creator",
      game: "BGMI",
      type: "YouTuber",
      socialLinks: {
        youtube: "https://youtube.com/contentking",
        instagram: "https://instagram.com/contentking",
        twitter: "https://twitter.com/contentking",
      },
    },
    {
      _id: "3",
      name: "ClipMaster",
      realName: "Sarah Williams",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500",
      primaryPlatform: "Instagram",
      followerCount: 950000,
      contentType: "Highlight Creator",
      game: "MOBA",
      type: "Editor",
      socialLinks: {
        instagram: "https://instagram.com/clipmaster",
        twitter: "https://twitter.com/clipmaster",
        tiktok: "https://tiktok.com/@clipmaster",
      },
    },
    {
      _id: "4",
      name: "PokemonPro",
      realName: "Alex Chen",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
      primaryPlatform: "YouTube",
      followerCount: 750000,
      contentType: "Pokemon Content",
      game: "Pokemon",
      type: "YouTuber",
      socialLinks: {
        youtube: "https://youtube.com/pokemonpro",
        twitter: "https://twitter.com/pokemonpro",
        instagram: "https://instagram.com/pokemonpro",
      },
    },
  ],

  achievements: [
    {
      title: "VCT Masters Champions",
      type: "Tournament",
      description: "Victory at the most prestigious Valorant tournament",
      year: 2024,
      relatedGame: "Valorant",
      position: "1st Place",
      awardedBy: "Riot Games",
      mediaUrl:
        "https://via.placeholder.com/400x200/FFD700/000?text=VCT+Champions",
    },
    {
      title: "IEM Katowice Victory",
      type: "Tournament",
      description: "Dominant performance at Intel Extreme Masters",
      year: 2024,
      relatedGame: "Counter-Strike 2",
      position: "1st Place",
      awardedBy: "ESL Gaming",
      mediaUrl:
        "https://via.placeholder.com/400x200/C0C0C0/000?text=IEM+Katowice",
    },
    {
      title: "Esports Organization of the Year",
      type: "Award",
      description: "Recognized for outstanding contribution to esports",
      year: 2023,
      awardedBy: "Esports Awards",
      mediaUrl:
        "https://via.placeholder.com/400x200/4169E1/fff?text=Org+of+Year",
    },
    {
      title: "5 Million Followers Milestone",
      type: "Milestone",
      description: "Reached 5 million followers across all platforms",
      year: 2023,
      mediaUrl:
        "https://via.placeholder.com/400x200/32CD32/000?text=5M+Followers",
    },
  ],
};

// Helper functions (moved outside the component)
const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "youtube":
      return Youtube;
    case "twitch":
      return Twitch;
    case "instagram":
      return Instagram;
    case "twitter":
      return Twitter;
    default:
      return ExternalLink;
  }
};

const getPlatformColor = (platform) => {
  switch (platform.toLowerCase()) {
    case "youtube":
      return "text-red-500";
    case "twitch":
      return "text-purple-500";
    case "instagram":
      return "text-pink-500";
    case "twitter":
      return "text-blue-400";
    default:
      return "text-primary";
  }
};

const getAchievementIcon = (type) => {
  switch (type) {
    case "Tournament":
      return Trophy;
    case "Award":
      return Award;
    case "Milestone":
      return Target;
    default:
      return Trophy;
  }
};

const getAchievementColor = (type) => {
  switch (type) {
    case "Tournament":
      return "text-yellow-500";
    case "Award":
      return "text-blue-400";
    case "Milestone":
      return "text-green-400";
    default:
      return "text-primary";
  }
};

const getPositionColor = (position) => {
  if (!position) return "text-muted-foreground";
  if (position.includes("1st") || position.toLowerCase().includes("champion"))
    return "text-yellow-500";
  if (position.includes("2nd") || position.includes("runner"))
    return "text-gray-400";
  if (position.includes("3rd")) return "text-orange-500";
  return "text-primary";
};

const formatFollowers = (count) => {
  if (!count) return "";
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

const socialPlatforms = [
  { key: "website", icon: Globe, label: "Website", color: "text-blue-400" },
  { key: "youtube", icon: Youtube, label: "YouTube", color: "text-red-500" },
  {
    key: "instagram",
    icon: Instagram,
    label: "Instagram",
    color: "text-pink-500",
  },
  { key: "twitter", icon: Twitter, label: "Twitter", color: "text-blue-400" },
  { key: "twitch", icon: Twitch, label: "Twitch", color: "text-purple-500" },
  {
    key: "discord",
    icon: MessageCircle,
    label: "Discord",
    color: "text-indigo-400",
  },
];

const OrganizationDetails = () => {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedGame, setSelectedGame] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamic theme color setup
  useEffect(() => {
    const hexToHsl = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
          default:
            h = 0;
        }
        h /= 6;
      }

      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
        l * 100
      )}%`;
    };

    document.documentElement.style.setProperty(
      "--theme-primary",
      hexToHsl(organizationData.themeColor)
    );
  }, [organizationData.themeColor]);

  // Sponsors carousel auto-play
  useEffect(() => {
    if (!isAutoPlaying || organizationData.sponsors.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSponsorIndex(
        (prev) => (prev + 1) % Math.ceil(organizationData.sponsors.length / 4)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, organizationData.sponsors.length]);

  const nextSlide = () => {
    setCurrentSponsorIndex(
      (prev) => (prev + 1) % Math.ceil(organizationData.sponsors.length / 4)
    );
  };

  const prevSlide = () => {
    setCurrentSponsorIndex(
      (prev) =>
        (prev - 1 + Math.ceil(organizationData.sponsors.length / 4)) %
        Math.ceil(organizationData.sponsors.length / 4)
    );
  };

  // Sort achievements by year
  const sortedAchievements = [...organizationData.achievements].sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

  // Filter creators based on selections
  const filteredCreators = organizationData.creators.filter((creator) => {
    const matchesGame = selectedGame === "All" || creator.game === selectedGame;
    const matchesType = selectedType === "All" || creator.type === selectedType;
    const matchesSearch = creator.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesGame && matchesType && matchesSearch;
  });

  const gameFilters = [
    { value: "All", label: "All Games", icon: Gamepad },
    { value: "BGMI", label: "BGMI", icon: Gamepad },
    { value: "Valorant", label: "Valorant", icon: Shield },
    { value: "MOBA", label: "MOBA", icon: Crown },
    { value: "Pokemon", label: "Pokemon", icon: Gamepad },
  ];

  const typeFilters = [
    { value: "All", label: "All Types" },
    { value: "Streamer", label: "Streamers" },
    { value: "YouTuber", label: "YouTubers" },
    { value: "Coach", label: "Coaches" },
  ];

  return (
    <div className="min-h-screen bg-gpblack text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gpblack via-gpdark/80 to-gpblack">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${s8ulbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <img
                src={s8ullogo}
                alt={`${organizationData.name} logo`}
                className="w-50 h-50 object-contain animate-float glow"
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              {organizationData.name}
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-gpgray mb-8">
              {organizationData.foundedYear && (
                <p>Founded in {organizationData.foundedYear}</p>
              )}
              {organizationData.headquarters && (
                <p>Headquarters: {organizationData.headquarters}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Join Our Community
              </Button>
              <Button variant="secondary" size="large">
                Watch Highlights
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-20 w-2 h-2 bg-gpred-500 rounded-full animate-glow-pulse opacity-60" />
        <div
          className="absolute bottom-40 right-32 w-3 h-3 bg-gporange-500 rounded-full animate-glow-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-1 h-1 bg-gpred-500 rounded-full animate-glow-pulse opacity-80"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gpblack">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Leadership"
            subtitle="The visionaries behind our success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder */}
            <Card>
              <div className="relative mb-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gpred-500 to-gporange-500 rounded-full mx-auto flex items-center justify-center border-4 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                  <span className="text-white text-4xl font-bold">AL</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gpred-500 rounded-full flex items-center justify-center border-2 border-gpblack">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gpred-500 transition-colors text-center">
                Alex "Vision" Rivera
              </h3>
              <p className="text-lg text-gpred-500 font-semibold mb-4 text-center">
                Founder & CEO
              </p>
              <p className="text-gpgray mb-6 text-center">
                Former professional esports athlete with over a decade of
                competitive experience. Founded Nexus Gaming in 2018 with a
                vision to create the most player-focused organization.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gpblack hover:bg-gpred-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gpgray hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gpblack hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gpgray hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gpblack hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5 text-gpgray hover:text-white" />
                </a>
              </div>
            </Card>

            {/* Co-Founders */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                Co-Founders
              </h3>

              {/* Co-Founder 1 */}
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gporange-500 to-gpred-500 rounded-full flex items-center justify-center border-2 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                    <span className="text-white text-lg font-bold">MJ</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-gpred-500 transition-colors">
                      Maria "Strategist" Johnson
                    </h4>
                    <p className="text-gpred-500 text-sm">
                      COO & Business Development
                    </p>
                    <p className="text-gpgray text-sm mt-1">
                      Former marketing executive with expertise in brand
                      partnerships and team management.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Co-Founder 2 */}
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gporange-500 to-gpred-500 rounded-full flex items-center justify-center border-2 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                    <span className="text-white text-lg font-bold">DK</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-gpred-500 transition-colors">
                      David "TechGuru" Kim
                    </h4>
                    <p className="text-gpred-500 text-sm">
                      CTO & Infrastructure
                    </p>
                    <p className="text-gpgray text-sm mt-1">
                      Tech innovator specializing in streaming infrastructure
                      and content creation tools.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Co-Founder 3 */}
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gporange-500 to-gpred-500 rounded-full flex items-center justify-center border-2 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                    <span className="text-white text-lg font-bold">SL</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-gpred-500 transition-colors">
                      Sarah "EagleEye" Lee
                    </h4>
                    <p className="text-gpred-500 text-sm">
                      Talent Scout & Player Development
                    </p>
                    <p className="text-gpgray text-sm mt-1">
                      Former coach with an eye for discovering and nurturing raw
                      talent into championship players.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Founding Story */}
          <Card className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Our Founding Story
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gpgray mb-4">
                  Nexus Gaming was founded in 2018 by a group of friends who
                  shared a passion for competitive gaming and a vision for how
                  esports organizations should treat their players and content
                  creators.
                </p>
                <p className="text-gpgray mb-4">
                  Starting from a small gaming house with just one Valorant
                  team, we've grown into a multi-game organization with
                  championship teams across multiple titles and a thriving
                  content creator network.
                </p>
              </div>
              <div>
                <p className="text-gpgray mb-4">
                  Our philosophy has always been "players first" - we believe
                  that when we take care of our talent, they'll perform at their
                  best and help us build a community that lasts.
                </p>
                <p className="text-gpgray">
                  Today, we're proud to be recognized as one of the most
                  player-friendly organizations in esports, with multiple
                  championship titles and a community of over 5 million fans
                  worldwide.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gpdark">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Connect With Us"
            subtitle="Join our community across all platforms"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {socialPlatforms.map(({ key, icon: Icon, label, color }) => {
              const social = organizationData.socialLinks[key];
              if (!social?.url) return null;

              return (
                <Card key={key} className="text-center">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-3"
                  >
                    <Icon
                      className={`w-8 h-8 ${color} group-hover:text-white transition-colors`}
                    />
                    <div>
                      <div className="font-semibold text-sm group-hover:text-white">
                        {label}
                      </div>
                      {social.followers && (
                        <div className="text-xs text-gpgray group-hover:text-white">
                          {formatFollowers(social.followers)} followers
                        </div>
                      )}
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      {organizationData.sponsors.length > 0 && (
        <section className="pt-20 bg-gpblack">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Our Partners"
              subtitle="Trusted by industry leaders"
            />
            <LogoCarousel logos={organizationData.sponsors} />
          </div>
        </section>
      )}

      {/* Teams Section */}
      <TeamsSection organizationData={organizationData} />

      {/* Creators Section */}
      {organizationData.creators.length > 0 && (
        <section className="py-20 bg-gpdark">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Content Creators"
              subtitle="Talented creators representing our brand"
            />

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Filter by Game
              </h3>
              <FilterBar
                filters={gameFilters}
                activeFilter={selectedGame}
                onFilterChange={setSelectedGame}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Filter by Type
              </h3>
              <FilterBar
                filters={typeFilters}
                activeFilter={selectedType}
                onFilterChange={setSelectedType}
              />
            </div>

            <FilterBar
              placeholder="Search creators..."
              onSearch={setSearchQuery}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {filteredCreators.map((creator) => {
                const PlatformIcon = getPlatformIcon(creator.primaryPlatform);
                const platformColor = getPlatformColor(creator.primaryPlatform);

                return (
                  <Card key={creator._id} className="text-center">
                    <div className="relative mb-6">
                      {creator.profileImage ? (
                        <img
                          src={creator.profileImage}
                          alt={creator.name}
                          className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-gpred-500/20 group-hover:border-gpred-500 transition-colors"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gradient-to-br from-gpred-500 to-gporange-500 rounded-full mx-auto flex items-center justify-center border-4 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                          <span className="text-white text-2xl font-bold">
                            {creator.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div
                        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 ${platformColor} bg-gpdark rounded-full flex items-center justify-center border-2 border-gpblack`}
                      >
                        <PlatformIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gpred-500 transition-colors">
                      {creator.name}
                    </h3>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-gpgray capitalize">
                        {creator.contentType || "Content Creator"}
                      </p>
                      <p className={`text-sm font-semibold ${platformColor}`}>
                        {creator.primaryPlatform}
                      </p>
                      {creator.followerCount && (
                        <p className="text-lg font-bold text-gpred-500">
                          {formatFollowers(creator.followerCount)} followers
                        </p>
                      )}
                    </div>

                    {creator.socialLinks && (
                      <SocialLinks links={creator.socialLinks} size="small" />
                    )}

                    <Button variant="secondary" className="w-full mt-6">
                      Follow Creator
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {organizationData.achievements.length > 0 && (
        <section className="py-20 bg-gpblack">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Achievements"
              subtitle="Our journey to greatness"
            />

            <div className="max-w-6xl mx-auto">
              <StatsBanner
                stats={[
                  {
                    icon: <Trophy className="w-8 h-8" />,
                    value: organizationData.achievements.filter(
                      (a) => a.type === "Tournament"
                    ).length,
                    label: "Tournament Wins",
                    color: "text-yellow-500",
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    value: organizationData.achievements.filter(
                      (a) => a.type === "Award"
                    ).length,
                    label: "Awards Received",
                    color: "text-blue-400",
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    value: organizationData.achievements.filter(
                      (a) => a.type === "Milestone"
                    ).length,
                    label: "Milestones Reached",
                    color: "text-green-400",
                  },
                ]}
              />

              <div className="space-y-6 mt-12">
                {sortedAchievements.map((achievement, index) => {
                  const Icon = getAchievementIcon(achievement.type);
                  const iconColor = getAchievementColor(achievement.type);
                  const positionColor = getPositionColor(achievement.position);

                  return (
                    <Card key={index}>
                      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                        {achievement.mediaUrl && (
                          <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={achievement.mediaUrl}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <div className="flex-1">
                          <div className="flex items-start space-x-4">
                            <div className={`${iconColor} mt-1`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">
                                  {achievement.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gpgray">
                                  {achievement.year && (
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-4 h-4" />
                                      <span>{achievement.year}</span>
                                    </div>
                                  )}
                                  {achievement.position && (
                                    <div
                                      className={`font-semibold ${positionColor}`}
                                    >
                                      {achievement.position}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {achievement.description && (
                                <p className="text-gpgray mb-3">
                                  {achievement.description}
                                </p>
                              )}

                              <div className="flex flex-wrap gap-4 text-sm">
                                {achievement.relatedGame && (
                                  <div className="flex items-center space-x-1 text-gpred-500">
                                    <span className="font-semibold">
                                      {achievement.relatedGame}
                                    </span>
                                  </div>
                                )}
                                {achievement.awardedBy && (
                                  <div className="flex items-center space-x-1 text-gpgray">
                                    <MapPin className="w-4 h-4" />
                                    <span>{achievement.awardedBy}</span>
                                  </div>
                                )}
                                <div
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${iconColor} bg-current/10`}
                                >
                                  {achievement.type}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OrganizationDetails;
