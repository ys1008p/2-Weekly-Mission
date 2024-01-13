import FolderOwner from "@/components/FolderOwner";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";

export default function Shared() {
  const [folderInfo, setFolderInfo] = useState<any>();
  // any 쓰지말라고는 배웠는데 아직 타입스크립트가 익숙치 않아서 일단 작성했습니다.

  async function getFolderInfo() {
    const res = await axios.get("/sample/folder");
    const user = res.data.folder;
    setFolderInfo(user);
  }

  useEffect(() => {
    getFolderInfo();
  }, []);

  return (
    <>
      <FolderOwner folderInfo={folderInfo} />
      <SearchBar />
      <CardList folderInfo={folderInfo} />
    </>
  );
}
