import getDate from "./GetData.tsx";

export async function getFolderUserData() {
  return getDate("/users/1");
}

export async function getFoldersData() {
  return getDate("/users/1/folders");
}

export async function getAllLinksData() {
  return getDate("/users/1/links");
}

export async function getSelectData(id: number) {
  return getDate(`/users/1/links?folderId=${id}`);
}
