// validation.js
import { ERROR_MESSAGE } from "./constant.js";
import { user } from "./db.js";

const submit = document.querySelector(".cta");
const authType = submit.dataset.auth;

export const validationState = {};

const PATTERN = {
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  "confirm-password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const getErrorMessage = (name, condition) => {
  const errorType = condition ? "EMPTY_" : "INVALID_";
  return ERROR_MESSAGE[authType][errorType + name.toUpperCase()];
};

export function validateInput(input) {
  const { name, value } = input;
  let errorMessage = "";

  if (value === "") {
    errorMessage = getErrorMessage(name, true);
  } else if (!PATTERN[name].test(value)) {
    errorMessage = getErrorMessage(name, false);
  } else if (
    authType === "signup" &&
    name === "email" &&
    value === user.email
  ) {
    errorMessage = ERROR_MESSAGE[authType]["EXIST_EMAIL"];
  }

  validationState[name] = !errorMessage;

  return errorMessage;
}

export function resetError() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));
}
export function displayError(input, errorMessage) {
  const errorDisplay = input.parentNode.nextElementSibling;
  errorDisplay.textContent = errorMessage;
}
