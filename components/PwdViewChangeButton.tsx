import Image from "next/image";
import React from "react";

interface PwdViewChangeButtonProps {
  pwdViewMod: boolean;
  changePwdViewMod: () => void;
}

export default function PwdViewChangeButton({
  pwdViewMod,
  changePwdViewMod,
}: PwdViewChangeButtonProps) {
  const buttonClickHandler = () => changePwdViewMod();

  return (
    <Image
      onClick={buttonClickHandler}
      className="absolute top-[50%] right-[16px] translate-y-[-50%] cursor-pointer"
      src={pwdViewMod ? "/eye-on.svg" : "/eye-off.svg"}
      width="16"
      height="16"
      alt="비밀번호 모드 이미지"
    ></Image>
  );
}
