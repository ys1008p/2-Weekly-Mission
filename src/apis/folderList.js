import { instance } from './axiosInstance';

// [get]폴더 리스트-sample
export const getFolderList = async () => {
  try {
    const res = await instance.get('/api/sample/folder');
    return res?.data.folder;
  } catch (e) {
    console.error('[API ERROR] NOT FOUND FOLDER LIST: ', e);
  }
};

// [get]필터 목록
export const getFilterList = async () => {
  try {
    const res = await instance.get('/api/users/1/folders');
    return res?.data.data;
  } catch (e) {
    console.error('[API ERROR] NOT FOUND FILTER LIST: ', e);
  }
};

// [get]전체 링크 리스트
export const getLinklist = async (currentId) => {
  const params = currentId ? `?folderId=${currentId}` : '';
  try {
    const res = await instance.get('/api/users/1/links' + params);
    return res?.data.data;
  } catch (e) {
    console.error('[API ERROR] NOT FOUND LINK LIST: ', e);
  }
};
