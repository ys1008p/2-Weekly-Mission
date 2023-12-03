import { serverFetcher } from "@/utils/common/Fetcher";

export const getLinkList = async (userId, folderId) => {
  const linkList = await serverFetcher.get(`/users/${userId}/links`, {
    queryParams: {
      folderId,
    },
  });

  return linkList;
};
