import { useEffect, useState } from "react";
import { getFolder } from "/src/_api/folder/api";

export default function useFolderQuery() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      setFolder(folder);
    };

    fetchFolder();
  }, []);

  return folder;
}
