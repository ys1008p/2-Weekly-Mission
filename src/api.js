export async function getUserProfile() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const body = await response.json();
  return body
}

export async function getFolderProfile() { 
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const body = await response.json();
  return body
}