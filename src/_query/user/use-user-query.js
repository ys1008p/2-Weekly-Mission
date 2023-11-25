import { useEffect } from "react";
import { useUserAction } from "/src/_hook/use-user";
import { getUser } from "/src/_api/user/api";

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
