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
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const { folder } = await getFolder();
        setFolder(folder);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchFolder();
  }, []);

  return { data: folder, isLoading, error };
}
