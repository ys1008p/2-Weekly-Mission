import { fetchData } from "../utility/fetchData";

export async function getFolderData() {
  try {
    return await fetchData("https://bootcamp-api.codeit.kr/api/sample/folder");
  } catch (e) {
    console.log(e);
  }
}
