import { Link } from "react-router-dom";
import MobileLink from "../Ui/MobileLink";
import NavLink from "../Ui/NavLink";
import useLogout from "../../hooks/useLogout";
import {
  HomeIcon,
  ServerIcon,
  Trophy,
  Users,
  Newspaper,
  Menu,
  X,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = localStorage.getItem("user");
  const logout = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/30 backdrop-blur-md shadow-gpglow">
      <div className=" flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gpred-300 to-gporange-300 group-hover:from-gpred-500 group-hover:to-gporange-500 transition-all">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
            GamePulse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={HomeIcon}>
            Home
          </NavLink>
          <NavLink to="/services" icon={ServerIcon}>
            Services
          </NavLink>
          <NavLink to="/esports" icon={Trophy}>
            Esports
          </NavLink>
          <NavLink to="/etalent" icon={Users}>
            E-Talents
          </NavLink>
          <NavLink to="/news" icon={Newspaper}>
            Community
          </NavLink>
          {/* <NavLink
            to="/shop"
            target="_blank"
            rel="noopener noreferrer"
            icon={ShoppingBag}
          >
            Shop
          </NavLink> */}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                className="hidden md:block items-center space-x-2 p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gpred-300 to-gporange-300">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary">Join IGC</Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gpgray hover:text-white hover:bg-gpdark transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gporange-300" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
};

const Button = ({
  variant = "primary",
  children,
  fullWidth = false,
  onClick,
}) => {
  const baseClasses = `${
    fullWidth ? "w-full block" : "hidden md:inline-flex"
  } items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300`;

  const variants = {
    primary:
      "bg-gradient-to-r from-gpred-300 to-gporange-300 text-white shadow-gpglow-md hover:from-gpred-500 hover:to-gporange-500 hover:shadow-gpglow-lg",
    secondary:
      "border border-gpred-500 text-gporange-500 hover:text-white hover:bg-gradient-to-r hover:from-gpred-300/30 hover:to-gporange-300/30",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const MobileMenu = ({ onClose }) => {
  const logout = useLogout();
  const user = localStorage.getItem("user");
  return (
    <div className="md:hidden border-t border-white/20 bg-black/30 backdrop-blur-md shadow-gpglow">
      <nav className="container py-4 px-4 space-y-4">
        <MobileLink to="/organizations" icon={HomeIcon} onClose={onClose}>
          Home
        </MobileLink>
        <MobileLink to="/esports" icon={Trophy} onClose={onClose}>
          Esports
        </MobileLink>
        <MobileLink to="/creators" icon={Users} onClose={onClose}>
          E-talents
        </MobileLink>
        <MobileLink to="/news" icon={Newspaper} onClose={onClose}>
          Community
        </MobileLink>
        <MobileLink
          to="/shop"
          target="_blank"
          rel="noopener noreferrer"
          icon={ShoppingBag}
          onClose={onClose}
        >
          Shop
        </MobileLink>

        {user ? (
          <div className="space-y-4">
            <MobileLink to="/profile" icon={Users} onClose={onClose}>
              Profile
            </MobileLink>
            <Button fullWidth onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <>
            <MobileLink to="/login" icon={Users} onClose={onClose}>
              Login
            </MobileLink>
            <MobileLink to="/signup" icon={Users} onClose={onClose}>
              Join Igc
            </MobileLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
