import React from "react";
import {
  Gamepad2,
  MapPin,
  Briefcase,
  Rocket,
  FileText,
  ArrowRight,
  Users,
  Mic2,
  PenTool,
  Monitor,
  Award,
} from "lucide-react";

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Esports Tournament Manager",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Plan, coordinate, and execute large-scale esports tournaments, both online and offline.",
      icon: <Gamepad2 className="w-6 h-6 text-orange-400" />,
      perks: ["Competitive Salary", "Tournament Tickets", "Flexible Schedule"],
    },
    {
      title: "Content Creator (Gaming)",
      location: "Remote",
      type: "Part-time",
      description:
        "Create engaging gaming videos, livestreams, and social content to grow our community.",
      icon: <Monitor className="w-6 h-6 text-orange-400" />,
      perks: ["Equipment Stipend", "Creative Freedom", "Revenue Share"],
    },
    {
      title: "Shoutcaster / Commentator",
      location: "Delhi, India",
      type: "Contract",
      description:
        "Deliver energetic live commentary for esports matches and events.",
      icon: <Mic2 className="w-6 h-6 text-orange-400" />,
      perks: ["Event Access", "Travel Opportunities", "Brand Exposure"],
    },
    {
      title: "Graphic Designer (Esports)",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Design tournament graphics, team branding, and promotional assets for esports events.",
      icon: <PenTool className="w-6 h-6 text-orange-400" />,
      perks: ["Latest Software", "Creative Team", "Portfolio Building"],
    },
    {
      title: "Social Media Manager",
      location: "Remote",
      type: "Full-time",
      description:
        "Manage and grow our esports social presence across platforms, engaging fans and promoting content.",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      perks: ["Analytics Tools", "Content Budget", "Performance Bonuses"],
    },
    {
      title: "Esports Team Coach",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Develop training programs and strategies for competitive esports teams across multiple titles.",
      icon: <Award className="w-6 h-6 text-orange-400" />,
      perks: ["Team Travel", "Competition Fees", "Player Development"],
    },
  ];

  const perks = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses",
      icon: "💰",
    },
    {
      title: "Flexible Work",
      description: "Remote options and flexible schedules",
      icon: "⏱️",
    },
    {
      title: "Gaming Setup",
      description: "High-end gaming gear and tech allowance",
      icon: "🎮",
    },
    {
      title: "Event Access",
      description: "VIP passes to major esports tournaments",
      icon: "🎟️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 85, 0, 0.1) 0%, transparent 70%), 
                            linear-gradient(0deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%),
                            linear-gradient(90deg, transparent 49%, rgba(255, 85, 0, 0.05) 50%, transparent 51%)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-orange-500/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-300/30">
            <Rocket className="w-5 h-5 mr-2 text-orange-300" />
            <span className="text-sm font-medium">JOIN OUR TEAM</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
              Careers
            </span>{" "}
            in Gaming & Esports
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our mission to shape the future of Indian gaming and esports.
            Whether you’re a player, creator, or industry pro, there’s a place
            for you here.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 px-6 lg:px-20 border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Our Team?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer more than just a job - we offer a gaming lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-6 hover:border-orange-300/50 transition-all hover:shadow-[0_0_20px_0_rgba(255,85,0,0.2)]"
              >
                <div className="text-3xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-400">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore opportunities to turn your passion for gaming into a
              career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-orange-300/20 p-6 hover:border-orange-300/50 transition-all group hover:shadow-[0_0_20px_0_rgba(255,85,0,0.2)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gray-800 border border-orange-300/20">
                    {job.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" /> {job.location}
                      </span>
                      <span className="flex items-center text-sm text-gray-400">
                        <Briefcase className="w-4 h-4 mr-1" /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{job.description}</p>

                <div className="mb-6">
                  <h3 className="text-orange-400 text-sm font-medium mb-2">
                    PERKS & BENEFITS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.perks.map((perk, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 border border-orange-300/20"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-red-500/50 to-orange-500/50 border border-orange-300/20 text-white rounded-xl flex items-center justify-center gap-2 font-medium hover:from-red-500 hover:to-orange-500 transition-all group-hover:shadow-[0_0_15px_2px_rgba(255,85,0,0.5)]">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 rounded-3xl border border-orange-300/30 p-12 text-center relative overflow-hidden shadow-[0_0_30px_5px_rgba(255,50,0,0.3)]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1)),
                                   linear-gradient(45deg, rgba(255, 50, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 50, 0, 0.1) 75%, rgba(255, 50, 0, 0.1))`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't see your dream role?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for passionate gamers and creators to join
              our team. Send us your resume and tell us how you can contribute!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl flex items-center gap-2 font-bold hover:bg-gray-200 transition-all shadow-lg">
                Submit Resume <FileText className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-900/80 border border-orange-300/30 text-white rounded-xl flex items-center gap-2 font-bold hover:bg-orange-500/10 transition-all">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-6 lg:px-20 border-t border-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Gaming Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Work hard, play hard in an environment built for gamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1475')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Team Tournaments
                </h3>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Creative Spaces
                </h3>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Event Experiences
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
