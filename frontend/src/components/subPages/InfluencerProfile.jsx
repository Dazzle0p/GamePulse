import {
  Youtube,
  Twitch,
  Instagram,
  Twitter,
  BarChart2,
  Calendar,
  Award,
  Users,
  Monitor,
  Clock,
  DollarSign,
  Clipboard,
  Heart,
  ThumbsUp,
  ArrowLeft,
  Headphones,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BrandInfluencerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with API call
  const influencer = {
    id: 1,
    name: "MortaL",
    realName: "Naman Mathur",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    bannerImage:
      "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=1000",
    primaryPlatform: "YouTube",
    tier: "S-Tier",
    region: "Mumbai, India",
    age: 26,

    // Social Media Stats
    socialStats: {
      youtube: {
        followers: "6.2M",
        avgViews: "2.1M",
        engagementRate: "8.5%",
        avgLikes: "150K",
        link: "https://youtube.com/mortal",
      },
      instagram: {
        followers: "3.8M",
        avgLikes: "210K",
        engagementRate: "7.2%",
        avgComments: "8.5K",
        link: "https://instagram.com/mortal",
      },
      twitter: {
        followers: "1.2M",
        avgLikes: "15K",
        engagementRate: "5.8%",
        avgRetweets: "3.2K",
        link: "https://twitter.com/mortal",
      },
      twitch: {
        followers: "420K",
        avgViewers: "45K",
        peakViewers: "285K",
        link: "https://twitch.com/mortal",
      },
    },

    // Performance Metrics
    performanceMetrics: {
      avgVideoViews: "1.8M",
      peakViewers: "285K",
      engagementRate: "8.2%",
      audienceRetention: "72%",
      clickThroughRate: "4.8%",
      contentQualityScore: "9.2/10",
      consistencyRating: "98%",
    },

    // Esports Career
    esportsCareer: {
      team: "SOUL (S8UL Esports)",
      role: "Captain & IGL",
      achievements: [
        "BMPS Season 1 Champion (2022)",
        "PUBG Mobile Club Open 2019 - India Champion",
        "Esports Mobile Player of the Year 2021",
      ],
      tournamentEarnings: "$250,000+",
      brandValue: "High",
      influenceScore: "92/100",
    },

    // Audience Insights
    audienceProfile: {
      demographics: {
        male: "78%",
        female: "22%",
        ageGroups: {
          "13-17": "18%",
          "18-24": "52%",
          "25-34": "25%",
          "35+": "5%",
        },
        topCountries: [
          "India (78%)",
          "Pakistan (9%)",
          "Bangladesh (7%)",
          "Nepal (4%)",
        ],
      },
      interests: [
        "Gaming (92%)",
        "Tech (85%)",
        "Esports (78%)",
        "Entertainment (65%)",
      ],
      purchasingBehavior: {
        techProducts: "High",
        gamingGear: "Very High",
        apparel: "Medium",
        foodDelivery: "High",
      },
      audienceLoyalty: "9.4/10",
    },

    // Streaming Analytics
    streamingAnalytics: {
      avgViewers: "45K",
      peakViewers: "285K",
      avgDuration: "4.2 hours",
      schedule: "Mon-Sat: 7PM - 11PM IST",
      daysPerWeek: 6,
      viewerEngagement: "High",
      chatActivity: "Very High",
    },

    // Streaming Setup
    streamingSetup: {
      equipment: {
        microphone: "Shure SM7B",
        camera: "Sony A6400",
        lighting: "Elgato Key Light",
        captureCard: "Elgato 4K60 Pro",
      },
      software: ["OBS Studio", "Streamlabs", "Voicemod Pro"],
      productionQuality: "Professional",
      streamFeatures: [
        "Custom Alerts",
        "Interactive Overlays",
        "Brand Integration Zones",
      ],
    },

    // Past Collaborations
    pastCollaborations: [
      {
        brand: "Red Bull",
        campaign: "Red Bull M.E.O. Season 5",
        duration: "3 months",
        deliverables: [
          "4 tournament streams (avg 285K viewers)",
          "2 Instagram posts (avg 215K likes)",
          "1 YouTube video (2.1M views)",
        ],
        results: "32% sales lift in target regions",
        brandSentiment: "Very Positive",
      },
      {
        brand: "OnePlus",
        campaign: "OnePlus 10 Pro Launch",
        duration: "1 month",
        deliverables: [
          "3 unboxing streams (avg 180K viewers)",
          "5 Instagram stories (avg 85K views)",
          "1 dedicated YouTube review (1.8M views)",
        ],
        results: "28% increase in brand awareness",
        brandSentiment: "Positive",
      },
      {
        brand: "HyperX",
        campaign: "Cloud II Headset Promotion",
        duration: "2 months",
        deliverables: [
          "Daily stream integrations",
          "Social media posts",
          "Giveaway campaign",
        ],
        results: "15% sales increase during campaign",
        brandSentiment: "Excellent",
      },
    ],

    // Collaboration Rates
    collaborationRates: {
      youtube: {
        dedicatedVideo: "$15,000 - $25,000",
        integration: "$8,000 - $12,000",
        shoutout: "$3,000",
      },
      instagram: {
        post: "$5,000 - $8,000",
        story: "$2,000 - $3,500",
        reel: "$4,000 - $6,000",
      },
      twitch: {
        sponsoredStream: "$7,000 - $10,000",
        productPlacement: "$3,000 - $5,000",
        brandSegment: "$4,000 - $7,000",
      },
      packageDeals: {
        basic: "$25,000",
        standard: "$40,000",
        premium: "$65,000+",
      },
    },

    // Contact
    manager: {
      name: "8bit Thug",
      email: "thug@8bitcreatives.com",
      phone: "+91 98765 XXXX",
      agency: "8bit Creatives",
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Creators
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <img
          src={influencer.bannerImage}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="flex items-end gap-6">
            <img
              src={influencer.profileImage}
              alt={influencer.name}
              className="w-40 h-40 rounded-full border-4 border-orange-500 object-cover"
            />
            <div>
              <h1 className="text-5xl font-bold">{influencer.name}</h1>
              <div className="mt-2 flex items-center gap-4">
                <span className="px-3 py-1 bg-orange-500 rounded-full text-sm font-bold">
                  {influencer.esportsCareer.role}
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-5 h-5 text-yellow-400" />
                  {influencer.tier} Gaming Influencer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Performance */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social Media Breakdown */}
            <Section
              title="Social Media Presence"
              icon={<BarChart2 className="text-blue-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SocialPlatform
                    platform="YouTube"
                    stats={influencer.socialStats.youtube}
                    icon={<Youtube className="w-8 h-8 text-red-500" />}
                  />
                  <SocialPlatform
                    platform="Instagram"
                    stats={influencer.socialStats.instagram}
                    icon={<Instagram className="w-8 h-8 text-pink-500" />}
                  />
                  <SocialPlatform
                    platform="Twitter"
                    stats={influencer.socialStats.twitter}
                    icon={<Twitter className="w-8 h-8 text-blue-400" />}
                  />
                  <SocialPlatform
                    platform="Twitch"
                    stats={influencer.socialStats.twitch}
                    icon={<Twitch className="w-8 h-8 text-purple-500" />}
                  />
                </div>
              </div>
            </Section>

            {/* Performance Snapshot */}
            <Section
              title="Performance Snapshot"
              icon={<ThumbsUp className="text-green-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <StatCard
                    label="Avg. Engagement Rate"
                    value={influencer.performanceMetrics.engagementRate}
                    highlight={true}
                  />
                  <StatCard
                    label="Content Quality Score"
                    value={influencer.performanceMetrics.contentQualityScore}
                  />
                  <StatCard
                    label="Audience Retention"
                    value={influencer.performanceMetrics.audienceRetention}
                  />
                  <StatCard
                    label="Click Through Rate"
                    value={influencer.performanceMetrics.clickThroughRate}
                  />
                  <StatCard
                    label="Consistency Rating"
                    value={influencer.performanceMetrics.consistencyRating}
                  />
                  <StatCard
                    label="Influence Score"
                    value={influencer.esportsCareer.influenceScore}
                  />
                </div>
              </div>
            </Section>

            {/* Past Collaborations */}
            <Section
              title="Brand Collaborations"
              icon={<Clipboard className="text-orange-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="space-y-6">
                  {influencer.pastCollaborations.map((collab, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-800 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl">{collab.brand}</h3>
                          <p className="text-orange-400">{collab.campaign}</p>
                        </div>
                        <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {collab.duration}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">
                            Deliverables & Performance
                          </h4>
                          <ul className="space-y-2">
                            {collab.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Campaign Results</h4>
                          <p className="mb-2">{collab.results}</p>
                          <div className="flex items-center gap-2">
                            <span>Brand Sentiment:</span>
                            <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                              {collab.brandSentiment}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* Collaboration Rates */}
            <Section
              title="Partnership Rates"
              icon={<DollarSign className="text-yellow-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">
                      Platform-Specific Rates
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(influencer.collaborationRates).map(
                        ([platform, rates]) => {
                          if (platform === "packageDeals") return null;
                          return (
                            <div
                              key={platform}
                              className="border-b border-gray-800 pb-4"
                            >
                              <h4 className="font-bold capitalize text-orange-400">
                                {platform}
                              </h4>
                              <div className="mt-2 space-y-2">
                                {Object.entries(rates).map(([type, price]) => (
                                  <div
                                    key={type}
                                    className="flex justify-between text-sm"
                                  >
                                    <span className="text-gray-400 capitalize">
                                      {type.replace(/_/g, " ")}:
                                    </span>
                                    <span className="font-medium">{price}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Package Deals</h3>
                    <div className="space-y-4">
                      {Object.entries(
                        influencer.collaborationRates.packageDeals
                      ).map(([packageName, price]) => (
                        <div
                          key={packageName}
                          className="border-b border-gray-800 pb-4"
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold capitalize text-orange-400">
                              {packageName} Package
                            </h4>
                            <span className="font-bold text-lg">{price}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-2">
                            {packageName === "premium"
                              ? "Full campaign across all platforms with dedicated content"
                              : packageName === "standard"
                              ? "Multi-platform campaign with 3+ deliverables"
                              : "Single platform campaign with 2 deliverables"}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-orange-500/30">
                      <h4 className="font-bold text-orange-400 mb-2">
                        Custom Campaigns Available
                      </h4>
                      <p className="text-sm">
                        Contact manager to discuss tailored partnership
                        opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            {/* Connect */}
            <Section title="Connect" icon={<Heart className="text-red-400" />}>
              <div className=" bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-4">Business Contact</h3>
                <div className="grid grid-cols-4">
                  <ContactItem
                    label="Management Agency"
                    value={influencer.manager.agency}
                  />
                  <ContactItem
                    label="Manager"
                    value={influencer.manager.name}
                  />
                  <ContactItem
                    label="Email"
                    value={influencer.manager.email}
                    type="email"
                  />
                  <ContactItem
                    label="Phone"
                    value={influencer.manager.phone}
                    type="phone"
                  />
                </div>

                <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-orange-500/30">
                  <h4 className="font-bold text-orange-400 mb-2">
                    Partnership Process
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Initial consultation call</li>
                    <li>Campaign proposal</li>
                    <li>Content strategy development</li>
                    <li>Execution & reporting</li>
                  </ol>
                </div>
              </div>
            </Section>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Esports Career */}
            <Section
              title="Esports Career"
              icon={<Award className="text-yellow-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Users className="text-blue-400" />
                    Current Team: {influencer.esportsCareer.team}
                  </h3>
                  <p className="text-gray-400">
                    Role: {influencer.esportsCareer.role}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <DollarSign className="text-green-400" />
                    Tournament Earnings:{" "}
                    {influencer.esportsCareer.tournamentEarnings}
                  </h3>
                  <p className="text-gray-400">
                    Brand Value: {influencer.esportsCareer.brandValue}
                  </p>
                </div>

                <h3 className="font-bold text-lg mb-3">Career Highlights</h3>
                <ul className="space-y-2">
                  {influencer.esportsCareer.achievements.map(
                    (achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Section>

            {/* Audience Profile */}
            <Section
              title="Audience Profile"
              icon={<Users className="text-pink-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3">Demographics</h3>
                <div className="space-y-3">
                  <StatCard
                    label="Male/Female"
                    value={`${influencer.audienceProfile.demographics.male}/${influencer.audienceProfile.demographics.female}`}
                  />

                  <div>
                    <h4 className="font-medium mb-2">Age Distribution</h4>
                    {Object.entries(
                      influencer.audienceProfile.demographics.ageGroups
                    ).map(([range, percent]) => (
                      <div key={range} className="flex items-center gap-3 mb-2">
                        <span className="w-16 text-gray-400">{range}</span>
                        <div className="flex-1 bg-gray-800 rounded-full h-2.5">
                          <div
                            className="bg-orange-500 h-2.5 rounded-full"
                            style={{ width: percent }}
                          ></div>
                        </div>
                        <span className="w-10 text-right">{percent}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Top Countries</h4>
                    <ul className="space-y-1">
                      {influencer.audienceProfile.demographics.topCountries.map(
                        (country, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="text-orange-400">•</span>
                            <span>{country}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-3">
                  Audience Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {influencer.audienceProfile.interests.map(
                    (interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    )
                  )}
                </div>

                <h3 className="font-bold text-lg mt-6 mb-3">
                  Purchasing Behavior
                </h3>
                <div className="space-y-2">
                  {Object.entries(
                    influencer.audienceProfile.purchasingBehavior
                  ).map(([category, level]) => (
                    <div
                      key={category}
                      className="flex justify-between capitalize"
                    >
                      <span className="text-gray-400">{category}:</span>
                      <span className="font-medium">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* Streaming Analytics */}
            <Section
              title="Streaming Analytics"
              icon={<Monitor className="text-purple-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="space-y-4">
                  <StatCard
                    label="Average Viewers"
                    value={influencer.streamingAnalytics.avgViewers}
                  />
                  <StatCard
                    label="Peak Viewers"
                    value={influencer.streamingAnalytics.peakViewers}
                  />
                  <StatCard
                    label="Avg. Stream Duration"
                    value={influencer.streamingAnalytics.avgDuration}
                  />
                  <StatCard
                    label="Stream Schedule"
                    value={influencer.streamingAnalytics.schedule}
                  />
                  <StatCard
                    label="Days Per Week"
                    value={influencer.streamingAnalytics.daysPerWeek}
                  />
                  <StatCard
                    label="Chat Activity"
                    value={influencer.streamingAnalytics.chatActivity}
                  />
                  <StatCard
                    label="Viewer Engagement"
                    value={influencer.streamingAnalytics.viewerEngagement}
                  />
                </div>
              </div>
            </Section>

            {/* Streaming Setup */}
            <Section
              title="Streaming Setup"
              icon={<Headphones className="text-green-400" />}
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3">Equipment</h3>
                <div className="space-y-2">
                  {Object.entries(influencer.streamingSetup.equipment).map(
                    ([item, brand]) => (
                      <div
                        key={item}
                        className="flex justify-between capitalize"
                      >
                        <span className="text-gray-400">{item}:</span>
                        <span className="font-medium">{brand}</span>
                      </div>
                    )
                  )}
                </div>

                <h3 className="font-bold text-lg mt-6 mb-3">
                  Software & Production
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Software:</span>
                    <span className="font-medium">
                      {influencer.streamingSetup.software.join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Production Quality:</span>
                    <span className="font-medium">
                      {influencer.streamingSetup.productionQuality}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-3">
                  Brand Integration Features
                </h3>
                <ul className="space-y-2">
                  {influencer.streamingSetup.streamFeatures.map(
                    (feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const Section = ({ title, icon, children }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
      {icon}
      {title}
    </h2>
    {children}
  </div>
);

const SocialPlatform = ({ platform, stats, icon }) => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="font-bold text-lg">{platform}</h3>
    </div>

    <div className="space-y-2">
      {Object.entries(stats).map(([key, value]) => {
        if (key === "link") return null;
        return (
          <div key={key} className="flex justify-between text-sm">
            <span className="text-gray-400 capitalize">
              {key.replace(/([A-Z])/g, " $1")}:
            </span>
            <span className="font-medium">{value}</span>
          </div>
        );
      })}
    </div>

    <a
      href={stats.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-orange-400 hover:text-orange-300 text-sm"
    >
      View Profile →
    </a>
  </div>
);

const StatCard = ({ label, value, highlight = false }) => (
  <div
    className={`p-3 rounded-lg border ${
      highlight
        ? "border-orange-500 bg-orange-500/10"
        : "border-gray-700 bg-gray-800/50"
    }`}
  >
    <p className="text-sm text-gray-400">{label}</p>
    <p className={`text-lg font-bold ${highlight ? "text-orange-400" : ""}`}>
      {value}
    </p>
  </div>
);

const ContactItem = ({ label, value, type }) => (
  <div>
    <div className="text-sm text-gray-400">{label}</div>
    {type === "email" ? (
      <a
        href={`mailto:${value}`}
        className="font-medium hover:text-blue-400 transition-colors"
      >
        {value}
      </a>
    ) : type === "phone" ? (
      <a
        href={`tel:${value.replace(/\D/g, "")}`}
        className="font-medium hover:text-blue-400 transition-colors"
      >
        {value}
      </a>
    ) : (
      <div className="font-medium">{value}</div>
    )}
  </div>
);

export default BrandInfluencerProfile;
