import Input from "@/components/Input";
import SignCheck from "@/components/SignCheck";
import React, { FormEvent, useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [isFailedSignIn, setisFailedSignIn] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const setInputValueToEmail = (value: string) => setEmailValue(value);
  const setInputValueToPassword = (value: string) => setPassword(value);

  useEffect(
    () => setSignInData({ email: email, password: password }),
    [email, password]
  );

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/sign-in", signInData);
      router.push("/folder");
    } catch (e) {
      setisFailedSignIn(true);
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <SignCheck isSignIn={true} />
      <form onSubmit={formSubmitHandler}>
        <label className="block mt-[30px] mb-[12px]">이메일</label>
        <Input
          setInputValueToEmail={setInputValueToEmail}
          isEmailInput={true}
          isFailedSignIn={isFailedSignIn}
        />
        <label className="block mt-[24px] mb-[12px]">비밀번호</label>
        <Input
          setInputValueToPassword={setInputValueToPassword}
          isEmailInput={false}
          isFailedSignIn={isFailedSignIn}
        />
        <button className="mt-[30px] mb-[32px] w-[400px] flex justify-center items-center px-[20px] py-[16px] bg-[#6D6AFE]">
          로그인
        </button>
      </form>
    </div>
  );
}
