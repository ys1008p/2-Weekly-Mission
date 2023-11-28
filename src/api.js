// 프로필 데이터 확인하기
async function getProfile(){
  const respones = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const result = await respones.json();
  return result;
}

// 폴더 정보 확인하기
async function getFolder(){
  const respones = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const result = await respones.json();
  return result;
}

export { getProfile, getFolder };