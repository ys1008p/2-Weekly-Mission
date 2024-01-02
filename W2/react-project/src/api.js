const BASE_URL = "https://bootcamp-api.codeit.kr/api";


async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const result = await response.json();

  return result;
}

//1. 서버에서 데이터 가져오기. 폴더를 가져옴
async function getCards() {
  const response = await fetch(
    `${BASE_URL}/users/1/links?limit=9`,
  );
if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

 return body
}




// 이외 데이터
async function getInfoEachFolder(folder_id = 14){

  const response = await fetch(
    `${BASE_URL}/users/1/folders/{folder_id}`
  );
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json()
  return body
}

export { getUser,
  getCards,getInfoEachFolder
}