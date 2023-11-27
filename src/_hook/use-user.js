import { useContext } from "react";
import { UserActionContext, UserContext } from "/src/_provider/UserProvider";

export const useUser = () => {
  const user = useContext(UserContext);

  return user;
};

export const useUserAction = () => {
  const userAction = useContext(UserActionContext);

  return userAction;
};
