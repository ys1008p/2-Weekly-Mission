import { formState } from "./signup.js";

function checkEmail(e) {
  const emailErrorText = e.target.nextElementSibling;
  const errorMsg = ["이메일을 입력해주세요.", "올바른 이메일 주소가 아닙니다."];

  if (e.target.value === "") {
    ifError(e, emailErrorText, errorMsg[0], "email");
  } else if (e.target.value.includes("@") == false) {
    ifError(e, emailErrorText, errorMsg[1], "email");
  } else {
    ifOk(e, emailErrorText, "email");
  }
}

function checkPw(e) {
  const pwErrorText = e.target.parentElement.lastElementChild;
  const errorMsg = "비밀번호를 입력해주세요.";
  if (e.target.value === "") {
    ifError(e, pwErrorText, errorMsg);
  } else {
    ifOk(e, pwErrorText, "");
  }
}

function login(e) {
  const emailErrorText = emailInput.nextElementSibling;
  const pwErrorText = pwInput.parentElement.lastElementChild;
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    location.href = "./folder";
  } else {
    ifError(e, emailErrorText, "이메일을 확인해주세요");
    emailErrorText.classList.add("error");
    ifError(e, pwErrorText, "비밀번호를 확인해주세요.");
    pwErrorText.classList.add("error");
  }
}

emailInput.addEventListener("focusout", checkEmail);
pwInput.addEventListener("focusout", checkPw);
form.addEventListener("submit", login);
