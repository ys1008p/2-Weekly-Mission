import { useEffect } from "react";
import { getUser } from "@/apis/user-api";
import { useUserAction } from "@/hooks/use-user";

export const useUserQuery = (userId: number | null) => {
	const { setUser } = useUserAction();

	useEffect(() => {
		if (userId === null || userId === undefined) return () => {};
		const fetchUser = async () => {
			const { data: user } = await getUser(userId);
			setUser(user.at(0));
		};

		fetchUser();
	}, [userId, setUser]);
};
