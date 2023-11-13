import {
  alertMessageBox,
  makeErrorMessage,
  eraseErrorMessage,
  isEmailValid,
  TEST_USER,
  emailInput,
  pswdInput,
  pswdEye,
  loginBtn,
} from './utils.js';

function errorAlertEmail(e) {
  if (emailInput.value.length === 0) {
    if (emailInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('email', 'noInput');
    }
  } else if (!isEmailValid(emailInput.value)) {
    eraseErrorMessage('email');
    makeErrorMessage('email', 'inappropriateValue');
  } else {
    eraseErrorMessage('email');
  }
}

function errorAlertPswd(e) {
  if (pswdInput.value.length === 0) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('password', 'noInput');
    }
  } else {
    eraseErrorMessage('password');
  }
}

function seeOrNotPassword(e) {
  if (pswdInput.type === 'password') {
    pswdInput.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdInput.type === 'text') {
    pswdInput.type = 'password';
    e.target.src = '/images/eye-off.svg';
  }
}

const checkTestUser = function (email, password) {
  return email === TEST_USER.email && password === TEST_USER.password;
};

function submit(e) {
  e.preventDefault();
  if (checkTestUser(emailInput.value, pswdInput.value)) {
    window.location.href = '/folder';
  } else {
    // 연속된 로그인 시도 오류시 에러메세지가 쌓이는 현상 방지
    if (
      emailInput.nextElementSibling.className !== 'alert' &&
      pswdInput.nextElementSibling.className !== 'alert'
    ) {
      makeErrorMessage('email', 'loginFail');
      makeErrorMessage('password', 'loginFail');
    }
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdEye[0].addEventListener('click', seeOrNotPassword);
loginBtn.addEventListener('click', submit);
