// 페이지가 로드될 때 실행되는 함수
window.onload = function () {
  const $main = document.querySelector("main");
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    window.location.href = "/folder";
  } else {
    $main.style.visibility = "visible";
  }
};

window.onload();

import { $memberInfoForm, checkWarningMsg } from "./add-warning-msg.js";
import { changePwViewMode } from "./pwdOnOff.js";

function setSignInInputErrorMsg(signInData) {
  const $inputEmailData = document.querySelector("#email"); // 이메일 인풋
  const $inputPwdData = document.querySelector("#pw"); // 패스워드 인풋
  const emailWarningMsgEl = $inputEmailData.parentElement.lastElementChild; //이메일 경고 태그
  const pwWarningMsgEl = $inputPwdData.parentElement.lastElementChild; // 패스워드 경고 태그

  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: signInData.email }),
  })
    .then((respones) => {
      if (!respones.ok) throw new Error("비밀번호가 틀렸네요");

      $inputEmailData.classList.add("error-input");
      emailWarningMsgEl.textContent = "이메일을 확인해주세요.";
    })
    .catch(() => {
      $inputPwdData.classList.add("error-input");
      pwWarningMsgEl.textContent = "비밀번호를 확인해주세요.";
    });
}

function compareInputAndSignInApi(signInData) {
  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInData),
  })
    .then((respones) => {
      if (!respones.ok) throw new Error("아이디나 비밀번호를 확인하세요");
      return respones.json();
    })
    .then((result) => {
      window.localStorage.setItem("accessToken", result.data.accessToken);
      window.location.href = "/folder";
    })
    .catch(() => setSignInInputErrorMsg(signInData));
}

const signIn = (e) => {
  e.preventDefault();

  const $inputEmailData = document.querySelector("#email"); // 이메일 인풋
  const $inputPwdData = document.querySelector("#pw"); // 패스워드 인풋

  const signInData = {
    email: $inputEmailData.value,
    password: $inputPwdData.value,
  };

  compareInputAndSignInApi(signInData);
};

$memberInfoForm.addEventListener("focusout", checkWarningMsg);
$memberInfoForm.addEventListener("submit", signIn);
$memberInfoForm.addEventListener("click", changePwViewMode);
