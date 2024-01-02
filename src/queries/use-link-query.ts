import { getLinkList } from "@/apis/link-api";
import { useEffect, useState } from "react";

export const useLinkListQuery = (userId: number | null, folderId: number) => {
	const [linkList, setLinkList] = useState([]);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!userId) return () => {};
		let ignore = false;
		const fetchLinkList = async () => {
			try {
				const { data: linkList } = await getLinkList(userId, folderId);
				if (!ignore) {
					setLinkList(linkList);
				}
			} catch (err) {
				if (err instanceof Error) setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		setIsLoading(true);
		fetchLinkList();

		return () => {
			ignore = true;
		};
	}, [userId, folderId]);

	return { linkList, isLoading, error };
};
