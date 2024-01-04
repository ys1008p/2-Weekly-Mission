import { serverFetcher } from "@/utils/common/Fetcher";

export const getLinkList = async (userId: number, folderId: number) => {
	const linkList = await serverFetcher.get(`/users/${userId}/links`, {
		queryParams: {
			folderId: folderId.toString(),
		},
	});

	return linkList;
};
