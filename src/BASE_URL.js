const BASE_URL = "https://bootcamp-api.codeit.kr/";

export async function getFolder() {
  const response = await fetch(`${BASE_URL}api/sample/folder`);
  const folderType = await response.json();
  return folderType;
}

export async function getProfile() {
  const response = await fetch(`${BASE_URL}api/sample/user`);
  const userType = await response.json();
  return userType;
}
