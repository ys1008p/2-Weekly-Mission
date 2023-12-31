import fetcher from "../utils/fetcher";

const API_URL = "https://bootcamp-api.codeit.kr/api";

export const getProfiles = () => fetcher(`${API_URL}/users/1`);
export const getSharedFolders = () => fetcher(`${API_URL}/sample/folder`);
export const getFolders = () => fetcher(`${API_URL}/users/1/folders`);
export const getLinks = (folderId) => fetcher(`${API_URL}/users/1/links?folderId=${folderId}`);
