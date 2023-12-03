import { fetchData } from "../utility/fetchData";

export async function getUserPersonalFolderData() {
  try {
    return await fetchData(
      "https://bootcamp-api.codeit.kr/api/users/1/folders"
    );
  } catch (e) {
    console.log(e);
  }
}
