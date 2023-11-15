import {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  errorMessage,
  inputValidationFailed,
  inputValidationSucceeded,
  isMemberExist,
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
    inputValidationFailed(target, errorMessage);
    return false;
  }

  inputValidationSucceeded(target);
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
    inputValidationFailed(target, errorMessage, passwordEyeIcon);
    return false;
  }

  inputValidationSucceeded(target, passwordEyeIcon);
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

function checkMemberExist() {
  const isOurMember = isMemberExist({
    email: emailInput.value,
    password: passwordInput.value,
  });

  if (!isOurMember) {
    inputValidationFailed(emailInput, errorMessage.email.loginFailed);
    inputValidationFailed(
      passwordInput,
      passwordEyeIcon,
      errorMessage.password.loginFailed
    );
    return false;
  }

  inputValidationSucceeded(emailInput);
  inputValidationSucceeded(passwordInput, passwordEyeIcon);
  return true;
}
