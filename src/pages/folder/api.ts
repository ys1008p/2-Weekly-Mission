import { fetchApi } from '@/scripts/fetchApi.js';
import { Folder } from '@/types/folder';

const getUser = () => fetchApi.get('/users/1');
const getFolders = () => fetchApi.get('/users/1/folders');
const getLinks = (folderId: Folder['id']) =>
  fetchApi.get(`/users/1/links${folderId ? `?folderId=${folderId}` : ''}`);

export { getFolders, getLinks, getUser };
