import React from "react";

interface ERROR_MESSAGES {
  EMPTY_EMAIL: string;
  EMPTY_PASSWORD: string;
  WRONG_EMAIL: string;
  FAILED_SIGNIN_EMAIL: string;
  FAILED_SIGNIN_PASSWORD: string;
  INVALID_PASSWORD: string;
  MISMATCH_PASSWORD: string;
}

export default function ErrorMessagePrint({
  errorType,
}: {
  errorType: string;
}) {
  const ERROR_MESSAGES: ERROR_MESSAGES = {
    EMPTY_EMAIL: "이메일을 입력해 주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해 주세요.",
    WRONG_EMAIL: "올바른 이메일 주소가 아닙니다.",
    FAILED_SIGNIN_EMAIL: "이메일을 확인해 주세요.",
    FAILED_SIGNIN_PASSWORD: "비밀번호를 확인해 주세요.",
    INVALID_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    MISMATCH_PASSWORD: "비밀번호가 일치하지 않아요.",
  };
  return (
    <p className="absolute left-0 bottom-[-26px] text-[#ff5b56] text-[14px]">
      {ERROR_MESSAGES[errorType as keyof ERROR_MESSAGES]}
    </p>
  );
}
