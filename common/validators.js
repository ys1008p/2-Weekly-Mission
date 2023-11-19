import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD, isEmail, checkPassword } from './constants.js';
import { domElements } from './domElements.js';
import { signinApi, signupApi } from '../src/postApi.js';

export function validateEmail(e) {
  let emailValue = domElements.emailInput.value;

  if (emailValue != '' && isEmail(emailValue)) {
    resetErrorMessage(domElements.emailInput, domElements.emailWarningTag);
  }
  if (emailValue == '') {
    printErrorMessage(domElements.emailInput, domElements.emailWarningTag, ERROR_MESSAGE.emptyEmail);
    return false;
  }
  if (!isEmail(emailValue)) {
    printErrorMessage(domElements.emailInput, domElements.emailWarningTag, ERROR_MESSAGE.invaildEmail);
    return false;
  }

  return true;
}

export function validatePassword(e) {
  let passwordValue = domElements.passwordInput.value;

  if (passwordValue != '') {
    resetErrorMessage(domElements.passwordInput, domElements.passwordWarningTag);
  } else if (passwordValue == '') {
    printErrorMessage(domElements.passwordInput, domElements.passwordWarningTag, ERROR_MESSAGE.emptyPassword);
    return false;
  }

  return true;
}

export function checkSamePassword(e) {
  if (domElements.passwordInput.value !== domElements.checkPasswordInput.value) {
    printErrorMessage(
      domElements.checkPasswordInput,
      domElements.passwordCheckWarningTag,
      ERROR_MESSAGE.notSamePassword,
    );
    return false;
  } else {
    resetErrorMessage(domElements.checkPasswordInput, domElements.passwordCheckWarningTag);
  }
  return true;
}

export function performSignIn(e) {
  e.preventDefault();

  if (domElements.emailInput.value !== USER_EMAIL) {
    printErrorMessage(domElements.emailInput, domElements.emailWarningTag, ERROR_MESSAGE.wrongEmail);
  }

  if (domElements.passwordInput.value !== USER_PASSWORD) {
    printErrorMessage(domElements.passwordInput, domElements.passwordWarningTag, ERROR_MESSAGE.wrongPassword);
  }

  signinApi(domElements.emailInput.value, domElements.passwordInput.value);
}

export function performSignUp(e) {
  e.preventDefault();

  if (!checkPassword(domElements.passwordInput.value)) {
    printErrorMessage(domElements.passwordInput, domElements.passwordWarningTag, ERROR_MESSAGE.invaildPassword);
    return false;
  }
  signupApi(
    domElements.emailInput.value,
    domElements.passwordInput.value,
    domElements.emailInput,
    domElements.emailWarningTag,
    ERROR_MESSAGE.duplicateEmail,
  );
}

export function showAndHidePassword(index) {
  let passwordType = domElements.eyeBtn[index].previousElementSibling;
  let eyBtnIcon = domElements.eyeBtn[index].firstElementChild;

  if (passwordType.type == 'password') {
    passwordType.type = 'text';
    eyBtnIcon.src = './images/eye-on.svg';
  } else if (passwordType.type == 'text') {
    passwordType.type = 'password';
    eyBtnIcon.src = './images/eye-off.svg';
  }
}

export function printErrorMessage(input, warningTag, message) {
  let html = `${message}`;

  input.style.borderColor = '#ff5b56';
  warningTag.innerHTML = html;
  warningTag.style.display = 'block';
}

function resetErrorMessage(input, warningTag) {
  input.style.borderColor = '#ccd5e3';
  warningTag.innerHTML = '';
}
