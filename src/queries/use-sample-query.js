import { getSampleFolder } from "@/apis/sample-api";
import { useEffect, useState } from "react";

export const useFolderQuery = () => {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const { folder } = await getSampleFolder();
        setFolder(folder);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFolder();
  }, []);

  return { data: folder, isLoading, error };
};
