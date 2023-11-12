import {
  showErrorMessage,
  hideErrorMessage,
  validatingMachine,
  setInputStyleError,
  setInputStyleNormal,
  setEyeIconPositionError,
  setEyeIconPositionNormal,
} from "./sign.js";
import {
  isEmptyString,
  isEmailValid,
  isPasswordValid,
  isExistsEmail,
} from "./utils.js";

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", emailFocusoutValid);

function emailFocusoutValid({ target }) {
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
      validator: checkEmailNotExists,
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

function checkEmailNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}

function checkEmailValid(target, message) {
  if (isEmailValid(target.value)) {
    return "";
  }
  return message;
}

function checkEmailNotExists(target, message) {
  if (!isExistsEmail(target.value)) {
    return "";
  }
  return message;
}

function emailValidationFailed(target) {
  return function (message) {
    setInputStyleError(target);
    showErrorMessage(target, message);
  };
}

function emailValidationSucceeded(target) {
  return function () {
    setInputStyleNormal(target);
    hideErrorMessage(target);
  };
}

/**
 * password input
 */
const passwordInput = document.querySelector("#input-password");
const passwordEyeIcon = document.querySelector(
  ".form__password .form__input--eye-off"
);

passwordInput.addEventListener("focusout", passwordFocusoutValid);

function passwordFocusoutValid({ target }) {
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

function checkPasswordNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}

function checkPasswordValid(target, message) {
  if (isPasswordValid(target.value)) {
    return "";
  }
  return message;
}

function passwordValidationFailed(target, eyeIcon) {
  return function (message) {
    setInputStyleError(target);
    showErrorMessage(target, message);
    setEyeIconPositionError(eyeIcon);
  };
}

function passwordValidationSucceeded(target, eyeIcon) {
  return function () {
    setInputStyleNormal(target);
    hideErrorMessage(target);
    setEyeIconPositionNormal(eyeIcon);
  };
}

/**
 * password check input
 */
const passwordInputChk = document.querySelector("#input-password-chk");
const passwordChkEyeIcon = document.querySelector(
  ".form__password-chk .form__input--eye-off"
);

passwordInputChk.addEventListener("focusout", passwordChkFocusoutValid);

function passwordChkFocusoutValid({ target }) {
  const validators = [
    {
      validator: checkPasswordChkSame,
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

function checkPasswordChkSame(target, message) {
  if (passwordInput.value === target.value) {
    return "";
  }
  return message;
}

/**
 * form
 */
const form = document.querySelector(".form");

form.addEventListener("submit", onSubmitValid);

function onSubmitValid(e) {
  e.preventDefault();

  let result =
    emailFocusoutValid({ target: emailInput }) &&
    passwordFocusoutValid({ target: passwordInput }) &&
    passwordChkFocusoutValid({ target: passwordInputChk });

  if (!result) {
    return;
  }

  location.href = "/folder.html";
}
