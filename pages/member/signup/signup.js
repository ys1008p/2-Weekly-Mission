import {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  checkPasswordsMatch,
  emailValidationFailed,
  emailValidationSucceeded,
  passwordValidationFailed,
  passwordValidationSucceeded,
} from "../sign.js";

import { isEmptyString } from "/scripts/utils.js";

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", onEmailFocusoutValid);

function onEmailFocusoutValid({ target }) {
  const errorMessage = checkEmailValid(target);
  if (!isEmptyString(errorMessage)) {
    emailValidationFailed(target, errorMessage);
    return false;
  }

  emailValidationSucceeded(target);
  return true;
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
  const errorMessage = checkPasswordValid(target);
  if (!isEmptyString(errorMessage)) {
    passwordValidationFailed(target, passwordEyeIcon, errorMessage);
    return false;
  }

  passwordValidationSucceeded(target, passwordEyeIcon);
  return true;
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
  const errorMessage = checkPasswordsMatch(target, passwordInput);
  if (!isEmptyString(errorMessage)) {
    passwordValidationFailed(target, passwordChkEyeIcon, errorMessage);
    return false;
  }

  passwordValidationSucceeded(target, passwordChkEyeIcon);
  return true;
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
