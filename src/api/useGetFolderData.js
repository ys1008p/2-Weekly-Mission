import { useGetData } from "./useGetData.js";
import { getElapsedTime } from "../util/getElapsedTime.js";
import format from "date-fns/format";

function useGetFolderData() {
  const { userData, loading } = useGetData("/sample/folder");
  if (loading) {
    return [];
  }

  const modifyLinksData = (link) => {
    const { id, createdAt, url, title, description, imageSource } = link;
    return {
      id,
      createdAt: format(new Date(createdAt), "yyyy.M.dd"),
      url,
      title,
      description,
      imageSource,
      elapsedTime: getElapsedTime(createdAt),
    };
  };

  const { folder } = userData;
  const { id, name, owner, links } = folder;

  return {
    folder: {
      id,
      name,
      owner,
      links: links?.map(modifyLinksData) ?? [],
    },
  };
}

export { useGetFolderData };
