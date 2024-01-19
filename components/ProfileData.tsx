import Image from "next/image";
import styles from "./ProfileData.module.css";

interface UserData {
  userData: {
    image_source: string;
    email: string;
  };
}

export default function ProfileData({ userData }: UserData) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImg}>
        <Image src={userData.image_source} fill alt="프로필 이미지"></Image>
      </div>
      <p>{userData.email}</p>
    </div>
  );
}
