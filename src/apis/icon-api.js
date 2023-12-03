import { iconFetcher } from "@/utils/common/Fetcher";

export const getIcon = async (name) => {
  const icon = await iconFetcher.get(`/${name}.svg`, { type: "text" });

  return icon;
};
