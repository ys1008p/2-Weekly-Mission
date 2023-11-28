import { useEffect } from "react";
import { getUser } from "@/apis/user-api";
import { useUserAction } from "@/hooks/use-user";

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
