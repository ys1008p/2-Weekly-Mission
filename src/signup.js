import {
  ALERT_MESSAGE_BOX,
  TEST_USER,
  EYE_ON_PATH,
  EYE_OFF_PATH,
  isEmailValid,
  isPasswordValid,
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
  } else if (!isPasswordValid(pswdInput.value)) {
    console.log(isPasswordValid(pswdInput.value));
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

function seeOrNotPasswordCheck(e) {
  if (pswdCheck.type === 'password') {
    pswdCheck.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdCheck.type === 'text') {
    pswdCheck.type = 'password';
    e.target.src = '/images/eye-off.svg';
  }
}

const checkNoError = function () {
  const emailError = emailInput.nextElementSibling.className !== 'alert';
  const pswdError = pswdInput.nextElementSibling.className !== 'alert';
  const pswdCheckError = pswdCheck.nextElementSibling.className !== 'alert';
  return emailError && pswdError && pswdCheckError;
};

function submit(e) {
  e.preventDefault();
  if (checkNoError()) {
    window.location.href = '/folder.html';
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
emailInput.addEventListener('focusout', takenEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdCheck.addEventListener('focusout', matchFailPswdCheck);
passwordVisiblilityToggleButtons[0].addEventListener('click', togglePassword);
passwordVisiblilityToggleButtons[1].addEventListener(
  'click',
  seeOrNotPasswordCheck
);
loginBtn.addEventListener('click', submit);
