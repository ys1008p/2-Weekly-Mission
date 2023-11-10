import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD } from './../constants.js';

document.addEventListener('DOMContentLoaded', () => {
  let emailInput = document.querySelector('.sign-input[type="email"]');
  let passwordInput = document.querySelector('.sign-input[type="password');
  let emailWarningMessage = document.querySelector('.email-warning-message');
  let passwordWarningMessage = document.querySelector('.password-warning-message');
  let loginBtn = document.querySelector('.login-btn');
  let eyeBtn = document.querySelector('.eye-button');
  let eyeBtnIcon = eyeBtn.firstElementChild;

  emailInput.addEventListener('focusout', validateEmail);
  passwordInput.addEventListener('focusout', validatePassWord);
  loginBtn.addEventListener('click', performLogin);
  eyeBtn.addEventListener('click', showAndHidePassword);

  function validateEmail() {
    if (emailInput.value != '' && isEmail(emailInput.value)) {
      //코드 상단에 선언한 DOM 파라미터로 전달
      resetErrorMessage(emailInput, emailWarningMessage);
    } else if (emailInput.value == '') {
      printErrorMessage(emailInput, emailWarningMessage, ERROR_MESSAGE.emptyEmail);
    } else if (!isEmail(emailInput.value)) {
      printErrorMessage(emailInput, emailWarningMessage, ERROR_MESSAGE.isNotVaildEmail);
    }
  }

  function validatePassWord() {
    if (passwordInput.value == '') {
      printErrorMessage(passwordInput, passwordWarningMessage, ERROR_MESSAGE.emptyPassWord);
    }
  }

  function performLogin(e) {
    e.preventDefault();

    if (emailInput.value != USER_EMAIL) {
      printErrorMessage(emailInput, emailWarningMessage, ERROR_MESSAGE.wrongEmail);
    }
    if (passwordInput.value != USER_PASSWORD) {
      printErrorMessage(passwordInput, passwordWarningMessage, ERROR_MESSAGE.wrongPassWord);
    }
    if (passwordInput.value != '' && passwordInput.value == USER_PASSWORD) {
      resetErrorMessage(passwordInput, passwordWarningMessage);
    }
    if (emailInput.value === USER_EMAIL && passwordInput.value === USER_PASSWORD) {
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
    if (passwordInput.type == 'password') {
      passwordInput.type = 'text';
      eyeBtnIcon.src = './images/eye-on.svg';
    } else if (passwordInput.type == 'text') {
      passwordInput.type = 'password';
      eyeBtnIcon.src = './images/eye-off.svg';
    }
  }

  function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
  }
});
