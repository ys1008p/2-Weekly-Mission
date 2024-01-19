import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import ProfileData from "./ProfileData";
import styles from "./Header.module.css";

export default function Header() {
  const [isSignedIn, setisSignedIn] = useState(true);
  const [userData, setUserData] = useState<any>();
  let accessToken: string | null = "";

  async function getUserData() {
    const res = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(res.data.data[0]);
    setUserData(res.data.data[0]);
  }

  useEffect(() => {
    accessToken = localStorage.getItem("accessToken");
    getUserData();
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
        <Image src="/logo.svg" width="133" height="24" alt="로고" />
        {userData ? (
          <ProfileData userData={userData} />
        ) : (
          <button>로그인</button>
        )}
      </div>
    </>
  );
}
