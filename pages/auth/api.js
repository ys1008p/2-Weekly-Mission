import { fetchApi } from "/scripts/fetchApi.js";

const postSignIn = (email, password) =>
  fetchApi.post("/sign-in", { body: { email, password } });

const postCheckEmail = (email) =>
  fetchApi.post("/check-email", { body: { email } });

const postSignUp = (email, password) =>
  fetchApi.post("/sign-up", { body: { email, password } });

export { postCheckEmail, postSignIn, postSignUp };
