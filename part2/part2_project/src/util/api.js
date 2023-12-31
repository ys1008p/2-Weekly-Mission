const BASE_URL = '';

export async function getUserData() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/sample/user`
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserPick() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/sample/folder`
    );
    const body = await response.json();
    return body;
  } catch {
    console.log(err.message);
  }
}

export async function forUser1() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
    const body = await response.json();
    return body;
  } catch {
    console.log(err.message);
  }
}

export async function TasteUser1() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/users/1/folders`
    );
    const body = await response.json();
    return body;
  } catch {
    console.log(err.message);
  }
}

export async function getUserList(id = '') {
  const query = id ? `folderId=${id}` : '';
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/users/1/links?${query}`
    );
    const body = await response.json();
    return body;
  } catch {
    console.log(err.message);
  }
}

//  const query = `?folderId=${id}`;

//폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
//“전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고,
// 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
