import React from "react";
import MagicBento from "../Ui/MagicBento";

export const FeaturedGames = () => {
  const games = [
    {
      title: "Valorant Mobile",
      description: "The tactical FPS is coming to mobile!",
      status: "Upcoming",
      cta: "Pre-Register",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887", // Add image here
    },
    {
      title: "PUBG: New State",
      description: "Next-gen battle royale with stunning graphics.",
      status: "Trending",
      cta: "Download Now",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
    },
    {
      title: "GTA VI",
      description: "Rockstar's legendary open-world saga continues.",
      status: "Coming Soon",
      cta: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
    },
    {
      title: "GTA VI",
      description: "Rockstar's legendary open-world saga continues.",
      status: "Coming Soon",
      cta: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
    },
    {
      title: "GTA VI",
      description: "Rockstar's legendary open-world saga continues.",
      status: "Coming Soon",
      cta: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
    },
    {
      title: "GTA VI",
      description: "Rockstar's legendary open-world saga continues.",
      status: "Coming Soon",
      cta: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-orange-500">Games</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Checkout Trending and Upcoming Games
        </p>
      </div>
      <div className="flex justify-center">
        <MagicBento enableSpotlight enableStars games={games} />
      </div>
    </div>
  );
};
