import { useEffect } from "react";
import { useUser, useUserAction } from "./use-user";
import { getUser } from "../_api/api";

export default function useUserQuery() {
  const user = useUser();
  const { setUser } = useUserAction();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return user;
}
