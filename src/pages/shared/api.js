import { fetchApi } from '@/scripts/fetchApi.js';

const getFolders = () => fetchApi.get('/sample/folder');
const getUser = () => fetchApi.get('/sample/user');

export { getFolders, getUser };
