import React from "react";
import { CoreServices } from "../Sections/CoreServices";
import {
  Trophy,
  Users,
  BarChart,
  HeartHandshake,
  Gamepad,
  ArrowRight,
  Shield,
  Briefcase,
  Calendar,
  Globe,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function AboutUs() {
  // Team members
  const teamMembers = [
    {
      name: "Sushant Jha",
      role: "Founder & CEO",
      bio: "Former esports pro with 10+ years in gaming industry",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Harsh Baghel",
      role: "Head of Events",
      bio: "Organized 50+ tournaments across India",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Abhinav Kumar",
      role: "Tech Lead",
      bio: "Built gaming platforms for 1M+ users",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Rohit Kumar",
      role: "Community Manager",
      bio: "Grew communities to 500K+ members",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  // Core values
  const coreValues = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community First",
      description: "We prioritize player connections and inclusive spaces",
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Fair Play",
      description: "Zero tolerance for toxicity, cheating, or exploitation",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "Competitive Integrity",
      description: "Transparent rules and equal opportunity for all",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Indian Pride",
      description: "Showcasing and elevating homegrown talent globally",
    },
  ];

  // Milestones
  const milestones = [
    { year: "2018", event: "Founded with first local tournament" },
    { year: "2019", event: "Launched creator support program" },
    { year: "2020", event: "10,000 registered players milestone" },
    { year: "2021", event: "First national championship" },
    { year: "2022", event: "Partnership with major gaming brands" },
    { year: "2023", event: "Expanded to 5 game titles" },
    { year: "2024", event: "Launched mobile app with 100K downloads" },
  ];

  // Stats
  const stats = [
    { value: "200K+", label: "Active Players" },
    { value: "5K+", label: "Tournaments Hosted" },
    { value: "1.2M+", label: "Community Members" },
    { value: "50+", label: "Brand Partnerships" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 mb-6">
                <Gamepad className="w-5 h-5 text-orange-300" />
                <span className="text-sm font-medium">
                  LEVELING UP INDIAN GAMING
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                We're Building India's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Gaming Future
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                From grassroots tournaments to international stages, we're
                creating opportunities for players, creators, and fans across
                the gaming ecosystem.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold hover:from-red-700 hover:to-orange-600 transition-all"
                >
                  Our Mission <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-400 font-semibold hover:bg-orange-500/10"
                >
                  Meet Our Team
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/5">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-orange-500/20">
                <div className="aspect-video bg-gray-700 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000')] bg-cover bg-center"></div>
                </div>
                <div className="text-center">
                  <p className="text-lg mb-2">
                    Featured Tournament: National Championship 2024
                  </p>
                  <div className="inline-flex items-center gap-2 text-orange-400">
                    <Calendar className="w-5 h-5" />
                    <span>June 15-18, 2024 | Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-orange-500">Mission</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 mb-8">
              <p className="text-xl text-gray-300 mb-6">
                To create India's most inclusive and empowering gaming ecosystem
                where every player can compete, every creator can thrive, and
                every fan feels at home.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-bold">✓</span>
                  </div>
                  <span>Democratize competitive gaming opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-bold">✓</span>
                  </div>
                  <span>Develop sustainable careers in gaming and esports</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-bold">✓</span>
                  </div>
                  <span>Elevate India's position in global esports</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-orange-500">Vision</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <p className="text-xl text-gray-300 mb-6">
                To become India's premier gaming platform that discovers,
                nurtures, and propels gaming talent onto the world stage while
                building a sustainable ecosystem for all stakeholders.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-gray-800/30 to-transparent p-4 rounded-xl border border-gray-700 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-2xl">
            We provide comprehensive solutions for every aspect of the gaming
            ecosystem
          </p>
        </div>
        <CoreServices />
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 mb-6">
            <HeartHandshake className="w-5 h-5 text-orange-300" />
            <span className="text-sm font-medium">OUR FOUNDATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-orange-500">Values</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide every decision we make and every
            tournament we host
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-orange-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 pl-10 md:pl-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative max-w-md ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-40px] md:left-1/2 top-4 w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center transform md:-translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700">
                  <div className="text-orange-400 font-bold mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 mb-6">
            <Users className="w-5 h-5 text-orange-300" />
            <span className="text-sm font-medium">THE PLAYMAKERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate gamers and industry veterans building India's gaming
            ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-orange-500 transition-all"
            >
              <div className="h-48 bg-gray-700 relative">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000')] bg-cover bg-center"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-orange-400">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-400 font-semibold hover:bg-orange-500/10">
            View Open Positions <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-orange-500">Partner</span> With
                Us?
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you're a brand looking to reach gamers, a tournament
                organizer seeking platform support, or a player with questions -
                we'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-gray-400">contact@gamingplatform.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Office</h4>
                    <p className="text-gray-400">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-bold hover:from-red-700 hover:to-orange-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-orange-500/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join India's Fastest Growing{" "}
            <span className="text-orange-500">Gaming Community</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're a player, creator, or just a gaming enthusiast -
            there's a place for you in our ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium flex items-center gap-2 hover:from-red-700 hover:to-orange-600 transition-all">
              Create Account <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3.5 border border-orange-500 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-colors">
              Explore Tournaments
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
