export async function getFolderUserData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFoldersData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getAllLinksData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getSelectData( id ) {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`);
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
