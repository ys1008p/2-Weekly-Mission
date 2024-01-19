import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "@/lib/axios";

export default function Folder() {
  let accessToken: string | null = "";

  async function getFolderData() {
    const res = await axios.get(`/folders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(res);
  }
  const router = useRouter();

  useEffect(() => {
    accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <>
      <div>folder</div>
    </>
  );
}
