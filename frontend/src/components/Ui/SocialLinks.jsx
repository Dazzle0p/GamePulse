import React from "react";
import { Youtube, Twitch, Instagram, Twitter } from "lucide-react";

const SocialLinks = ({ links, size = "default" }) => {
  const iconSize = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex justify-center space-x-3">
      {links.youtube && (
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gpdark hover:bg-red-500 rounded-full flex items-center justify-center transition-colors group/link ${
            size === "small" ? "w-8 h-8" : "w-10 h-10"
          }`}
        >
          <Youtube
            className={`text-gpgray group-hover/link:text-white ${iconSize}`}
          />
        </a>
      )}
      {links.twitch && (
        <a
          href={links.twitch}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gpdark hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors group/link ${
            size === "small" ? "w-8 h-8" : "w-10 h-10"
          }`}
        >
          <Twitch
            className={`text-gpgray group-hover/link:text-white ${iconSize}`}
          />
        </a>
      )}
      {links.instagram && (
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gpdark hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors group/link ${
            size === "small" ? "w-8 h-8" : "w-10 h-10"
          }`}
        >
          <Instagram
            className={`text-gpgray group-hover/link:text-white ${iconSize}`}
          />
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gpdark hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors group/link ${
            size === "small" ? "w-8 h-8" : "w-10 h-10"
          }`}
        >
          <Twitter
            className={`text-gpgray group-hover/link:text-white ${iconSize}`}
          />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
