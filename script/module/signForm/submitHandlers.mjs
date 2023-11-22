"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  pwCkdErrHandler,
  emailInput,
  pwInput,
  showErrorMsg,
  emailErrorMsg,
  pwErrorMsg,
  pwCheckErrorMsg,
  pwCheckInput,
} from "./inputValidation.mjs";

const loginBtn = document.querySelector("#login_btn");
const signUpBtn = document.querySelector("#signup_btn");

async function loginBtnHandler(e) {
  e.preventDefault();

  const userInfo = {
    email: emailInput.value.trim(),
    password: pwInput.value.trim(),
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    const result = response.status;
    console.log(result);

    if (result === 200) {
      const data = await response.json(); // Json으로 값 뽑아오기
      const accessToken = data.data.accessToken; // 엑세스토큰
      localStorage.setItem("accessToken", accessToken); // key : value
      console.log(data); // 확인
      console.log(accessToken); // 엑세스토큰 값 확인(dev tool:애플리케이션-로컬스토리지)
      window.location.href = "/folder";
      console.log("로그인 성공");
    } else {
      showErrorMsg(emailErrorMsg, emailInput, "이메일을 확인해주세요.");
      showErrorMsg(pwErrorMsg, pwInput, "비밀번호를 확인해주세요.");
      console.log("로그인 실패");
    }
  } catch (e) {
    console.log(e);
  }
}

async function signUpBtnHandler(e) {
  e.preventDefault();

  const emailInfo = { email: emailInput.value.trim() };
  const userInfo = {
    email: emailInput.value.trim(),
    password: pwInput.value.trim(),
  };
  const pwCkd = pwCheckInput.value.trim();

  try {
    const emailCkdResponse = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (emailCkdResponse.status === 409) {
      showErrorMsg(emailErrorMsg, emailInput, "이미 사용 중인 이메일입니다.");
      return;
    }

    const signUpResponse = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (signUpResponse.status === 200 && userInfo.password === pwCkd) {
      emailErrHandler();
      pwErrHandler();
      pwCkdErrHandler(); // 각 인풋에대한 에러검사

      const data = await signUpResponse.json(); // Json으로 값 뽑아오기
      const accessToken = data.data.accessToken; // 엑세스토큰
      localStorage.setItem("accessToken", accessToken); // key : value
      console.log(data); // 확인
      console.log(accessToken); // 엑세스토큰 값 확인(dev tool:애플리케이션-로컬스토리지)

      window.location.href = "/folder";
      console.log("로그인 성공");
    }
  } catch (e) {
    console.log(e);
  }
}

export { loginBtn, loginBtnHandler, signUpBtnHandler, signUpBtn };
