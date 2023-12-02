const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getApiInfo(apiAdress, errorMessage) {
  const response = await fetch(`${BASE_URL}${apiAdress}`);
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  const body = await response.json();
  return body;
}
