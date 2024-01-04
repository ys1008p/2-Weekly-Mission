import { instance } from '../axiosInstance';

// 🚧 [SWR]fetcher 작업중...
export const fetcher = async ([endpoint, currentId]) => {
  const url = currentId ? `${endpoint}?folderId=${currentId}` : endpoint;

  try {
    const res = await instance.get(url);
    return res.data.data;
  } catch (e) {
    console.error('ERROR FETCHING FOLDER DATA: ', e);
  }
};
