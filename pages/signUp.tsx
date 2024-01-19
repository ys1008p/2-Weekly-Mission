import Input from "@/components/Input";
import SignCheck from "@/components/SignCheck";
import React, { FormEvent, useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFailedSignUp, setisFailedSignUp] = useState(false);
  const [comparePassword, setComparePassword] = useState({
    pw: "",
    confirmPW: "",
  });
  const [matchedPassword, setMachedPassword] = useState(true);
  const router = useRouter();
  const setInputValueToEmail = (value: string) => setEmail(value);
  const setInputValueToPassword = (value: string) => setPassword(value);
  const setComparePW = (value: string) =>
    setComparePassword({ ...comparePassword, pw: value });
  const setCompareConfirmPW = (value: string) =>
    setComparePassword({ ...comparePassword, confirmPW: value });

  const signUpData = {
    email,
    password,
  };

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/sign-up", signUpData);
      router.push("/folder");
    } catch (e) {
      setisFailedSignUp(true);
      console.log(e);
    }
  };

  useEffect(() => {
    if (comparePassword.pw !== comparePassword.confirmPW) {
      setMachedPassword(false);
    } else {
      setMachedPassword(true);
    }
  }, [comparePassword.confirmPW]);

  return (
    <div className="flex flex-col justify-center items-center">
      <SignCheck isSignIn={false} />
      <form onSubmit={formSubmitHandler}>
        <label className="block mt-[30px] mb-[12px]">이메일</label>
        <Input
          setInputValueToEmail={setInputValueToEmail}
          isEmailInput={true}
          isFailedSignUp={isFailedSignUp}
        />
        <label className="block mt-[24px] mb-[12px]">비밀번호</label>
        <Input
          isSignUp={true}
          isEmailInput={false}
          setInputValueToPassword={setInputValueToPassword}
          isFailedSignUp={isFailedSignUp}
          setComparePW={setComparePW}
        />
        <label className="block mt-[24px] mb-[12px]">비밀번호 확인</label>
        <Input
          isSignUp={true}
          isEmailInput={false}
          setInputValueToPassword={setInputValueToPassword}
          isFailedSignUp={isFailedSignUp}
          isComparePassword={true}
          setCompareConfirmPW={setCompareConfirmPW}
          matchedPassword={matchedPassword}
        />
        <button className="mt-[30px] mb-[32px] w-[400px] flex justify-center items-center px-[20px] py-[16px] bg-[#6D6AFE]">
          회원가입
        </button>
      </form>
    </div>
  );
}
