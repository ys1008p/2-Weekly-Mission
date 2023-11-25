import { useEffect } from "react";
import { useUserAction } from "./use-user";
import { getUser } from "../_api/api";

export default function useUserQuery() {
  const { setUser } = useUserAction();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    fetchUser();
  }, []);
}
