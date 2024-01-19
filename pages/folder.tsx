import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Folder() {
  const accessToken = null; // 임시 설정

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/signin");
    }
  }, []);

  return <div>folder</div>;
}
