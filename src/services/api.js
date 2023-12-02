const API_URL = "https://bootcamp-api.codeit.kr/api";

// async function postApiItems({ value }) {
//   const response = await fetch(`${API_URL}/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(value),
//   });
//   return response;
// }
export async function getApiItems(apiPath) {
  const path = `${apiPath}`;
  const response = await fetch(`${API_URL}/${path}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
