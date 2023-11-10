import {
  alertMessageBox,
  makeErrorMessage,
  eraseErrorMessage,
  TEST_USER,
  emailInput,
  pswdInput,
  pswdCheck,
  pswdEye,
  loginBtn,
} from './utils.js';

function errorAlertEmail(e) {
  if (emailInput.value.length === 0) {
    if (emailInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('email', 'noInput');
    }
  } else if (!emailInput.value.includes('@')) {
    eraseErrorMessage('email');
    makeErrorMessage('email', 'inappropriateValue');
  } else {
    eraseErrorMessage('email');
  }
}

function takenEmail(e) {
  if (emailInput.value === TEST_USER.email) {
    makeErrorMessage('email', 'takenEmail');
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

function matchFailPswdCheck(e) {
  if (pswdInput.value !== pswdCheck.value) {
    // 연속된 비밀번호 불일치시 에러메세지가 쌓이는 현상 방지
    if (pswdCheck.nextElementSibling.className !== 'alert') {
      makeErrorMessage('passwordCheck', 'matchFail');
    }
  } else {
    eraseErrorMessage('passwordCheck');
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

function seeOrNotPasswordCheck(e) {
  if (pswdCheck.type === 'password') {
    pswdCheck.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdCheck.type === 'text') {
    pswdCheck.type = 'password';
    e.target.src = '/images/eye-off.svg';
  }
}

let checkNoError = function () {
  let emailError = emailInput.nextElementSibling.className !== 'alert';
  let pswdError = pswdInput.nextElementSibling.className !== 'alert';
  let pswdCheckError = pswdCheck.nextElementSibling.className !== 'alert';
  return emailError && pswdError && pswdCheckError;
};

function submit(e) {
  e.preventDefault();
  if (checkNoError()) {
    window.location.href = '/folder';
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
emailInput.addEventListener('focusout', takenEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdInput.addEventListener('focusout', matchFailPswdCheck);
pswdCheck.addEventListener('focusout', matchFailPswdCheck);
pswdEye[0].addEventListener('click', seeOrNotPassword);
pswdEye[1].addEventListener('click', seeOrNotPasswordCheck);
loginBtn.addEventListener('click', submit);
