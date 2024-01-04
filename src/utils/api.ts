import { END_POINT } from "./constants";
import { FolderData, LinkData, ShardData } from "./type";

interface IData<T = string> {
  [key: string]: T;
}

interface ILink {
  id: number;
  updatedAt: string;
  description: string;
  url: string;
  title: string;
  folderId: number;
  imageSource: string;
  createdAt: string;
}

//react-query 처럼 콜백을 넘겨주는 방식
export const getUser = async (userId: number = 1) => {
  const res = await fetch(`${END_POINT}/users/${userId}`);
  if (!res.ok) throw new Error(`Error Code: ${res.status}`);
  const { data }: IData = await res.json();
  return data[0];
};
export const getShared = async (): Promise<ShardData> => {
  const res = await fetch(`${END_POINT}/sample/folder`);
  if (!res.ok) throw new Error(`Error Code: ${res.status}`);
  const { folder }: IData<ShardData> = await res.json();
  return folder;
};

export const getFolderList = async (userId: number = 1): Promise<FolderData[]> => {
  const res = await fetch(`${END_POINT}/users/${userId}/folders`);
  if (!res.ok) throw new Error(`Error Code: ${res.status}`);

  const response = await res.json();

  if (!Array.isArray(response.data)) {
    throw new Error(`Error Code: ${res.status}`);
  }

  return response.data as FolderData[];
};

export const getSelectedFolder = async (folderId?: number, userId: number = 1): Promise<ILink[]> => {
  let url = `${END_POINT}/users/${userId}/links`;
  if (folderId) {
    const params = new URLSearchParams({ folderId: folderId.toString() }).toString();
    url += `?${params}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error Code: ${res.status}`);
  const { data }: IData<LinkData[]> = await res.json();

  const convertLinks: ILink[] = data.map((link: LinkData) => ({
    id: link.id,
    updatedAt: link.update_at,
    description: link.description,
    url: link.url,
    title: link.title,
    folderId: link.folder_id,
    imageSource: link.image_source,
    createdAt: link.created_at,
  }));

  return convertLinks;
};
