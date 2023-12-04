const BASE_URL = `https://bootcamp-api.codeit.kr/api/`;
export async function getProfileData() {
  const response = await fetch(`${BASE_URL}sample/user`);
  const result = await response.json();

  return result;
}
export async function getFolderData() {
  const response = await fetch(`${BASE_URL}sample/folder`);
  const result = await response.json();

  return result;
}
