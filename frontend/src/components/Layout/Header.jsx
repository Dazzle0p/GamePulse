import { Link } from "react-router-dom";
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
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Join IGC</Button>
          </Link>

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

// Extracted components remain the same as previous example
const NavLink = ({ to, icon: Icon, children, ...rest }) => (
  <Link
    to={to}
    {...rest} // ✅ passes target, rel, etc.
    className="text-gpgray hover:text-white transition-colors group"
  >
    <div className="flex items-center space-x-2">
      <Icon className="h-4 w-4 text-gporange-300 group-hover:text-gpred-300" />
      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-gpred-300 after:to-gporange-300 after:transition-all group-hover:after:w-full">
        {children}
      </span>
    </div>
  </Link>
);

const Button = ({ variant = "primary", children, fullWidth = false }) => {
  const baseClasses = `${
    fullWidth ? "w-full" : "hidden md:inline-flex"
  } items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300`;

  const variants = {
    primary:
      "bg-gradient-to-r from-gpred-300 to-gporange-300 text-white shadow-gpglow-md hover:from-gpred-500 hover:to-gporange-500 hover:shadow-gpglow-lg",
    secondary:
      "border border-gpred-500 text-gporange-500 hover:text-white hover:bg-gradient-to-r hover:from-gpred-300/30 hover:to-gporange-300/30",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const MobileMenu = ({ onClose }) => (
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
      <div className="space-y-3 pt-4 border-t border-gpdark">
        <Link to="/login">
          <Button className="p-2" variant="secondary" fullWidth>
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="primary" fullWidth>
            Join IGC
          </Button>
        </Link>
      </div>
    </nav>
  </div>
);

const MobileLink = ({ to, icon: Icon, children, onClose, ...rest }) => (
  <Link
    to={to}
    {...rest} // ✅ passes target, rel, etc.
    className="block py-2 px-4 text-gpgray hover:text-white hover:bg-gradient-to-r hover:from-gpred-300/20 hover:to-gporange-300/20 rounded-md transition-all"
    onClick={onClose}
  >
    <div className="flex items-center space-x-3">
      <Icon className="h-5 w-5 text-gporange-300" />
      <span>{children}</span>
    </div>
  </Link>
);

export default Header;
