import {
  displayError,
  resetError,
  validateInput,
  validationState,
} from "./utill/validation.js";
import { ERROR_MESSAGE } from "./utill/constant.js";
import { user } from "./utill/db.js";

const form = document.querySelector(".sign-form");
const inputs = form.getElementsByTagName("input");
const submitBtn = document.querySelector(".cta");
const authType = submitBtn.dataset.auth;

const emailInput = document.querySelector('.sign-input[type="email"]');
const passwordInput = document.querySelector('.sign-input[type="password"]');
const confirmPasswordInput = document.querySelector(".confirm-password");

const focusoutHandler = (e) => {
  const errorMessage = validateInput(e.target);
  displayError(e.target, errorMessage);
};

const submitHandler = (e) => {
  e.preventDefault();
  resetError();
  let isFormValid = true;
  let account = {};

  Array.from(inputs).forEach((input) => {
    const { type, value, name } = input;
    if (!value) {
      const errorMessage = validateInput(input);
      if (errorMessage) {
        displayError(input, errorMessage);
        isFormValid = false;
      }
    } else if (!validationState[name]) {
      displayError(
        input,
        ERROR_MESSAGE[authType]["INVALID_" + type.toUpperCase()]
      );
      isFormValid = false;
    }
    account[name] = value;
  });

  let shouldSubmit = false;

  if (authType === "signin" && isFormValid) {
    if (account.email !== user.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["INVALID_EMAIL"]);
      isFormValid = false;
    } else if (account.password !== user.password) {
      console.log(account, user);
      displayError(passwordInput, ERROR_MESSAGE[authType]["INVALID_PASSWORD"]);
      isFormValid = false;
    } else {
      shouldSubmit = true;
    }
  }

  if (authType === "signup" && isFormValid) {
    if (account.email === user.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["EXIST_EMAIL"]);
      isFormValid = false;
    } else if (
      passwordInput.value !== confirmPasswordInput.value &&
      passwordInput
    ) {
      displayError(
        confirmPasswordInput,
        ERROR_MESSAGE[authType]["PASSWORD_EQUAL"]
      );
      isFormValid = false;
    }
    if (isFormValid) {
      shouldSubmit = true;
    }
  }
  if (shouldSubmit) {
    form.submit();
  }
};

const keyupHandler = (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
};

const toggleEyesHandler = function () {
  const input = this.previousElementSibling;
  const img = this.querySelector("img");

  if (input.type === "password") {
    input.type = "text";
    img.src = "../images/eye-on.svg";
  } else {
    input.type = "password";
    img.src = "../images/eye-off.svg";
  }
};
submitBtn.addEventListener("mousedown", (e) => e.preventDefault());
form.addEventListener("focusout", focusoutHandler);
form.addEventListener("submit", submitHandler);
form.addEventListener("keyup", keyupHandler);

document.querySelectorAll(".eye-button").forEach(function (button) {
  button.addEventListener("click", toggleEyesHandler.bind(button));
});
