import Image from "next/image";
import styles from "./ProfileInfo.module.css";

interface UserInfo {
  userInfo: {
    profileImageSource: string;
    email: string;
  };
}

export default function ProfileInfo({ userInfo }: UserInfo) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImg}>
        <Image
          src={userInfo.profileImageSource}
          fill
          alt="프로필 이미지"
        ></Image>
      </div>
      <p>{userInfo.email}</p>
    </div>
  );
}
