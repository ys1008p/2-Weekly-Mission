const BASE_URL = "https://bootcamp-api.codeit.kr/api/users/1";

async function getProfile() {
  try{
    const respones = await fetch(`${BASE_URL}`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolder() {
  try{
    const respones = await fetch(`${BASE_URL}/links`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolderMenu() {
  try{
    const respones = await fetch(`${BASE_URL}/folders`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

export { getProfile, getFolder, getFolderMenu }