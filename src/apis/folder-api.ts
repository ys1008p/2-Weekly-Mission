import { serverFetcher } from "@/utils/common/Fetcher";

export const getFolderList = async (userId: number) => {
	const folderList = await serverFetcher.get(`/users/${userId}/folders`);

	return folderList;
};
