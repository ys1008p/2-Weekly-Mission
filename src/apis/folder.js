import { instance } from './axiosInstance';

// [get]폴더 리스트
export const getFolderList = async () => {
  try {
    const res = await instance.get('/api/sample/folder');
    return res?.data.folder;
  } catch (e) {
    console.error('API ERROR: NOT FOUND FOLDER LIST: ', e);
  }
};

// [get]사용자 정보
export const getUserInfo = async () => {
  try {
    const res = await instance.get('/api/sample/user');
    return res?.data;
  } catch (e) {
    console.error('API ERROR: NOT FOUND USER INFO: ', e);
  }
};
