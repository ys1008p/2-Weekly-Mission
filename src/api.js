const API_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserProfile(path) {
  const response = await fetch(`${API_URL}/${path}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}
