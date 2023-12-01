import API from '../constant/api';

export async function getFolder() {
  const result = await fetch(API.USER_FOLDER);
  const body = await result.json();
  return body;
}

export async function getLinks() {
  const result = await fetch(API.USER_LINKS);
  const body = await result.json();
  return body;
}

export async function getUser() {
  const result = await fetch(API.USER_INFO);
  const body = await result.json();
  return body;
}

// 프로필 영역의 데이터는
// https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/users/1”을 활용해 주세요.

// 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
// “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고,
// 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
// 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요.
// 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
