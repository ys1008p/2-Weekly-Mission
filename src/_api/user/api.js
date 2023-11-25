import Fetcher from "/src/_util/Fetcher";

const fetcher = new Fetcher({ baseURL: "https://bootcamp-api.codeit.kr/api" });

export const getUser = async () => {
  const user = await fetcher.get("/sample/user");
  // TODO: schema validation

  return user;
};
