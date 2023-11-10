import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD } from './constants.js';
import { variable } from './variables.js';

export function validateEmail() {
  if (variable.emailInput.value != '' && isEmail(variable.emailInput.value)) {
    resetErrorMessage(variable.emailInput, variable.emailWarningTag);
  }
  if (variable.emailInput.value == '') {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.emptyEmail);
  }
  if (!isEmail(variable.emailInput.value)) {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.invaildEmail);
  }
  if (variable.emailInput.value == USER_EMAIL) {
    printErrorMessage(variable.emailInput, variable.emailWarningTag, ERROR_MESSAGE.duplicateEmail);
  }
}

export function validatePassword() {
  if (variable.passwordInput.value == '') {
    printErrorMessage(variable.passwordInput, variable.passwordWarningTag, ERROR_MESSAGE.emptyPassword);
  }

  if (!checkPassword(variable.passwordInput.value)) {
    printErrorMessage(variable.passwordInput, variable.passwordWarningTag, ERROR_MESSAGE.invaildPassword);
  } else {
    resetErrorMessage(variable.passwordInput, variable.passwordWarningTag);
  }
}

export function checkSamePassword() {
  if (variable.passwordInput.value !== variable.checkPasswordInput.value) {
    printErrorMessage(variable.checkPasswordInput, variable.passwordCheckWarningTag, ERROR_MESSAGE.notSamePassword);
  } else {
    resetErrorMessage(variable.checkPasswordInput, variable.passwordCheckWarningTag);
  }
}

export function performLogin(e) {
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

export function showAndHidePassword(index) {
  let passwordType = variable.eyeBtn[index].previousElementSibling;

  if (passwordType.type == 'password') {
    passwordType.type = 'text';
    variable.eyeBtnIcon.src = './images/eye-on.svg';
  } else if (passwordType.type == 'text') {
    passwordType.type = 'password';
    variable.eyeBtnIcon.src = './images/eye-off.svg';
  }
}

// warningTag가 HTML 요소인 HTMLParagraphElement 객체를 가리키므로
// warningTag.className을 통해
// email-warning-message 혹은 password-warning-message 값을 바인딩
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

  return regExp.test(email); // 형식에 맞는 경우에만 true 리턴
}

function checkPassword(password) {
  let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return regExp.test(password);
}
