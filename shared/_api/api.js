import Fetcher from "./Fetcher";

const fetcher = new Fetcher({ baseURL: "https://bootcamp-api.codeit.kr/api" });

export const getFolder = async () => {
  const folder = await fetcher.get("/sample/folder");
  // TODO: schema validation

  return folder;
};

export const getUser = async () => {
  const user = await fetcher.get("/sample/user");
  // TODO: schema validation

  return user;
};
