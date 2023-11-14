import users from "/data/users.js";
import { isEmptyString } from "/scripts/utils.js";

function handleErrorMessage(element, errorMessage = "", addOrRemoveHide) {
  const parent = element.parentElement;
  const errorMessageSpan = parent.querySelector(".input-error__message");

  errorMessageSpan.textContent = errorMessage;
  errorMessageSpan.classList[addOrRemoveHide]("hide");
}

function validatingMachine(target, validators, failAction, successAction) {
  for (const { validator, checkExist } of validators) {
    const errorMessage = validator(target, checkExist);

    if (!isEmptyString(errorMessage)) {
      failAction(errorMessage);
      return false;
    }
  }
  successAction();
  return true;
}

function checkEmailValid(element, checkExist = true) {
  if (isEmptyString(element.value)) {
    return "이메일을 입력해주세요.";
  }
  if (!isEmailValid(element.value)) {
    return "올바른 이메일 주소가 아닙니다.";
  }
  if (checkExist && isEmailExist(element.value)) {
    return "이미 사용 중인 이메일입니다.";
  }
  return "";
}

function emailValidationFailed(target) {
  return function (message) {
    target.classList.add("input-error");
    handleErrorMessage(target, message, "remove");
  };
}

function emailValidationSucceeded(target) {
  return function () {
    target.classList.remove("input-error");
    handleErrorMessage(target, "", "add");
  };
}

function checkPasswordValid(element) {
  if (isEmptyString(element.value)) {
    return "비밀번호를 입력해주세요.";
  }
  if (!isPasswordValid(element.value)) {
    return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  }
  return "";
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
    handleErrorMessage(target, message, "remove");
    eyeIcon.classList.add("eye-icon__error");
  };
}

function passwordValidationSucceeded(target, eyeIcon) {
  return function () {
    target.classList.remove("input-error");
    handleErrorMessage(target, "", "add");
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
  checkEmailValid,
  checkIsOurMember,
  checkPasswordChkSame,
  checkPasswordValid,
  emailValidationFailed,
  emailValidationSucceeded,
  passwordValidationFailed,
  passwordValidationSucceeded,
  validatingMachine,
};
