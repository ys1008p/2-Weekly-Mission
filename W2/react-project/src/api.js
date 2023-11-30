const BASE_URL = "https://bootcamp-api.codeit.kr/api";

// request 함수들을 모아놓고 사용할예정

export async function GetUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const result = await response.json();
  // const email = result.email;
  //const profileImage = result.profileImageSource;
  return result;
}

GetUser();
