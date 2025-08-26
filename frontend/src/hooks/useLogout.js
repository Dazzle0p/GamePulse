import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("You have been logged out successfully");
  };

  return logout;
};

export default useLogout;
