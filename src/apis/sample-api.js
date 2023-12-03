import { serverFetcher } from "@/utils/common/Fetcher";

export const getSampleFolder = async () => {
  const folder = await serverFetcher.get("/sample/folder");
  // TODO: schema validation

  return folder;
};
