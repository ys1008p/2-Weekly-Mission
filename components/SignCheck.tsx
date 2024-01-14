import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignCheck({ isSignIn }: { isSignIn: boolean }) {
  const message = isSignIn ? "회원이 아니신가요?" : "이미 회원이신가요?";
  const toLinkMsg = isSignIn ? "회원 가입하기" : "로그인 하기";

  return (
    <div className="flex flex-col gap-[16px] items-center justify-center">
      <Image src="logo.svg" width="210" height="38" alt="로고이미지" />
      <div className="flex gap-[8px]">
        <p className="">{message}</p>
        <Link href={isSignIn ? "/signup" : "/signin"}>
          <span className="text-[#6D6AFE] ">{toLinkMsg}</span>
        </Link>
      </div>
    </div>
  );
}
