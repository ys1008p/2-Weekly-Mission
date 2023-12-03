import { getLinkList } from "@/apis/link-api";
import { useEffect, useState } from "react";

export const useLinkListQuery = (userId, folderId) => {
  const [linkList, setLinkList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchLinkList = async () => {
      try {
        const { data: linkList } = await getLinkList(userId, folderId);
        if (!ignore) {
          setLinkList(linkList);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    if (!userId) return () => {};
    fetchLinkList();

    return () => {
      ignore = true;
    };
  }, [userId, folderId]);

  return { linkList, isLoading, error };
};
