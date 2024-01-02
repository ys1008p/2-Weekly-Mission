import { Folder } from "@/types/shared-type";
import { serverFetcher } from "@/utils/common/Fetcher";

export const getSampleFolder = async () => {
	const folder: { folder: Folder } = await serverFetcher.get("/sample/folder");
	// TODO: schema validation

	return folder;
};
