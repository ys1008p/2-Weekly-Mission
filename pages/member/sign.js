import users from "/data/users.js";
import { isEmptyString } from "/scripts/utils.js";

function showErrorMessage(target, message) {
  const parent = target.parentElement;
  const errorMessageSpan = parent.querySelector(".input-error__message");

  errorMessageSpan.textContent = message;
  errorMessageSpan.classList.remove("hide");
}

function hideErrorMessage(target) {
  const parent = target.parentElement;
  const errorMessageSpan = parent.querySelector(".input-error__message");

  errorMessageSpan.classList.add("hide");
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
    target.classList.add("input-error");
    showErrorMessage(target, message);
  };
}

function emailValidationSucceeded(target) {
  return function () {
    target.classList.remove("input-error");
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
    target.classList.add("input-error");
    showErrorMessage(target, message);
    eyeIcon.classList.add("eye-icon__error");
  };
}

function passwordValidationSucceeded(target, eyeIcon) {
  return function () {
    target.classList.remove("input-error");
    hideErrorMessage(target);
    eyeIcon.classList.remove("eye-icon__error");
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
    target.classList.toggle("form__input--eye-on");

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
