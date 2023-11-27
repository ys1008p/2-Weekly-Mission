import Fetcher from "/src/_util/Fetcher";

const fetcher = new Fetcher({ baseURL: import.meta.env.VITE_API_ENDPOINT });

export const getFolder = async () => {
  const folder = await fetcher.get("/sample/folder");
  // TODO: schema validation

  return folder;
};
