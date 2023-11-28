import styles from "./userInfo.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserInfo() {
  const [userFolderName, setUserFolderName] = useState("이보아라");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [userName, setUserName] = useState("@코드잇");

  useEffect(() => {
    const userData = async () => {
      try {
        const result = await axios.get("https://bootcamp-api.codeit.kr/api/sample/folder");
        const data = result.data.folder;
        setUserFolderName(data.name);
        setUserProfileImg(data.owner.profileImageSource);
        setUserName(data.owner.name);
      } catch {
        console.log("실패했단다");
      }
    };
    userData();
  }, []);
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userProfile}>
          <img className={styles.userProfileImg} src={userProfileImg} alt="프로필 이미지" />
          <div className={styles.userName}>{userName}</div>
        </div>
        <div className={styles.userFolderName}>{userFolderName}</div>
      </div>
    </>
  );
}
