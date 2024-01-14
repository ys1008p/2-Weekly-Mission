import React, { FocusEvent, useEffect, useState } from "react";
import PwdViewChangeButton from "./PwdViewChangeButton";
import ErrorMessagePrint from "./ErrorMessagePrint";

interface InputProps {
  isEmailInput: boolean;
  setInputValueToPassword?: () => void;
  setInputValueToEmail?: () => void;
  isFailedSignIn?: boolean;
  isFailedSignUp?: boolean;
  isSignUp?: boolean;
  isComparePassword?: boolean;
  setComparePW?: () => void;
  setComparePW2?: () => void;
  matchedPassword?: boolean;
}

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function validatePassword(password: string) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return passwordRegex.test(password);
}

export default function Input({
  setInputValueToEmail,
  setInputValueToPassword,
  isEmailInput,
  isFailedSignIn,
  isFailedSignUp,
  isSignUp,
  isComparePassword,
  setComparePW,
  setComparePW2,
  matchedPassword,
}: InputProps) {
  const [pwdViewMod, setPwdViewMod] = useState(isEmailInput);
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const changePwdViewMod = () => setPwdViewMod(!pwdViewMod);
  let placeholderMessage = "";
  if (!isSignUp) {
    placeholderMessage = isEmailInput
      ? "이메일을 입력해 주세요"
      : "비밀번호를 입력해 주세요";
  } else {
    placeholderMessage = !isComparePassword
      ? "영문, 숫자를 조합해 8자 이상 입력해주세요."
      : "비밀번호와 일치하는 값을 입력해 주세요.";
  }

  useEffect(() => {
    if (isFailedSignIn) {
      setErrorType(
        isEmailInput ? "FAILED_SIGNIN_EMAIL" : "FAILED_SIGNIN_PASSWORD"
      );
    }
  }, [isFailedSignIn]);

  useEffect(() => {
    if (isFailedSignUp) {
      setErrorType(
        !isEmailInput && !isComparePassword ? "FAILED_SIGNIN_PASSWORD" : ""
      );
    }
  }, [isFailedSignUp]);

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setErrorType(isEmailInput ? "EMPTY_EMAIL" : "EMPTY_PASSWORD");
      return;
    }

    if (isEmailInput && !validateEmail(inputValue)) {
      setErrorType("WRONG_EMAIL");
      return;
    }

    if (
      !isEmailInput &&
      isSignUp &&
      !isComparePassword &&
      !validatePassword(inputValue)
    ) {
      setErrorType("INVALID_PASSWORD");
      setComparePW(inputValue);
      return;
    }

    if (isComparePassword) {
      setComparePW2(inputValue);
    }

    if (isComparePassword && !matchedPassword) {
      setErrorType("MISMATCH_PASSWORD");
      return;
    }

    setErrorType("");
    setIsError(false);
    isEmailInput && !isSignUp
      ? setInputValueToEmail(inputValue)
      : setInputValueToPassword(inputValue);
  };

  useEffect(() => {
    if (matchedPassword === false) {
      setErrorType("MISMATCH_PASSWORD");
    }
  }, [matchedPassword]);

  useEffect(() => {
    errorType && setIsError(true);
  }, [errorType]);

  return (
    <div className="relative w-[400px]">
      <input
        onBlur={inputBlurHandler}
        className={
          isError
            ? "flex w-[400px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-[#ff5b56] bg-white "
            : "flex w-[400px] py-[18px] px-[15px]  justify-center items-center border outline-none rounded-[8px] border-gray-20 bg-white focus:border-[#6d6afe]"
        }
        placeholder={placeholderMessage}
        type={pwdViewMod ? "text" : "password"}
      />
      {!isEmailInput && (
        <PwdViewChangeButton
          pwdViewMod={pwdViewMod}
          changePwdViewMod={changePwdViewMod}
        />
      )}
      {isError && <ErrorMessagePrint errorType={errorType} />}
    </div>
  );
}
