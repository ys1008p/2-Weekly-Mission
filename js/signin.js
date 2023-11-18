import { validObject } from "./validFunction.js";

export const formState = {
  email: {
    emailInput: document.querySelector("#username"),
    checkEmail: function (e) {
      const emailErrorText = e.target.nextElementSibling;
      const errorMsg = [
        "이메일을 입력해주세요.",
        "올바른 이메일 주소가 아닙니다.",
      ];
      if (e.target.value === "") {
        validObject.ifError(e, emailErrorText, errorMsg[0], "email");
      } else if (e.target.value.includes("@") == false) {
        validObject.ifError(e, emailErrorText, errorMsg[1], "email");
      } else {
        validObject.ifOk(e, emailErrorText, "email");
      }
    },
    isValid: false,
  },
  pw: {
    pwInput: document.querySelector("#password"),
    checkPw: function (e) {
      const pwErrorText = e.target.parentElement.lastElementChild;
      const errorMsg = "비밀번호를 입력해주세요.";
      if (e.target.value === "") {
        validObject.ifError(e, pwErrorText, errorMsg);
      } else {
        validObject.ifOk(e, pwErrorText, "pw");
      }
    },
    isValid: false,
  },
  form: document.querySelector("form"),
  login: function (e) {
    const emailErrorText = formState.email.emailInput.nextElementSibling;
    const pwErrorText = formState.pw.pwInput.parentElement.lastElementChild;
    const errorMsg = ["이메일을 확인해주세요", "비밀번호를 확인해주세요."];
    e.preventDefault();
    if (!formState.email.isValid || !formState.pw.isValid) {
      formState.email.emailInput.classList.add("error");
      formState.pw.pwInput.classList.add("error");
      emailErrorText.classList.add("error");
      pwErrorText.classList.add("error");
      emailErrorText.innerHTML = errorMsg[0];
      pwErrorText.innerHTML = errorMsg[1];
    }
    if (
      formState.email.emailInput.value === "test@codeit.com" &&
      formState.pw.pwInput.value === "codeit101"
    ) {
      e.preventDefault();
      location.href = "./folder";
    } else {
      e.preventDefault();
      formState.email.emailInput.classList.add("error");
      formState.pw.pwInput.classList.add("error");
      emailErrorText.classList.add("error");
      pwErrorText.classList.add("error");
      emailErrorText.innerHTML = errorMsg[0];
      pwErrorText.innerHTML = errorMsg[1];
    }
  },
};

formState.email.emailInput.addEventListener(
  "focusout",
  formState.email.checkEmail
);
formState.pw.pwInput.addEventListener("focusout", formState.pw.checkPw);
formState.form.addEventListener("submit", formState.login);
