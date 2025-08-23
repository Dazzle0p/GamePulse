import { Link } from "react-router-dom";
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

export default NavLink;
