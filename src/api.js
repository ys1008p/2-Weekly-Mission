export async function getUserData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getFolderData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
