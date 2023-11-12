import users from "../data/users.js";
import {
  getParentsChildElement,
  hideElement,
  setElementTextContent,
  showElement,
} from "./dom.js";
import { isEmptyString } from "./utils.js";

export function showErrorMessage(target, message) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  setElementTextContent(errorMessageSpan, message);
  showElement(errorMessageSpan);
}

export function hideErrorMessage(target) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  hideElement(errorMessageSpan);
}

export function validatingMachine(
  target,
  validators,
  failAction,
  successAction
) {
  for (const { validator, message } of validators) {
    const result = validator(target, message);

    if (!isEmptyString(result)) {
      failAction(message);
      return false;
    }
  }
  successAction();
  return true;
}

export function checkEmailNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}

export function checkEmailValid(target, message) {
  if (isEmailValid(target.value)) {
    return "";
  }
  return message;
}

export function checkEmailNotExist(target, message) {
  if (!isEmailExist(target.value)) {
    return "";
  }
  return message;
}

export function emailValidationFailed(target) {
  return function (message) {
    setInputStyleError(target);
    showErrorMessage(target, message);
  };
}

export function emailValidationSucceeded(target) {
  return function () {
    setInputStyleNormal(target);
    hideErrorMessage(target);
  };
}

export function checkPasswordNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}

export function checkPasswordValid(target, message) {
  if (isPasswordValid(target.value)) {
    return "";
  }
  return message;
}

export function checkPasswordChkSame(password) {
  return function (passwordChk, message) {
    if (password.value === passwordChk.value) {
      return "";
    }
    return message;
  };
}

export function passwordValidationFailed(target, eyeIcon) {
  return function (message) {
    setInputStyleError(target);
    showErrorMessage(target, message);
    setEyeIconPositionError(eyeIcon);
  };
}

export function passwordValidationSucceeded(target, eyeIcon) {
  return function () {
    setInputStyleNormal(target);
    hideErrorMessage(target);
    setEyeIconPositionNormal(eyeIcon);
  };
}

export function isEmailValid(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return regex.test(email);
}

export function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password.trim().length >= 8 && regex.test(password);
}

export function isEmailExist(email) {
  return users.some((user) => user.email === email);
}

export function isMemberExist(member) {
  console.log(member);
  return users.some(
    (user) => user.email === member.email && user.password === member.password
  );
}

export function setInputStyleError(target) {
  target.classList.add("input-error");
}

export function setInputStyleNormal(target) {
  target.classList.remove("input-error");
}

export function setEyeIconPositionError(eyeIcon) {
  eyeIcon.classList.add("eye-icon__error");
}

export function setEyeIconPositionNormal(eyeIcon) {
  eyeIcon.classList.remove("eye-icon__error");
}

export function changePasswordVisibility(passwordInput) {
  return function ({ target }) {
    target.classList.toggle("form__input--eye-on");
    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      return;
    }
    passwordInput.setAttribute("type", "password");
  };
}
