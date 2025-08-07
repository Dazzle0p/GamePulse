import {
  Users,
  Trophy,
  Megaphone,
  TrendingUp,
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Organization Hubs",
      description:
        "Dedicated pages for esports organizations with rosters, achievements, and sponsor details.",
    },
    {
      icon: Trophy,
      title: "Tournament Organizers",
      description:
        "Professional profiles for tournament organizers with event history and upcoming tournaments.",
    },
    {
      icon: Megaphone,
      title: "Creator Matchmaking",
      description:
        "Connect content creators with brands for authentic collaborations and sponsorship deals.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics for creators, brands, and organizations to track performance.",
    },
    {
      icon: Star,
      title: "Reputation System",
      description:
        "Transparent rating system for all platform participants to build trust and credibility.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description:
        "Complete event lifecycle management from registration to results and VOD archiving.",
    },
  ];

  return (
    <section className="py-10 bg-gpblack">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              Gaming Success
            </span>
          </h2>
          <p className="text-lg text-gpgray max-w-2xl mx-auto">
            From grassroots tournaments to professional esports, our platform
            provides comprehensive tools for the entire Indian gaming ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border border-gporange-300/20 rounded-xl px-8 py-3 hover:border-gporange-300/50 hover:shadow-gpglow transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gpred-300/20 to-gporange-300/20 mb-6">
                  <Icon className="h-6 w-6 text-gporange-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gpgray">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Button */}

      <section className="relative py-20 text-center bg-gradient-to-br from-gpred-900/80 to-gporange-900/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1000')] bg-cover opacity-10"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl font-bold">Join the GamingPulse Today</h2>
          <p className="text-lg text-gpgray">
            Whether you're an organization, creator, or brand — become part of
            India's premier gaming ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-lg hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-gporange-300 text-white rounded-lg hover:bg-gporange-300/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
