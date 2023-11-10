import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD } from '../common/constants.js';
import { variable } from '../common/variables.js';

document.addEventListener('DOMContentLoaded', () => {
  variable.emailInput.addEventListener('focusout', validateEmail);
  variable.passwordInput.addEventListener('focusout', validatePassword);
  variable.signInBtn.addEventListener('click', performLogin);
  variable.eyeBtn.addEventListener('click', showAndHidePassword);

  function validateEmail() {
    if (variable.emailInput.value != '' && isEmail(variable.emailInput.value)) {
      resetErrorMessage(variable.emailInput, variable.emailWarningMessage);
    } else if (variable.emailInput.value == '') {
      printErrorMessage(variable.emailInput, variable.emailWarningMessage, ERROR_MESSAGE.emptyEmail);
    } else if (!isEmail(variable.emailInput.value)) {
      printErrorMessage(variable.emailInput, variable.emailWarningMessage, ERROR_MESSAGE.invaildEmail);
    }
  }

  function validatePassword() {
    if (variable.passwordInput.value == '') {
      printErrorMessage(variable.passwordInput, variable.passwordWarningMessage, ERROR_MESSAGE.emptyPassword);
    }
  }

  function performLogin(e) {
    e.preventDefault();

    if (variable.emailInput.value != USER_EMAIL) {
      printErrorMessage(variable.emailInput, variable.emailWarningMessage, ERROR_MESSAGE.wrongEmail);
    }
    if (variable.passwordInput.value != USER_PASSWORD) {
      printErrorMessage(variable.passwordInput, variable.passwordWarningMessage, ERROR_MESSAGE.wrongPassword);
    }
    if (variable.passwordInput.value != '' && variable.passwordInput.value == USER_PASSWORD) {
      resetErrorMessage(variable.passwordInput, variable.passwordWarningMessage);
    }
    if (variable.emailInput.value === USER_EMAIL && variable.passwordInput.value === USER_PASSWORD) {
      window.location.href = '/folder.html';
    }
  }

  // warningMessage가 HTML 요소인 HTMLParagraphElement 객체를 가리키므로
  // warningMessage.className을 통해
  // email-warning-message 혹은 password-warning-message 값을 바인딩
  function printErrorMessage(input, warningMessage, message) {
    let html = `<p class="${warningMessage.className}">${message}</p>`;

    input.style.borderColor = '#ff5b56';
    warningMessage.innerHTML = html;
    warningMessage.style.display = 'block';
  }

  function resetErrorMessage(input, warningMessage) {
    input.style.borderColor = '#ccd5e3';
    warningMessage.innerHTML = '';
  }

  function showAndHidePassword() {
    if (variable.passwordInput.type == 'password') {
      variable.passwordInput.type = 'text';
      variable.eyeBtnIcon.src = './images/eye-on.svg';
    } else if (variable.passwordInput.type == 'text') {
      variable.passwordInput.type = 'password';
      variable.eyeBtnIcon.src = './images/eye-off.svg';
    }
  }

  function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
  }
});
