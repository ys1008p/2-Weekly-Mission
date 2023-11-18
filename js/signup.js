import { validObject } from "./validFunction.js";

export const formState = {
  email: {
    emailInput: document.querySelector("#username"),
    checkEmail: function (e) {
      const emailErrorText = e.target.nextElementSibling;
      const errorMsg = [
        "이메일을 입력해주세요.",
        "이미 사용 중인 이메일입니다.",
        "올바른 이메일 주소가 아닙니다.",
      ];
      if (e.target.value === "") {
        validObject.ifError(e, emailErrorText, errorMsg[0], "email");
      } else if (e.target.value === "test@codeit.com") {
        validObject.ifError(e, emailErrorText, errorMsg[1], "email");
      } else if (e.target.value.includes("@") == false) {
        validObject.ifError(e, emailErrorText, errorMsg[2], "email");
      } else {
        validObject.ifOk(e, emailErrorText, "email");
        console.log(formState.email.isValid);
      }
    },
    isValid: false,
  },
  pw: {
    pwInput: document.querySelector("#password"),
    checkPw: function (e) {
      const engOnly = /^[A-Za-z]+$/;
      const pwErrorText = e.target.parentElement.lastElementChild;
      const errorMsg = [
        "비밀번호를 입력해주세요.",
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      ];

      if (e.target.value === "") {
        validObject.ifError(e, pwErrorText, errorMsg[0], "pw");
      } else if (
        e.target.value.length < 8 ||
        isNaN(e.target.value) !== true ||
        engOnly.test(e.target.value)
      ) {
        validObject.ifError(e, pwErrorText, errorMsg[1], "pw");
      } else {
        validObject.ifOk(e, pwErrorText, "pw");
      }
    },
    isValid: false,
  },
  pwConfirmation: {
    pwConfirmationInput: document.querySelector("#password_check"),
    CheckpwConfirmation: function (e) {
      const pwConfirmationErrorText = e.target.parentElement.lastElementChild;
      const errorMsg = "비밀번호가 일치하지 않아요";
      if (formState.pw.pwInput.value !== e.target.value) {
        validObject.ifError(
          e,
          pwConfirmationErrorText,
          errorMsg,
          "pwConfirmation"
        );
        validObject.pw.pwInput.classList.add("error");
      } else {
        validObject.ifOk(e, pwConfirmationErrorText, "pwConfirmation");
        validObject.pw.pwInput.classList.remove("error");
      }
    },
    isValid: false,
  },
  signup: function (e) {
    e.preventDefault();
    if (
      !formState.email.isValid ||
      !formState.pw.isValid ||
      !formState.pwConfirmation.isValid
    )
      return;
    location.href = "/folder";
  },
  form: document.querySelector("form"),
};

formState.email.emailInput.addEventListener(
  "focusout",
  formState.email.checkEmail
);
formState.pw.pwInput.addEventListener("focusout", formState.pw.checkPw);
formState.pwConfirmation.pwConfirmationInput?.addEventListener(
  "focusout",
  formState.pwConfirmation.CheckpwConfirmation
);
formState.form.addEventListener("submit", formState.signup);
