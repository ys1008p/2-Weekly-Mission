// 페이지가 로드될 때 accessToken을 확인하는 함수
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
import { comparePw } from "./return-warning-msg.js";

const $pwInput = document.querySelector("#pw");

function sendSignUpDataToApi(inputData) {
  fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  })
    .then((respones) => respones.json())
    .then((result) => {
      window.localStorage.setItem("accessToken", result.data.accessToken);
      window.location.href = "/folder";
    });
}

function validPassword(inputData) {
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return inputData.password === inputData.passwordCheck && pwdReg.test(inputData.password);
}

async function compareInputAndSignUpApi(inputData) {
  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: inputData.email }),
  }).then((respones) => {
    if (!respones.ok) throw new Error("중복된 이메일입니다.");

    const isRightPassword = validPassword(inputData);
    if (isRightPassword) sendSignUpDataToApi(inputData);
  });
}

const signUp = (e) => {
  e.preventDefault();

  const $inputEmailData = document.querySelector("#email"); //이메일 인풋
  const $inputPwdData = document.querySelector("#pw"); // 패스워드 인풋
  const $inputPwdCheckData = document.querySelector("#pw-check"); // 패스워드 비교 인풋

  const inputData = {
    email: $inputEmailData.value,
    password: $inputPwdData.value,
    passwordCheck: $inputPwdCheckData.value,
  };

  compareInputAndSignUpApi(inputData);
};

$memberInfoForm.addEventListener("focusout", checkWarningMsg);
$memberInfoForm.addEventListener("submit", signUp);
$memberInfoForm.addEventListener("click", changePwViewMode);
$pwInput.addEventListener("change", comparePw);
