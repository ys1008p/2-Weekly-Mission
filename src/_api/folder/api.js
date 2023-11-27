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

export const getFolder = async () => {
  const folder = await fetcher.get("/sample/folder");
  // TODO: schema validation

  return folder;
};
