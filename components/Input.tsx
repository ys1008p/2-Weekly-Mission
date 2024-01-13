import Image from "next/image";
import React, { FocusEvent, useState } from "react";
import PwdViewChangeButton from "./PwdViewChangeButton";
import ErrorMessagePrint from "./ErrorMessagePrint";

// const INPUT_STYLE =
//   "flex w-[350px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-gray-20 bg-white focus:border-[#6d6afe]";
// const ERROR_INPUT_STYLE =
//   "flex w-[350px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-[#ff5b56] bg-white ";

export default function Input() {
  const isTextInput = true; // 나중에 prop으로 받을 예정
  const [pwdViewMod, setPwdViewMod] = useState(isTextInput);

  const changePwdViewMod = () => setPwdViewMod(!pwdViewMod);

  const isError = false;
  //test용 설정

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (isError) {
      e.target.className =
        "flex w-[350px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-[#ff5b56] bg-white ";
    } else {
      e.target.className =
        "flex w-[350px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-gray-20 bg-white focus:border-[#6d6afe]";
    }
  };

  return (
    <div className="relative w-[350px]">
      <input
        onBlur={inputBlurHandler}
        className="flex w-[350px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-gray-20 bg-white focus:border-[#6d6afe]"
        placeholder="내용 입력"
        type={pwdViewMod ? "text" : "password"}
      />
      {!isTextInput && (
        <PwdViewChangeButton
          pwdViewMod={pwdViewMod}
          changePwdViewMod={changePwdViewMod}
        />
      )}
      {isError && <ErrorMessagePrint />}
    </div>
  );
}
