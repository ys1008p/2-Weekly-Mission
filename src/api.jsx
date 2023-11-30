const API_URL = "https://bootcamp-api.codeit.kr/api/sample";

export function getProfiles() {
  return fetch(`${API_URL}/user`).then((res) => res.json());
}

export function getFolders() {
  return fetch(`${API_URL}/folder`).then((res) => res.json());
}
