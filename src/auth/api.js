import Fetcher from "/src/commons/Fetcher.js";

const fetcher = new Fetcher({
  baseURL: "https://bootcamp-api.codeit.kr/api",
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
