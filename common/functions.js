import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD } from './constants.js';
import { variable } from './variables.js';

export function validateEmail(e) {
  let emailValue = variable.emailInput.value;

  if (emailValue != '' && isEmail(emailValue)) {
    resetErrorMessage(variable.emailInput, variable.emailWarningTag);
  }
  if (emailValue == '') {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.emptyEmail);
    return false;
  }
  if (!isEmail(emailValue)) {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.invaildEmail);
    return false;
  }

  return true;
}

export function validatePassword(e) {
  let passwordValue = variable.passwordInput.value;

  if (passwordValue != '' && checkPassword(passwordValue)) {
    resetErrorMessage(variable.passwordInput, variable.passwordWarningTag);
  }

  if (passwordValue == '') {
    printErrorMessage(variable.passwordInput, variable.passwordWarningTag, ERROR_MESSAGE.emptyPassword);
    return false;
  }

  return true;
}

export function checkSamePassword(e) {
  if (variable.passwordInput.value !== variable.checkPasswordInput.value) {
    printErrorMessage(variable.checkPasswordInput, variable.passwordCheckWarningTag, ERROR_MESSAGE.notSamePassword);
    return false;
  } else {
    resetErrorMessage(variable.checkPasswordInput, variable.passwordCheckWarningTag);
  }
  return true;
}

export function performSignIn(e) {
  e.preventDefault();

  if (variable.emailInput.value != USER_EMAIL) {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.wrongEmail);
  }

  if (variable.passwordInput.value != USER_PASSWORD) {
    printErrorMessage(variable.passwordInput, variable.passwordWarningTag, ERROR_MESSAGE.wrongPassword);
  }
  if (variable.passwordInput.value != '' && variable.passwordInput.value == USER_PASSWORD) {
    resetErrorMessage(variable.passwordInput, variable.passwordWarningTag);
  }
  if (variable.emailInput.value === USER_EMAIL && variable.passwordInput.value === USER_PASSWORD) {
    window.location.href = '/folder.html';
  }
}

export function performSignUp(e) {
  e.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isSamePassword = checkSamePassword();

  if (variable.emailInput.value === USER_EMAIL) {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.duplicateEmail);
    return false;
  }
  if (!checkPassword(variable.passwordInput.value)) {
    printErrorMessage(variable.passwordInput, variable.passwordWarningTag, ERROR_MESSAGE.invaildPassword);
    return false;
  }
  if (isEmailValid && isPasswordValid && isSamePassword) {
    window.location.href = '/folder.html';
  }
}

export function showAndHidePassword(index) {
  let passwordType = variable.eyeBtn[index].previousElementSibling;
  let eyBtnIcon = variable.eyeBtn[index].firstElementChild;

  if (passwordType.type == 'password') {
    passwordType.type = 'text';
    eyBtnIcon.src = './images/eye-on.svg';
  } else if (passwordType.type == 'text') {
    passwordType.type = 'password';
    eyBtnIcon.src = './images/eye-off.svg';
  }
}

function printErrorMessage(input, warningTag, message) {
  let html = `${message}`;

  input.style.borderColor = '#ff5b56';
  warningTag.innerHTML = html;
  warningTag.style.display = 'block';
}

function resetErrorMessage(input, warningTag) {
  input.style.borderColor = '#ccd5e3';
  warningTag.innerHTML = '';
}

function isEmail(email) {
  let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return regExp.test(email);
}

function checkPassword(password) {
  let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return regExp.test(password);
}
