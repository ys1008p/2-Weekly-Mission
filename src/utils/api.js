const BASE_URL = 'https://bootcamp-api.codeit.kr';

export async function getUserInfo() {
  const response = await fetch(`${BASE_URL}/api/users/1`);
  if (!response.ok) {
    throw new Error('유저 데이터를 불러오는데 실패했습니다');
  }
  const result = await response.json();
  const { data } = result;
  const body = data[0];
  return body;
}

export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/api/users/1/links`);
  if (!response.ok) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function getSampleFolderData() {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}
