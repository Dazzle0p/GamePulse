import { Trophy, Users, Calendar, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import bgVideo from "../../assets/bgVideo1.mp4";

const Hero = () => {
  return (
    <>
      <section className="min-h-[91.25vh] relative  px-4  overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ filter: "opacity(30%)" }}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="creepster-regular text-gradient-redorange absolute md:bottom-5 md:right-5 z-40 uppercase text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]">
          GAMING
        </h2>
        {/* This div is now only for the overlay/content */}
        <div className="md:left-5 mx-auto relative z-10">
          <div className=" space-y-6">
            <h1 className="creepster-regular text-gradient-redorange text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-blue-50">
              REDEFINE
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-400 text-shadow-md text-shadow-black ">
              Unite gamers, creators, and champions - your gateway to
              <br />
              tournaments, community, and the future of Indian esports.
            </p>
          </div>

          <div className="mt-15 flex flex-col sm:flex-row gap-4">
            <Link
              to="/aboutUs"
              className="px-8 py-4 bg-orangered  text-gpblack rounded-lg flex items-center justify-center gap-2 hover:from-gpred-600 hover:to-gporange-600 transition-all shadow-gpglow-md hover:shadow-gpglow-lg"
            >
              <Trophy className="h-5 w-5" />
              <span className="font-bold">About Us</span>
            </Link>
            <Link
              to="/Gaming-Esports"
              className="px-8 py-4 border-2 border-gporange-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gporange-300/10 transition-all"
            >
              <Play className="h-5 w-5" />
              <span className="font-bold">Gaming & Esports</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
