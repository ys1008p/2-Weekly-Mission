import { validObject } from "./validFunction.js";

export const formState = {
  email: {
    emailInput: document.querySelector("#username"),
    checkEmail: function (e) {
      const emailErrorText = e.target.nextElementSibling;
      const errorMsg = {
        empty: "이메일을 입력해주세요.",
        used: "이미 사용 중인 이메일입니다.",
        wrong: "올바른 이메일 주소가 아닙니다.",
      };
      if (e.target.value === "") {
        validObject.ifError(e, emailErrorText, errorMsg.wrong, "email");
      } else if (e.target.value.includes("@") == false) {
        validObject.ifError(e, emailErrorText, errorMsg.wrong, "email");
      } else {
        const member = {
          email: e.target.value,
        };

        async function checkEmailFetch(member) {
          try {
            const response = await fetch(
              "https://bootcamp-api.codeit.kr/api/check-email",
              {
                method: "POST",
                body: JSON.stringify(member),
              }
            );
            console.log(response);
            const result = response.ok;
            result
              ? validObject.ifOk(e, emailErrorText, errorMsg.used, "email")
              : validObject.ifError(e, emailErrorText, errorMsg.used, "email");
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        }
        checkEmailFetch(member);
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
      } else {
        validObject.ifOk(e, pwConfirmationErrorText, "pwConfirmation");
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

    const member = {
      email: formState.email.emailInput,
      password: formState.pw.pwInput,
    };

    async function signupFetch(member) {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sign-up",
          {
            method: "POST",
            body: JSON.stringify(member),
          }
        );
        const result = await response.json();
        console.log(result);
        if (result.error.status == 400) {
          formState.email.emailErrorText.innerHTML =
            "이미 등록된 이메일입니다.";
          formState.emailInput.classList.add("error");
        } else if (result.data.accessToken) {
          formState.email.emailErrorText.innerHTML = "";
          formState.emailInput.classList.remove("error");
          localStorage.setItem(result.data.accessToken);
          location.href = "/folder";
        }
      } catch (e) {
        console.log(e);
      }
    }

    signupFetch(member);
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
