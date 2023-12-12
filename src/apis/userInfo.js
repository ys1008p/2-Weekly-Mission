import { instance } from './axiosInstance';

// [get]사용자 정보-sample
export const getUserInfo = async () => {
  try {
    const res = await instance.get('/api/sample/user');
    return res?.data;
  } catch (e) {
    console.error('[API ERROR] NOT FOUND USER INFO: ', e);
  }
};

// [get]사용자 정보
export const getUserData = async () => {
  try {
    const res = await instance.get('/api/users/1');
    return res?.data.data[0];
  } catch (e) {
    console.error('[API ERROR] NOT FOUND USER INFO: ', e);
  }
};
