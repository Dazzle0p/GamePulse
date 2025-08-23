import { useEffect, useState } from "react";
import s8ulbg from "../../assets/s8ulBg.webp";
import s8ullogo from "../../assets/s8ullogo.png";
import TalentCard from "../Ui/TalentCard";
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
} from "lucide-react";
import LogoCarousel from "../Ui/LogoCarousel";
import TeamsSection from "../Sections/TeamsSection";

const organizationData = {
  name: "NEXUS GAMING",
  logoUrl:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  bannerUrl:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  foundedYear: 2018,
  headquarters: "Los Angeles, CA",
  themeColor: "#00D9FF", // Cyan blue theme

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
        { name: "Phoenix", role: "Duelist" },
        { name: "Sage", role: "Sentinel" },
        { name: "Sova", role: "Initiator" },
        { name: "Omen", role: "Controller" },
        { name: "Jett", role: "Duelist" },
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
        { name: "AimBot", role: "AWPer" },
        { name: "FlashKing", role: "Entry Fragger" },
        { name: "SmokeScreen", role: "Support" },
        { name: "ClutchMaster", role: "Lurker" },
        { name: "SprayControl", role: "IGL" },
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
        { name: "TopLaner", role: "Top Lane" },
        { name: "JungleKing", role: "Jungle" },
        { name: "MidGod", role: "Mid Lane" },
        { name: "ADCPro", role: "ADC" },
        { name: "SupportGOAT", role: "Support" },
      ],
    },
  ],

  creators: [
    {
      _id: "1",
      name: "StreamerPro",
      profileImage: "https://via.placeholder.com/150x150/00D9FF/000?text=SP",
      primaryPlatform: "Twitch",
      followerCount: 850000,
      contentType: "Gaming Streamer",
      socialLinks: {
        twitch: "https://twitch.tv/streamerpro",
        youtube: "https://youtube.com/streamerpro",
        twitter: "https://twitter.com/streamerpro",
      },
    },
    {
      _id: "1",
      name: "StreamerPro",
      profileImage: "https://via.placeholder.com/150x150/00D9FF/000?text=SP",
      primaryPlatform: "Twitch",
      followerCount: 850000,
      contentType: "Gaming Streamer",
      socialLinks: {
        twitch: "https://twitch.tv/streamerpro",
        youtube: "https://youtube.com/streamerpro",
        twitter: "https://twitter.com/streamerpro",
      },
    },
    {
      _id: "3",
      name: "ClipMaster",
      profileImage: "https://via.placeholder.com/150x150/00D9FF/000?text=CM",
      primaryPlatform: "Instagram",
      followerCount: 950000,
      contentType: "Highlight Creator",
      socialLinks: {
        instagram: "https://instagram.com/clipmaster",
        twitter: "https://twitter.com/clipmaster",
      },
    },
    {
      _id: "4",
      name: "ContentKing",
      profileImage: "https://via.placeholder.com/150x150/00D9FF/000?text=CK",
      primaryPlatform: "YouTube",
      followerCount: 1200000,
      contentType: "Content Creator",
      socialLinks: {
        youtube: "https://youtube.com/contentking",
        instagram: "https://instagram.com/contentking",
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

const OrganizationDetails = () => {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Helper functions
  const formatFollowers = (count) => {
    if (!count) return "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

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

  // Sort achievements by year
  const sortedAchievements = [...organizationData.achievements].sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

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
                src={s8ullogo || orgLogo}
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
              <button className="btn-hero bg-gradient-to-r from-gpred-500 to-gporange-500 hover:from-gpred-700 hover:to-gporange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-gpglow hover:shadow-gpglow-lg">
                Join Our Community
              </button>
              <button className="btn-social border-2 border-gpred-500 text-gpred-500 hover:bg-gpred-500/10 font-bold py-3 px-8 rounded-full transition-all duration-300">
                Watch Highlights
              </button>
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              Leadership
            </h2>
            <p className="text-xl text-gpgray">
              The visionaries behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="bg-gpdark border border-gpgray/20 rounded-2xl p-8 text-center group hover:border-gpred-500 transition-colors duration-300">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-gpred-500 to-gporange-500 rounded-full mx-auto flex items-center justify-center border-4 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                  <span className="text-white text-4xl font-bold">AL</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gpred-500 rounded-full flex items-center justify-center border-2 border-gpblack">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gpred-500 transition-colors">
                Alex "Vision" Rivera
              </h3>
              <p className="text-lg text-gpred-500 font-semibold mb-4">
                Founder & CEO
              </p>
              <p className="text-gpgray mb-6">
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
            </div>

            {/* Co-Founders */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                Co-Founders
              </h3>

              {/* Co-Founder 1 */}
              <div className="bg-gpdark border border-gpgray/20 rounded-xl p-6 flex items-center space-x-4 group hover:border-gpred-500 transition-colors duration-300">
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

              {/* Co-Founder 2 */}
              <div className="bg-gpdark border border-gpgray/20 rounded-xl p-6 flex items-center space-x-4 group hover:border-gpred-500 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gporange-500 to-gpred-500 rounded-full flex items-center justify-center border-2 border-gpred-500/20 group-hover:border-gpred-500 transition-colors">
                  <span className="text-white text-lg font-bold">DK</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white group-hover:text-gpred-500 transition-colors">
                    David "TechGuru" Kim
                  </h4>
                  <p className="text-gpred-500 text-sm">CTO & Infrastructure</p>
                  <p className="text-gpgray text-sm mt-1">
                    Tech innovator specializing in streaming infrastructure and
                    content creation tools.
                  </p>
                </div>
              </div>

              {/* Co-Founder 3 */}
              <div className="bg-gpdark border border-gpgray/20 rounded-xl p-6 flex items-center space-x-4 group hover:border-gpred-500 transition-colors duration-300">
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
            </div>
          </div>

          {/* Founding Story */}
          <div className="mt-16 bg-gpdark border border-gpgray/20 rounded-2xl p-8">
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
          </div>
        </div>
      </section>
      {/* Social Media Section */}
      <section className="py-20 bg-gpdark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-xl text-gpgray">
              Join our community across all platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {socialPlatforms.map(({ key, icon: Icon, label, color }) => {
              const social = organizationData.socialLinks[key];
              if (!social?.url) return null;

              return (
                <a
                  key={key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gpdark border border-gpgray/30 rounded-xl p-6 transition-all duration-300 hover:border-gpred-500 group"
                >
                  <div className="flex flex-col items-center space-y-3">
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
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* Sponsors Carousel */}
      {organizationData.sponsors.length > 0 && (
        <section className="pt-20 bg-gpblack">
          <div className="container mx-auto px-6">
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
                Our Partners
              </h2>
              <p className="text-xl text-gpgray">Trusted by industry leaders</p>
              <LogoCarousel logos={organizationData.sponsors} />
            </div>
          </div>
        </section>
      )}
      {/* Teams Section */}
      <TeamsSection />
      {/* Creators Section */}
      {organizationData.creators.length > 0 && (
        <section className="py-20 bg-gpdark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
                Content Creators
              </h2>
              <p className="text-xl text-gpgray">
                Talented creators representing our brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {organizationData.creators.map((creator) => {
                const PlatformIcon = getPlatformIcon(creator.primaryPlatform);
                const platformColor = getPlatformColor(creator.primaryPlatform);

                return (
                  <div
                    key={creator._id}
                    className="bg-gpblack border border-gpgray/20 rounded-2xl p-6 group hover:border-gpred-500 transition-colors duration-300 text-center"
                  >
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
                      <div className="flex justify-center space-x-3 mb-6">
                        {creator.socialLinks.youtube && (
                          <a
                            href={creator.socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gpdark hover:bg-red-500 rounded-full flex items-center justify-center transition-colors group/link"
                          >
                            <Youtube className="w-4 h-4 text-gpgray group-hover/link:text-white" />
                          </a>
                        )}
                        {creator.socialLinks.twitch && (
                          <a
                            href={creator.socialLinks.twitch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gpdark hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors group/link"
                          >
                            <Twitch className="w-4 h-4 text-gpgray group-hover/link:text-white" />
                          </a>
                        )}
                        {creator.socialLinks.instagram && (
                          <a
                            href={creator.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gpdark hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors group/link"
                          >
                            <Instagram className="w-4 h-4 text-gpgray group-hover/link:text-white" />
                          </a>
                        )}
                        {creator.socialLinks.twitter && (
                          <a
                            href={creator.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gpdark hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors group/link"
                          >
                            <Twitter className="w-4 h-4 text-gpgray group-hover/link:text-white" />
                          </a>
                        )}
                      </div>
                    )}

                    <button className="btn-social border border-gpred-500 text-gpred-500 hover:bg-gpred-500/10 font-bold py-3 px-4 rounded-lg w-full transition-colors duration-300">
                      Follow Creator
                    </button>
                  </div>
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
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
                Achievements
              </h2>
              <p className="text-xl text-gpgray">Our journey to greatness</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="achievement-card text-center bg-gpdark border border-gpgray/20 rounded-2xl p-8">
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {
                      organizationData.achievements.filter(
                        (a) => a.type === "Tournament"
                      ).length
                    }
                  </div>
                  <div className="text-gpgray">Tournament Wins</div>
                </div>
                <div className="achievement-card text-center bg-gpdark border border-gpgray/20 rounded-2xl p-8">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {
                      organizationData.achievements.filter(
                        (a) => a.type === "Award"
                      ).length
                    }
                  </div>
                  <div className="text-gpgray">Awards Received</div>
                </div>
                <div className="achievement-card text-center bg-gpdark border border-gpgray/20 rounded-2xl p-8">
                  <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {
                      organizationData.achievements.filter(
                        (a) => a.type === "Milestone"
                      ).length
                    }
                  </div>
                  <div className="text-gpgray">Milestones Reached</div>
                </div>
              </div>

              <div className="space-y-6">
                {sortedAchievements.map((achievement, index) => {
                  const Icon = getAchievementIcon(achievement.type);
                  const iconColor = getAchievementColor(achievement.type);
                  const positionColor = getPositionColor(achievement.position);

                  return (
                    <div
                      key={index}
                      className="achievement-card flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 bg-gpdark border border-gpgray/20 rounded-2xl p-6 hover:border-gpred-500 transition-colors duration-300"
                    >
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
