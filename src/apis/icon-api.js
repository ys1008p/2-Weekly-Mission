import Fetcher from "@/utils/common/Fetcher";

const fetcher = new Fetcher({
  baseURL:
    "https://res.cloudinary.com/divjslgco/image/upload/v1698465630/codeit/icons",
  headers: {},
});

export const getIcon = async (name) => {
  const icon = await fetcher.get(`/${name}.svg`, { type: "text" });

  return icon;
};
