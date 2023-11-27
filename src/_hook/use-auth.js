import { useContext } from "react";
import { AuthActionContext, AuthContext } from "/src/_provider/AuthProvider";

export const useAuth = () => {
  const isLoggedIn = useContext(AuthContext);

  return isLoggedIn;
};

export const useAuthAction = () => {
  const authAction = useContext(AuthActionContext);

  return authAction;
};
