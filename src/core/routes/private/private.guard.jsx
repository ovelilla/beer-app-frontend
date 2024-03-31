// Vendors
import { Navigate, Outlet } from "react-router-dom";
// Components
import { Loading } from "@/components/loading/loading.component";
// Constants
import constants from "./constants/private.constants";
// Hooks
import PrivateHook from "./hooks/private.hook";

const PrivateGuard = () => {
  const { user, loading } = PrivateHook();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={constants.REDIRECT_PATH} />;
  }

  return <Outlet />;
};

export default PrivateGuard;
