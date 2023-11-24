import {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  checkPasswordsMatch,
  inputValidationFailed,
  inputValidationSucceeded,
  setUserAccessToken,
} from "../sign.js";

import { postSignUp } from "../api.js";
import { isEmptyString } from "/scripts/utils.js";

navigateFolderPage("pages/auth/signup/");

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", onEmailFocusout);

async function onEmailFocusout({ target }) {
  const errorMessage = await checkEmailValid(target);
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

passwordInput.addEventListener("focusout", onPasswordFocusout);

function onPasswordFocusout({ target }) {
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
 * password check input
 */
const passwordInputChk = document.querySelector("#input-password-chk");
const passwordChkEyeIcon = document.querySelector(
  ".form__password-chk .form__input--eye-off"
);

passwordInputChk.addEventListener("focusout", onPasswordChkFocusout);

function onPasswordChkFocusout({ target }) {
  const errorMessage = checkPasswordsMatch(target, passwordInput);
  if (!isEmptyString(errorMessage)) {
    inputValidationFailed(target, errorMessage, passwordChkEyeIcon);
    return false;
  }

  inputValidationSucceeded(target, passwordChkEyeIcon);
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

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let result =
    onEmailFocusout({ target: emailInput }) &&
    onPasswordFocusout({ target: passwordInput }) &&
    onPasswordChkFocusout({ target: passwordInputChk });

  if (!result) {
    return;
  }

  doSignUp(emailInput.value, passwordInput.value);
}

async function doSignUp(email, password) {
  try {
    const signUpResponse = await postSignUp(email, password);
    setUserAccessToken(signUpResponse);
    location.href = "/pages/folder";
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}
