import {
  ALERT_MESSAGE_BOX,
  TEST_USER,
  EYE_ON_PATH,
  EYE_OFF_PATH,
  isEmailValid,
  isPasswordValid,
  isTakenEmail,
  didSignupSucceed,
  makeErrorMessage,
  eraseErrorMessage,
  emailInput,
  pswdInput,
  pswdCheck,
  passwordVisiblilityToggleButtons,
  loginBtn,
} from './sign-service.js';

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

async function checkTakenEmail(e) {
  const signupAccount = {
    email: emailInput.value,
    password: pswdInput.value,
  };
  if (!(await isTakenEmail(signupAccount))) {
    makeErrorMessage('email', 'takenEmail');
  } else {
    eraseErrorMessage('email');
  }
}

function errorAlertPswd(e) {
  if (pswdInput.value.length === 0) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('password', 'noInput');
    }
  } else if (!isPasswordValid(pswdInput.value)) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('password', 'simple');
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

function togglePassword(e) {
  if (pswdInput.type === 'password') {
    pswdInput.type = 'text';
    e.target.src = EYE_ON_PATH;
  } else if (pswdInput.type === 'text') {
    pswdInput.type = 'password';
    e.target.src = EYE_OFF_PATH;
  }
}

function togglePasswordCheck(e) {
  if (pswdCheck.type === 'password') {
    pswdCheck.type = 'text';
    e.target.src = EYE_ON_PATH;
  } else if (pswdInput.type === 'text') {
    pswdCheck.type = 'password';
    e.target.src = EYE_OFF_PATH;
  }
}

const checkNoError = function () {
  const emailError = emailInput.nextElementSibling.className !== 'alert';
  const pswdError = pswdInput.nextElementSibling.className !== 'alert';
  const pswdCheckError = pswdCheck.nextElementSibling.className !== 'alert';
  return emailError && pswdError && pswdCheckError;
};

async function submit(e) {
  e.preventDefault();
  const signupAccount = {
    email: emailInput.value,
    password: pswdInput.value,
  };
  if ((await didSignupSucceed(signupAccount)) && checkNoError()) {
    window.location.href = '/folder.html';
  } else {
    if (emailInput.nextElementSibling.className !== 'alert' && pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('email', 'loginFail');
      makeErrorMessage('password', 'loginFail');
    }
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
emailInput.addEventListener('focusout', checkTakenEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdCheck.addEventListener('focusout', matchFailPswdCheck);
passwordVisiblilityToggleButtons[0].addEventListener('click', togglePassword);
passwordVisiblilityToggleButtons[1].addEventListener('click', togglePasswordCheck);
loginBtn.addEventListener('click', submit);
