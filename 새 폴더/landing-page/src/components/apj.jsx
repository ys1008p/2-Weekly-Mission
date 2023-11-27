export async function LoginProfile() {
  const query = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  const response = await query.json();
  return response;
}
