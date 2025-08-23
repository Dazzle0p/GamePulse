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
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = localStorage.getItem("user");
  const logout = useLogout();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gporange-300 bg-gpblack shadow-gpglow">
      <div className="container flex h-16 items-center justify-between px-4">
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
            <Button onClick={logout}>Logout</Button>
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
    <div className="md:hidden border-t border-gporange-300 bg-gpblack shadow-gpglow">
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
          <Button fullWidth onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <MobileLink to="/login" icon={Users}>
              Login
            </MobileLink>
            <MobileLink to="/signup" icon={Users}>
              Join Igc
            </MobileLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
