import Fetcher from "/src/_util/Fetcher";

const fetcher = new Fetcher({ baseURL: "https://bootcamp-api.codeit.kr/api" });

export const getFolder = async () => {
  const folder = await fetcher.get("/sample/folder");
  // TODO: schema validation

  return folder;
};
