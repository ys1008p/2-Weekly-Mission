const API_URL = "https://bootcamp-api.codeit.kr/api/sample";

export async function getProfiles() {
  const response = await fetch(`${API_URL}/user`);
  const body = await response.json();
  return body;
}

export async function getFavorites() {
  const response = await fetch(`${API_URL}/folder`);
  const body = await response.json();
  return body;
}
