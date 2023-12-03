const BASE_URL = `https://bootcamp-api.codeit.kr/`;
export async function getProfileData() {
  const response = await fetch(`${BASE_URL}api/sample/user`);
  const result = await response.json();

  return result;
}
export async function getFolderData() {
  const response = await fetch(`${BASE_URL}api/sample/folder`);
  const result = await response.json();

  return result;
}
