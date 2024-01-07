import Image from "next/image";
import styles from "./FolderOwner.module.css";

interface FolderInfo {
  folderInfo: {
    name: string;
    owner: {
      name: string;
      profileImageSource: string;
    };
  };
}

export default function FolderOwner({ folderInfo }: FolderInfo) {
  return (
    <section>
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}>
          <Image
            src={folderInfo?.owner?.profileImageSource}
            fill
            alt="프로필 이미지"
          />
        </div>
        <span className={styles.folderOwnerName}>
          {folderInfo?.owner?.name}
        </span>
        {/* ? 옵셔널 체이닝 안쓰니까 에러떠서 넣었습니다 왜 그런지 잘모르겠습니다. */}
        <p className={styles.folderName}>{folderInfo?.name}</p>
      </div>
    </section>
  );
}
