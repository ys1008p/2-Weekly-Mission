import {
  changePasswordVisibility,
  checkEmailNotEmpty,
  checkEmailNotExist,
  checkEmailValid,
  checkPasswordChkSame,
  checkPasswordNotEmpty,
  checkPasswordValid,
  emailValidationFailed,
  emailValidationSucceeded,
  passwordValidationFailed,
  passwordValidationSucceeded,
  validatingMachine,
} from "../sign.js";

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", onEmailFocusoutValid);

function onEmailFocusoutValid({ target }) {
  const validators = [
    {
      validator: checkEmailNotEmpty,
      message: "이메일을 입력해주세요.",
    },
    {
      validator: checkEmailValid,
      message: "올바른 이메일 주소가 아닙니다.",
    },
    {
      validator: checkEmailNotExist,
      message: "이미 사용 중인 이메일입니다.",
    },
  ];

  return validatingMachine(
    target,
    validators,
    emailValidationFailed(target),
    emailValidationSucceeded(target)
  );
}

/**
 * password input
 */
const passwordInput = document.querySelector("#input-password");
const passwordEyeIcon = document.querySelector(
  ".form__password .form__input--eye-off"
);

passwordInput.addEventListener("focusout", onPasswordFocusoutValid);

function onPasswordFocusoutValid({ target }) {
  const validators = [
    {
      validator: checkPasswordNotEmpty,
      message: "비밀번호를 입력해주세요.",
    },
    {
      validator: checkPasswordValid,
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
  ];

  return validatingMachine(
    target,
    validators,
    passwordValidationFailed(target, passwordEyeIcon),
    passwordValidationSucceeded(target, passwordEyeIcon)
  );
}

passwordEyeIcon.addEventListener(
  "click",
  changePasswordVisibility(passwordInput)
);

/**
 * password check input
 */
const passwordInputChk = document.querySelector("#input-password-chk");
const passwordChkEyeIcon = document.querySelector(
  ".form__password-chk .form__input--eye-off"
);

passwordInputChk.addEventListener("focusout", onPasswordChkFocusoutValid);

function onPasswordChkFocusoutValid({ target }) {
  const validators = [
    {
      validator: checkPasswordChkSame(passwordInput),
      message: "비밀번호가 일치하지 않아요.",
    },
  ];

  return validatingMachine(
    target,
    validators,
    passwordValidationFailed(target, passwordChkEyeIcon),
    passwordValidationSucceeded(target, passwordChkEyeIcon)
  );
}

passwordChkEyeIcon.addEventListener(
  "click",
  changePasswordVisibility(passwordInputChk)
);

/**
 * form
 */
const form = document.querySelector(".form");

form.addEventListener("submit", onSubmitValid);

function onSubmitValid(e) {
  e.preventDefault();

  let result =
    onEmailFocusoutValid({ target: emailInput }) &&
    onPasswordFocusoutValid({ target: passwordInput }) &&
    onPasswordChkFocusoutValid({ target: passwordInputChk });

  if (!result) {
    return;
  }

  location.href = "/pages/folder";
}
