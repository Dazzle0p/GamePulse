import { Link } from "react-router-dom";

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
export default MobileLink;
