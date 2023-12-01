import { fetchData } from "../utility/fetchData";

export async function getUserData() {
  try {
    return await fetchData("https://bootcamp-api.codeit.kr/api/sample/user");
  } catch (e) {
    console.log(e);
  }
}
