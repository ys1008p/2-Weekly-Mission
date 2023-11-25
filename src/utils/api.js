import { END_POINT } from "./constants";

//react-query 처럼 콜백을 넘겨주는 방식으로 변경 예정
export const getUser = async () => {
  const res = await fetch(`${END_POINT}/smaple/user`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
};
export const getFolder = async () => {
  const res = await fetch(`${END_POINT}/smaple/folder`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
};
