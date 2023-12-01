import { UnAuthorizedError } from "@/utils/common/FetchError";
import Fetcher from "@/utils/common/Fetcher";

const fetcher = new Fetcher({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  handlers: [
    (res) => {
      if (res.status === 401) throw new UnAuthorizedError();
      return res;
    },
    (res) => {
      if (res.status === 404) throw new APINotFoundError();
      return res;
    },
  ],
});

export const getUser = async () => {
  const user = await fetcher.get("/sample/user");
  // TODO: schema validation

  return user;
};
