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

if (localStorage.getItem("accessToken")) {
  location.replace("/pages/folder/");
}

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", onEmailFocusoutValid);

async function onEmailFocusoutValid({ target }) {
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
    onEmailFocusoutValid({ target: emailInput }) &&
    onPasswordFocusoutValid({ target: passwordInput }) &&
    onPasswordChkFocusoutValid({ target: passwordInputChk });

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
