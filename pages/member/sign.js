import users from "/data/users.js";
import {
  addElementClass,
  getParentsChildElement,
  removeElementClass,
  setElementTextContent,
  toggleElementClass,
} from "/scripts/dom.js";
import { isEmptyString } from "/scripts/utils.js";

function showErrorMessage(target, message) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  setElementTextContent(errorMessageSpan, message);
  removeElementClass(errorMessageSpan, "hide");
}

function hideErrorMessage(target) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  addElementClass(errorMessageSpan, "hide");
}

function validatingMachine(target, validators, failAction, successAction) {
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

function checkEmailNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}
function checkEmailValid(target, message) {
  if (isEmailValid(target.value)) {
    return "";
  }
  return message;
}

function checkEmailNotExist(target, message) {
  if (!isEmailExist(target.value)) {
    return "";
  }
  return message;
}

function emailValidationFailed(target) {
  return function (message) {
    addElementClass(target, "input-error");
    showErrorMessage(target, message);
  };
}

function emailValidationSucceeded(target) {
  return function () {
    removeElementClass(target, "input-error");
    hideErrorMessage(target);
  };
}

function checkPasswordNotEmpty(target, message) {
  if (!isEmptyString(target.value)) {
    return "";
  }
  return message;
}

function checkPasswordValid(target, message) {
  if (isPasswordValid(target.value)) {
    return "";
  }
  return message;
}

function checkPasswordChkSame(password) {
  return function (passwordChk, message) {
    if (password.value === passwordChk.value) {
      return "";
    }
    return message;
  };
}

function checkIsOurMember(member, message) {
  if (isMemberExist(member)) {
    return "";
  }
  return message;
}

function passwordValidationFailed(target, eyeIcon) {
  return function (message) {
    addElementClass(target, "input-error");
    showErrorMessage(target, message);
    addElementClass(eyeIcon, "eye-icon__error");
  };
}

function passwordValidationSucceeded(target, eyeIcon) {
  return function () {
    removeElementClass(target, "input-error");
    hideErrorMessage(target);
    removeElementClass(eyeIcon, "eye-icon__error");
  };
}

function isEmailValid(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return regex.test(email);
}

function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password.trim().length >= 8 && regex.test(password);
}

function isEmailExist(email) {
  return users.some((user) => user.email === email);
}

function isMemberExist(member) {
  return users.some(
    (user) => user.email === member.email && user.password === member.password
  );
}

function changePasswordVisibility(passwordInput) {
  return function ({ target }) {
    toggleElementClass(target, "form__input--eye-on");

    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      return;
    }
    passwordInput.setAttribute("type", "password");
  };
}

export {
  changePasswordVisibility,
  checkEmailNotEmpty,
  checkEmailNotExist,
  checkEmailValid,
  checkIsOurMember,
  checkPasswordChkSame,
  checkPasswordNotEmpty,
  checkPasswordValid,
  emailValidationFailed,
  emailValidationSucceeded,
  passwordValidationFailed,
  passwordValidationSucceeded,
  validatingMachine,
};
