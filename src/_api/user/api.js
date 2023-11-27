import Fetcher from "/src/_util/Fetcher";

const fetcher = new Fetcher({ baseURL: import.meta.env.VITE_API_ENDPOINT });

export const getUser = async () => {
  const user = await fetcher.get("/sample/user");
  // TODO: schema validation

  return user;
};
