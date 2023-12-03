import { serverFetcher } from "@/utils/common/Fetcher";

export const getUser = async (userId) => {
  const user = await serverFetcher.get(`/users/${userId}`);
  // TODO: schema validation

  return user;
};
