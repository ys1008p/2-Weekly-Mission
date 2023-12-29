import { getDate } from './GetData';

export async function getFolderUserData() {
  return await getDate('/users/1');
}

export async function getFoldersData() {
  return await getDate('/users/1/folders');
}

export async function getAllLinksData() {
  return await getDate('/users/1/links');
}

export async function getSelectData(id: number) {
  return await getDate(`/users/1/links?folderId=${id}`);
}
