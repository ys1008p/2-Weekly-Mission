import Image from "next/image";
import styles from "./FolderOwner.module.css";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function FolderOwner(userId: string) {
  const [folderOwnerData, setFolderOwnerData] = useState();

  async function getFolderOwnerData() {
    try {
      const res = await axios.get(`/users/${userId}`);
      const user = res.data;
      setFolderOwnerData(user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getFolderOwnerData();
  }, []);

  return (
    <section>
      {/* <div className={styles.profileContainer}>
        <div className={styles.profileImage}>
          <Image
            src={folderOwnerData?.owner?.profileImageSource}
            fill
            alt="프로필 이미지"
          />
        </div>
        <span className={styles.folderOwnerName}>
          {folderOwnerData?.owner?.name}
        </span>
        <p className={styles.folderName}>{folderOwnerData?.name}</p>
      </div> */}
    </section>
  );
}
