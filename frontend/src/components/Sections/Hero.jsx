import { Trophy, Users, Calendar, Zap, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="min-h-[91.25vh] relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover opacity-20"></div>
        <div className="mt-5 max-w-6xl mx-auto space-y-8 relative z-10 items-center">
          <div className=" space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
              Game Pulse
            </h1>
            <p className="text-xl md:text-2xl text-gpgray">
              Unite gamers, creators, and champions — your gateway to
              tournaments, community, and the future of Indian esports.
            </p>
          </div>

          <div className="mt-15 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/aboutUs"
              className="px-8 py-4 bg-gradient-to-r from-gpred-500 to-gporange-500 text-white rounded-lg flex items-center justify-center gap-2 hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg"
            >
              <Trophy className="h-5 w-5" />
              <span className="font-medium">Know About Us</span>
            </Link>
            <button className="px-8 py-4 border-2 border-gporange-300 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-gporange-300/10 transition-all">
              <Play className="h-5 w-5" />
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <Users className="h-10 w-10 mx-auto" />,
                value: "500+",
                label: "Organizations",
              },
              {
                icon: <Calendar className="h-10 w-10 mx-auto" />,
                value: "1000+",
                label: "Tournaments",
              },
              {
                icon: <Star className="h-10 w-10 mx-auto" />,
                value: "50K+",
                label: "Community Members",
              },
            ].map((stat, index) => (
              <div
                key={index}
                //className="bg-gpdark/80 backdrop-blur-sm p-6 rounded-xl border border-gporange-300/20 text-center hover:border-gporange-300/50 transition-all"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                <p className="text-gpgray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
