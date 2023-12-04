import API from '../constant/api';

// 공유한 폴더의 정보
export async function getSampleUserFolder() {
  const result = await fetch(API.SAMPLE_FOLDER);
  const body = await result.json();
  return body;
}

export async function getFolder() {
  const result = await fetch(API.USER_FOLDER);
  const body = await result.json();
  return body;
}

export async function getLinks(folderId) {
  const query = folderId === undefined ? '' : `?folderId=${folderId}`; // 쿼리 없는 경우 전체 링크 불러오기
  const result = await fetch(`${API.USER_LINKS}${query}`);
  const body = await result.json();
  return body;
}

export async function getUser() {
  const result = await fetch(API.USER_INFO);
  const body = await result.json();
  return body;
}
