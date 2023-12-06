import { fetchData } from "../utils/fetchData";

export async function getUserPersonalLinkData() {
  try {
    return await fetchData("https://bootcamp-api.codeit.kr/api/users/1/Links");
  } catch (e) {
    console.log(e);
  }
}
