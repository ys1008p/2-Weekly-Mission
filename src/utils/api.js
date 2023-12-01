import { END_POINT } from "./constants";

//react-query 처럼 콜백을 넘겨주는 방식
export const getUser = async (userId = 1) => {
  const res = await fetch(`${END_POINT}/users/${userId}`);
  if (!res.ok) throw new Error(res.status);
  const { data } = await res.json();
  return data[0];
};
export const getShared = async () => {
  const res = await fetch(`${END_POINT}/sample/folder`);
  if (!res.ok) throw new Error(res.status);
  const { folder } = await res.json();
  return folder;
};

export const getFolderList = async (userId = 1) => {
  const res = await fetch(`${END_POINT}/users/${userId}/folders`);
  if (!res.ok) throw new Error(res.status);
  const { data } = await res.json();
  return data;
};
