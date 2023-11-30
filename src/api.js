export async function getUserInfo() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (!response.ok) {
    const result = null;
    return result;
  }
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    const result = null;
    return result;
  }
  const body = await response.json();
  return body;
}
