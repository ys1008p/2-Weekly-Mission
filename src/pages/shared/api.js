import { fetchApi } from '/src/scripts/fetchApi.js';

const getFolders = () => fetchApi.get('/sample/folder');

export { getFolders };
