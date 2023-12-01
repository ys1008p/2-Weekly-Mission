const USER_URL = "https://bootcamp-api.codeit.kr/api/sample/";

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