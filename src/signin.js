import {
  didSigninSucceed,
  ALERT_MESSAGE_BOX,
  TEST_USER,
  EYE_ON_PATH,
  EYE_OFF_PATH,
  makeErrorMessage,
  eraseErrorMessage,
  isEmailValid,
  emailInput,
  pswdInput,
  passwordVisiblilityToggleButtons,
  loginBtn,
} from './sign-service.js';

function validateEmailInput(e) {
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

function validatePasswordInput(e) {
  if (pswdInput.value.length === 0) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('password', 'noInput');
    }
  } else {
    eraseErrorMessage('password');
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

const checkTestUser = function (email, password) {
  return email === TEST_USER.email && password === TEST_USER.password;
  /*checkTestUser(emailInput.value, pswdInput.value)*/
};

async function submit(e) {
  e.preventDefault();
  const signinAccount = {
    email: emailInput.value,
    password: pswdInput.value,
  };

  if (await didSigninSucceed(signinAccount)) {
    window.location.href = '/folder.html';
  } else {
    if (emailInput.nextElementSibling.className !== 'alert' && pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('email', 'loginFail');
      makeErrorMessage('password', 'loginFail');
    }
  }
}

emailInput.addEventListener('focusout', validateEmailInput);
pswdInput.addEventListener('focusout', validatePasswordInput);
passwordVisiblilityToggleButtons[0].addEventListener('click', togglePassword);
loginBtn.addEventListener('click', submit);
