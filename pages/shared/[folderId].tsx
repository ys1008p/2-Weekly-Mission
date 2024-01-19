import FolderOwner from "@/components/FolderOwner";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import { useRouter } from "next/router";

export default function Shared() {
  const [folderData, setFolderData] = useState<any>();
  const router = useRouter();
  const { folderId } = router.query;

  async function getFolderData() {
    try {
      const res = await axios.get(`/folders/${folderId}`);
      const user = res.data;
      setFolderData(user);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(folderData);
  }, [folderData]);

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <>
      <FolderOwner userId={folderData?.user_id} />
      <SearchBar />
      <CardList folderData={folderData} />
    </>
  );
}
