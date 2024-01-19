import FolderOwner from "@/components/FolderOwner";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import { useRouter } from "next/router";

export default function Shared() {
  const [folderInfo, setFolderInfo] = useState<any>();
  const router = useRouter();
  const { folderId } = router.query;

  async function getFolderInfo() {
    try {
      const res = await axios.get(`/api/folders/${folderId}`);
      const user = res.data.folder;
      setFolderInfo(user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getFolderInfo();
  }, [folderId]);

  return (
    <>
      <FolderOwner folderInfo={folderInfo} />
      <SearchBar />
      <CardList folderInfo={folderInfo} />
    </>
  );
}
