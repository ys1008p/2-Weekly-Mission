import {
  ValidationError,
  DuplicatedEmailError,
} from "/src/commons/ValidationError.js";
import Fetcher from "/src/commons/Fetcher.js";
import { UnauthorizedError } from "/src/commons/FetchError.js";

const handleDuplicatedUser = (res) => {
  if (res.status === 409) throw new DuplicatedEmailError();

  return res;
};

const handleUnauthorizedUser = (res) => {
  if (res.status === 401) throw new UnauthorizedError();

  return res;
};

const fetcher = new Fetcher({
  baseURL: "https://bootcamp-api.codeit.kr/api",
  handlers: [handleDuplicatedUser, handleUnauthorizedUser],
});

export const postSignin = async (email, password) => {
  const body = { email, password };
  try {
    const data = await fetcher.post("/sign-in", body);
    // schema 검증 필요
    return { accessToken: data.accessToken, refreshToken: data.refreshToken };
  } catch (err) {
    console.error(err);
  }
};

export const postCheckEmail = async (email) => {
  const body = { email };
  try {
    const data = await fetcher.post("/check-email", body);

    return { isUsableNickname: data.isUsableNickname };
  } catch (err) {
    if (err instanceof ValidationError) throw err;
    console.error(err);
  }
};
