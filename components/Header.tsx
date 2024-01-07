import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import ProfileInfo from "./ProfileInfo";
import styles from "./Header.module.css";

export default function Header() {
  const [isSignedIn, setisSignedIn] = useState(true);
  const [userInfo, setUserInfo] = useState<any>();

  async function getUserInfo() {
    const res = await axios.get("/sample/user");
    const user = res.data;
    setUserInfo(user);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
        <Image src="/logo.svg" width="133" height="24" alt="로고" />
        {userInfo ? (
          <ProfileInfo userInfo={userInfo} />
        ) : (
          <button>로그인</button>
        )}
      </div>
    </>
  );
}
