import {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  emailValidationFailed,
  emailValidationSucceeded,
  errorMessage,
  isMemberExist,
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
  const errorMessage = checkEmailValid(target, false);
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
 * form
 */
const form = document.querySelector(".form");

form.addEventListener("submit", onSubmitValid);

function checkMemberExist() {
  const isOurMember = isMemberExist({
    email: emailInput.value,
    password: passwordInput.value,
  });

  if (!isOurMember) {
    emailValidationFailed(emailInput, errorMessage.email.loginFailed);
    passwordValidationFailed(
      passwordInput,
      passwordEyeIcon,
      errorMessage.password.loginFailed
    );
    return false;
  }

  emailValidationSucceeded(emailInput);
  passwordValidationSucceeded(passwordInput, passwordEyeIcon);
  return true;
}

function onSubmitValid(e) {
  e.preventDefault();

  let result =
    onEmailFocusoutValid({ target: emailInput }) &&
    onPasswordFocusoutValid({ target: passwordInput }) &&
    checkMemberExist();

  if (!result) {
    return;
  }

  location.href = "/pages/folder";
}
