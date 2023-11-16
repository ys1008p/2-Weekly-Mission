import {
  EmailValidationError,
  PasswordValidationError,
  ValidationError,
} from "/src/commons/ValidationError.js";
import Input from "/src/commons/Input.js";
import {
  SigninEmailValidator,
  SigninPasswordValidator,
} from "/src/commons/Validator.js";
import Icon from "/src/commons/Icon.js";
import { PATH_FOLDER } from "/src/constants/routes.js";
import { postSignin } from "/src/auth/api.js";

const signinFormEl = document.querySelector(".signin");
const passwordToggleButtonEl = document.querySelector(".password-toggle");

const emailValidator = new SigninEmailValidator();
const passwordValidator = new SigninPasswordValidator();

const emailInput = new Input({
  inputQuery: ".email-input",
  validator: emailValidator,
  messageQuery: ".email-error-message",
});
const passwordInput = new Input({
  inputQuery: ".password-input",
  validator: passwordValidator,
  messageQuery: ".password-error-message",
});

const passwordToggleIcon = new Icon(".password-toggle-icon");

const togglePassword = (input) => {
  if (input.getType() === "password") {
    input.setType("text");
  } else {
    input.setType("password");
  }
};

const togglePasswordIcon = (input, icon) => {
  const isShown = input.getType() === "password";
  isShown ? icon.setIcon("eye-off") : icon.setIcon("eye-on");
};

const handleEmailFocusOut = (e) => {
  try {
    emailInput.validate();
    emailInput.changeStateToValid();
    emailInput.hideErrorMessage();
  } catch (err) {
    if (err instanceof ValidationError) {
      emailInput.showErrorMessage(err.message);
      return;
    }
    console.error(err);
  }
};

const handlePasswordFocusOut = (e) => {
  try {
    passwordInput.validate();
    passwordInput.changeStateToValid();
    passwordInput.hideErrorMessage();
  } catch (err) {
    if (err instanceof ValidationError) {
      passwordInput.changeStateToInvalid();
      passwordInput.showErrorMessage(err.message);
      return;
    }
    console.error(err);
  }
};

const handleSubmitSignin = async (e) => {
  e.preventDefault();
  try {
    emailInput.validate();
    passwordInput.validate();
    await postSignin(emailInput.getValue(), passwordInput.getValue());
    location.href = PATH_FOLDER;
  } catch (err) {
    if (err instanceof EmailValidationError) {
      emailInput.showErrorMessage(err.message);
    } else if (err instanceof PasswordValidationError) {
      passwordInput.showErrorMessage(err.message);
    }
  }
};

const handlePasswordToggle = (e) => {
  togglePassword(passwordInput);
  togglePasswordIcon(passwordInput, passwordToggleIcon);
};

emailInput.addEventListener("focusout", handleEmailFocusOut);
passwordInput.addEventListener("focusout", handlePasswordFocusOut);
signinFormEl.addEventListener("submit", handleSubmitSignin);
passwordToggleButtonEl.addEventListener("click", handlePasswordToggle);
