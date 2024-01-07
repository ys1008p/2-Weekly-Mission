import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

export default instance;
