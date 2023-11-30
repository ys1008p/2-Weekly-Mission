const API_URL = "https://bootcamp-api.codeit.kr/api";

export function getProfiles() {
  return fetch(`${API_URL}/users/1`).then((res) => res.json());
}

export function getFolders() {
  return fetch(`${API_URL}/sample/folder`).then((res) => res.json());
}
