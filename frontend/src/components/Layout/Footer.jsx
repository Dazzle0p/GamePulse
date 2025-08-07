import { Link } from "react-router-dom";
import { Trophy, Twitter, Instagram, Youtube, Twitch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gpblack border-t border-gporange-300">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gpred-300 to-gporange-300">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
                Game Pulse
              </span>
            </Link>
            <p className="text-gpgray text-sm">
              Empowering the Indian Gaming Community with comprehensive esports
              infrastructure.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gpgray hover:text-gporange-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gpgray hover:text-gporange-300 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gpgray hover:text-gporange-300 cursor-pointer transition-colors" />
              <Twitch className="h-5 w-5 text-gpgray hover:text-gporange-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Platform</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/organizations"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Organizations
              </Link>
              <Link
                to="/organizers"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Tournament Organizers
              </Link>
              <Link
                to="/creators"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Creators & Influencers
              </Link>
              <Link
                to="/brands"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Brand Partnerships
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Community</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/news"
                className="block text-gpgray hover:text-white transition-colors"
              >
                News & Updates
              </Link>
              <Link
                to="/forums"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Community Forums
              </Link>
              <Link
                to="/events"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Upcoming Events
              </Link>
              <Link
                to="/leaderboards"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Leaderboards
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/help"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Help Center
              </Link>
              <Link
                to="/contact"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/api"
                className="block text-gpgray hover:text-white transition-colors"
              >
                API Documentation
              </Link>
              <Link
                to="/careers"
                className="block text-gpgray hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gporange-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gpgray text-sm">
            © 2024 IGC Platform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gpgray text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gpgray text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
