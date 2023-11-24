import {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  errorMessage,
  inputValidationFailed,
  inputValidationSucceeded,
  setUserAccessToken,
} from "../sign.js";

import { postSignIn } from "../api.js";
import { isEmptyString } from "/scripts/utils.js";

navigateFolderPage("pages/auth/signin/");

/**
 * email input
 */
const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("focusout", onEmailFocusout);

async function onEmailFocusout({ target }) {
  const errorMessage = await checkEmailValid(target, false);
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
 * form
 */
const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const validResult =
    onEmailFocusout({ target: emailInput }) &&
    onPasswordFocusout({ target: passwordInput });

  if (!validResult) {
    return;
  }

  doSignIn(emailInput.value, passwordInput.value);
}

async function doSignIn(email, password) {
  try {
    const signInResponse = await postSignIn(email, password);
    setUserAccessToken(signInResponse);
    location.href = "/pages/folder";
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
    if (error.name === "AuthApiError") {
      inputValidationFailed(emailInput, errorMessage.email.loginFailed);
      inputValidationFailed(
        passwordInput,
        errorMessage.password.loginFailed,
        passwordEyeIcon
      );
    }
  }
}
