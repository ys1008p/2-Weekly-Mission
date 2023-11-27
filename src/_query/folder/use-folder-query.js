import { useEffect, useState } from "react";
import { getFolder } from "/src/_api/folder/api";

export default function useFolderQuery() {
  const [folder, setFolder] = useState({
    id: 0,
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: "",
    },
    links: [],
    count: 1,
  });

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      setFolder(folder);
    };

    fetchFolder();
  }, []);

  return folder;
}
