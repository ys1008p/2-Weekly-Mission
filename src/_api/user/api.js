import { UnauthorizedError } from "/src/_util/FetchError";
import Fetcher from "/src/_util/Fetcher";

const fetcher = new Fetcher({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  handlers: [
    (res) => {
      if (res.status === 401) throw new UnauthorizedError();
      return res;
    },
  ],
});

export const getUser = async () => {
  const user = await fetcher.get("/sample/user");
  // TODO: schema validation

  return user;
};
