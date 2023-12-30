import { getDate } from "./GetData.tsx";

export async function getUserData() {
  return getDate("/sample/user");
}

export async function getSharedData() {
  return getDate("/sample/folder");
}
