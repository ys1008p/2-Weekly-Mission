const BASE_URL = "https://bootcamp-api.codeit.kr/api";

async function getProfile() {
  try{
    const respones = await fetch(`${BASE_URL}/users/1`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolder() {
  try{
    const respones = await fetch(`${BASE_URL}/users/1/links`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolderMenu() {
  try{
    const respones = await fetch(`${BASE_URL}/users/1/folders`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getProfileAsync() {
  try{
    const respones = await fetch(`${BASE_URL}/sample/user`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolderAsync() {
  try{
    const respones = await fetch(`${BASE_URL}/sample/folder`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}


export { getProfile, getFolder, getFolderMenu, getProfileAsync, getFolderAsync }