import { fetchApi } from "/scripts/fetchApi.js";

const signIn = (email, password) =>
  fetchApi.post("/sign-in", { body: { email, password } });
export { signIn };
