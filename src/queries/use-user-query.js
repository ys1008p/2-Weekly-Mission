import { useEffect } from "react";
import { getUser } from "@/apis/user-api";
import { useUserAction } from "@/hooks/use-user";

export const useUserQuery = (userId) => {
  const { setUser } = useUserAction();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user } = await getUser(userId);
      setUser(user.at(0));
    };

    fetchUser();
  }, []);
};
