import {
  displayError,
  resetError,
  validateInput,
  validationState,
} from "./utill/validation.js";
import { ERROR_MESSAGE } from "./utill/constant.js";
import { user } from "./utill/db.js";

const form = document.querySelector(".sign-form");
const inputs = form.querySelectorAll("input");

const submit = document.querySelector(".cta");
const authType = submit.dataset.auth;

const emailInput = document.querySelector('.sign-input[type="email"]');
const passwordInput = document.querySelector('.sign-input[type="password"]');
const confirmPasswordInput = document.querySelector(".confirm-password");

const focusHandler = (e) => {
  if (e.target.tagName === "INPUT") {
    const errorMessage = validateInput(e.target);
    displayError(e.target, errorMessage);
  }
};

const submitHandler = (e) => {
  e.preventDefault();
  resetError();
  let isValid = true;
  let account = {};

  inputs.forEach((input) => {
    const { type, value, name } = input;
    if (validationState[name] === undefined) {
      const errorMessage = validateInput(input);
      if (errorMessage) {
        displayError(input, errorMessage);
        isValid = false;
      }
    } else if (!validationState[name]) {
      displayError(
        input,
        ERROR_MESSAGE[authType]["INVALID_" + type.toUpperCase()]
      );
      isValid = false;
    }
    account[name] = value;
  });

  let isSubmit = false;

  if (authType === "signin" && isValid) {
    if (account.email !== user.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["INVALID_EMAIL"]);
      isValid = false;
    } else if (account.password !== user.password) {
      console.log(account, user);
      displayError(passwordInput, ERROR_MESSAGE[authType]["INVALID_PASSWORD"]);
      isValid = false;
    } else {
      isSubmit = true;
    }
  }

  if (authType === "signup" && isValid) {
    if (account.email === user.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["EXIST_EMAIL"]);
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      displayError(
        confirmPasswordInput,
        ERROR_MESSAGE[authType]["PASSWORD_EQUAL"]
      );
      isValid = false;
    }
    if (isValid) {
      isSubmit = true;
    }
  }
  if (isSubmit) {
    form.submit();
  }
};

const keyupHandler = (e) => {
  if (e.key === "Enter") {
    submit.click();
  }
};

form.addEventListener("focusout", focusHandler);
form.addEventListener("submit", submitHandler);
document.addEventListener("keyup", keyupHandler);
