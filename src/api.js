export async function getUser() {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const data = await res.json();
  return data;
}
