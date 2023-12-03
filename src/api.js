const USER_URL = "https://bootcamp-api.codeit.kr/api/sample/";
const FOLDER_URL = "https://bootcamp-api.codeit.kr/api/users/1";

export async function HeaderApi() {
  const query = await fetch(`${USER_URL}user`);
  const response = await query.json();
  return response;
}

export async function LoginProfile() {
  const query = await fetch(`${USER_URL}folder`);
  const response = await query.json();
  return response;
}

export async function FolderHeaderApi() {
  const query = await fetch(`${FOLDER_URL}`);
  const response = await query.json();
  return response;
}

export async function FolderLoginProfile() {
  const query = await fetch(`${FOLDER_URL}/links`);
  const response = await query.json();
  return response;
}
