
import { getDate } from "./GetData";

export async function getUserData() {
  return await getDate("/sample/user");
}

export async function getSharedData() {
  return await getDate("/sample/folder");
}
