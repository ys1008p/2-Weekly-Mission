import { fetchApi } from '@/scripts/fetchApi';

const getFolders = () => fetchApi.get('/sample/folder');
const getUser = () => fetchApi.get('/sample/user');

export { getFolders, getUser };
