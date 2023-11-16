import Input from "/src/commons/Input.js";
import Icon from "/src/commons/Icon.js";
import {
  SignupEmailValidator,
  SignupPasswordValidator,
  SignupPasswordConfirmValidator,
} from "/src/commons/Validator.js";
import {
  ValidationError,
  EmailValidationError,
  PasswordConfirmValidationError,
  PasswordValidationError,
} from "/src/commons/ValidationError.js";
import { PATH_FOLDER } from "/src/constants/routes.js";
import { postCheckEmail, postSignup } from "/src/auth/api.js";

const signupFormEl = document.querySelector(".signup");
const passwordToggleButtonEl = document.querySelector(".password-toggle");
const passwordConfirmToggleButtonEl = document.querySelector(
  ".password-confirm-toggle"
);

const emailValidator = new SignupEmailValidator();
const passwordValidator = new SignupPasswordValidator();
const passwordConfirmValidator = new SignupPasswordConfirmValidator();

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
const passwordConfirmInput = new Input({
  inputQuery: ".password-confirm-input",
  validator: passwordConfirmValidator,
  messageQuery: ".password-confirm-error-message",
});
const passwordToggleIcon = new Icon(".password-toggle-icon");
const passwordConfirmToggleIcon = new Icon(".password-confirm-toggle-icon");

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

const handleEmailFocusOut = async (e) => {
  try {
    emailInput.validate();
    await postCheckEmail(emailInput.getValue());
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

const handlePasswordConfirmFocusOut = (e) => {
  try {
    passwordConfirmInput.validate(passwordInput.getValue());
    passwordConfirmInput.changeStateToValid();
    passwordConfirmInput.hideErrorMessage();
  } catch (err) {
    if (err instanceof ValidationError) {
      passwordConfirmInput.changeStateToInvalid();
      passwordConfirmInput.showErrorMessage(err.message);
      return;
    }
    console.error(err);
  }
};

const handleSubmitSignup = async (e) => {
  e.preventDefault();
  try {
    emailInput.validate();
    passwordInput.validate();
    passwordConfirmInput.validate(passwordInput.getValue());
    await postSignup(emailInput.getValue(), passwordInput.getValue());
    location.href = PATH_FOLDER;
  } catch (err) {
    if (err instanceof EmailValidationError) {
      emailInput.showErrorMessage(err.message);
    } else if (err instanceof PasswordValidationError) {
      passwordInput.showErrorMessage(err.message);
    } else if (err instanceof PasswordConfirmValidationError) {
      passwordConfirmInput.showErrorMessage(err.message);
    }
  }
};

const handlePasswordToggle = (e) => {
  togglePassword(passwordInput);
  togglePasswordIcon(passwordInput, passwordToggleIcon);
};

const handlePasswordConfirmToggle = (e) => {
  togglePassword(passwordConfirmInput);
  togglePasswordIcon(passwordConfirmInput, passwordConfirmToggleIcon);
};

emailInput.addEventListener("focusout", handleEmailFocusOut);
passwordInput.addEventListener("focusout", handlePasswordFocusOut);
passwordConfirmInput.addEventListener(
  "focusout",
  handlePasswordConfirmFocusOut
);
signupFormEl.addEventListener("submit", handleSubmitSignup);
passwordToggleButtonEl.addEventListener("click", handlePasswordToggle);
passwordConfirmToggleButtonEl.addEventListener(
  "click",
  handlePasswordConfirmToggle
);
