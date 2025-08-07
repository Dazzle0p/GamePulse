import {
  Trophy,
  Youtube,
  Twitch,
  Instagram,
  Users,
  BarChart2,
  Heart,
  Gamepad,
  ArrowRight,
} from "lucide-react";

const Creators = () => {
  const creators = [
    {
      id: 1,
      name: "MortaL",
      realName: "Naman Mathur",
      platform: "YouTube",
      subscribers: "6.2M",
      averageViews: "2.1M",
      engagement: "8.5%",
      games: ["BGMI", "Valorant", "GTA V RP"],
      tier: "Tier 1",
      region: "India",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
      },
    },
    {
      id: 2,
      name: "Scout",
      realName: "Tanmay Singh",
      platform: "YouTube",
      subscribers: "4.8M",
      averageViews: "1.8M",
      engagement: "9.2%",
      games: ["BGMI", "Free Fire"],
      tier: "Tier 1",
      region: "India",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
      },
    },
    {
      id: 3,
      name: "CarryMinati",
      realName: "Ajey Nagar",
      platform: "YouTube",
      subscribers: "39M",
      averageViews: "15M",
      engagement: "7.8%",
      games: ["Minecraft", "Among Us", "BGMI"],
      tier: "Tier 1",
      region: "India",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
      },
    },
    {
      id: 4,
      name: "Dynamo Gaming",
      realName: "Aadii Sawant",
      platform: "YouTube",
      subscribers: "10.1M",
      averageViews: "3.2M",
      engagement: "6.9%",
      games: ["BGMI", "Free Fire", "Call of Duty"],
      tier: "Tier 1",
      region: "India",
      social: {
        youtube: "https://youtube.com/mortal",
        instagram: "https://instagram.com/mortal",
        twitch: "https://twitch.com/mortal",
      },
    },
    // ... other creators
  ];

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return <Youtube className="w-5 h-5 text-red-500" />;
      case "twitch":
        return <Twitch className="w-5 h-5 text-purple-500" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const getTierBadge = (tier) => {
    const tierStyles = {
      "Tier 1": "bg-gradient-to-r from-gpred-500 to-gporange-500",
      "Tier 2": "bg-gradient-to-r from-purple-500 to-blue-500",
      "Tier 3": "bg-gradient-to-r from-green-500 to-emerald-500",
    };
    return tierStyles[tier] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gpblack">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gpred-900 to-gpblack text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gporange-500/20 backdrop-blur-sm border border-gporange-300/30">
              <Gamepad className="w-5 h-5 mr-2 text-gporange-300" />
              <span className="text-sm font-medium">TOP GAMING CREATORS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gpred-500 to-gporange-500">
                Gaming
              </span>{" "}
              Influencers
            </h1>
            <p className="text-xl text-gpgray max-w-2xl mx-auto">
              Connect with India's top gaming content creators for
              collaborations, sponsorships, and brand partnerships.
            </p>
          </div>
        </section>

        {/* Creators Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="group relative bg-gpdark rounded-xl border border-gporange-300/10 hover:border-gporange-300/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Tier Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${getTierBadge(
                      creator.tier
                    )}`}
                  >
                    {creator.tier}
                  </div>

                  {/* Creator Image Placeholder */}
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-2xl font-bold text-white">
                        {creator.name}
                      </h2>
                      <p className="text-sm text-gporange-300">
                        {creator.realName}
                      </p>
                    </div>
                  </div>

                  {/* Creator Details */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {getPlatformIcon(creator.platform)}
                      <span className="ml-2 text-sm text-gpgray">
                        {creator.platform}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                        <p className="text-xs text-gpgray">Subscribers</p>
                        <p className="text-lg font-bold text-white">
                          {creator.subscribers}
                        </p>
                      </div>
                      <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                        <p className="text-xs text-gpgray">Avg Views</p>
                        <p className="text-lg font-bold text-white">
                          {creator.averageViews}
                        </p>
                      </div>
                      <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                        <p className="text-xs text-gpgray">Engagement</p>
                        <p className="text-lg font-bold text-white">
                          {creator.engagement}
                        </p>
                      </div>
                      <div className="bg-gpblack/50 p-3 rounded-lg border border-gporange-300/10">
                        <p className="text-xs text-gpgray">Region</p>
                        <p className="text-lg font-bold text-white">
                          {creator.region}
                        </p>
                      </div>
                    </div>

                    {/* Games */}
                    <div className="mb-4">
                      <p className="text-xs text-gpgray mb-2">Popular Games</p>
                      <div className="flex flex-wrap gap-2">
                        {creator.games.map((game, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gporange-500/10 text-gporange-300 border border-gporange-300/20"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={creator.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a
                        href={creator.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href={creator.social.twitch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors"
                      >
                        <Twitch className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-16 text-center">
              <button className="px-8 py-3 border border-gporange-300/30 rounded-full text-gporange-300 hover:bg-gporange-500/10 transition-colors flex items-center gap-2 mx-auto">
                View More Creators
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gpred-900/50 to-gpblack border-t border-b border-gporange-300/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gpdark/50 rounded-xl border border-gporange-300/10">
                <BarChart2 className="w-10 h-10 mx-auto mb-4 text-gporange-300" />
                <h3 className="text-3xl font-bold mb-2 text-white">500+</h3>
                <p className="text-gpgray">Creators in Network</p>
              </div>
              <div className="text-center p-6 bg-gpdark/50 rounded-xl border border-gporange-300/10">
                <Users className="w-10 h-10 mx-auto mb-4 text-gporange-300" />
                <h3 className="text-3xl font-bold mb-2 text-white">250M+</h3>
                <p className="text-gpgray">Combined Subscribers</p>
              </div>
              <div className="text-center p-6 bg-gpdark/50 rounded-xl border border-gporange-300/10">
                <Heart className="w-10 h-10 mx-auto mb-4 text-gporange-300" />
                <h3 className="text-3xl font-bold mb-2 text-white">7.5%</h3>
                <p className="text-gpgray">Average Engagement Rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Creators;
