import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

export { axiosBaseURL };
