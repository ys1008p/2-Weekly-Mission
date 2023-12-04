const BASE_URL = "https://bootcamp-api.codeit.kr/api";

// async function getFolderData(menuActive) {
//   try{
//     const respones = await fetch(`${BASE_URL}/links?folderId=${menuActive}`);
//     if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
//     const result = await respones.json();
//     return result;
//   }catch(error){
//     console.log(error);
//   }
// }

async function getProfileSample() {
  try{
    const respones = await fetch(`${BASE_URL}/sample/user`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}

async function getFolderSample() {
  try{
    const respones = await fetch(`${BASE_URL}/sample/folder`);
    if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
    
    const result = await respones.json();
    return result;
  }catch(error){
    console.log(error);
  }
}


export { getProfileSample, getFolderSample }