import { UnauthorizedError } from "@/utils/common/FetchError";
import Fetcher from "@/utils/common/Fetcher";

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
