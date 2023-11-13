'use strict';

import { printEmailErrorMessage } from './email.js';
import { printPasswordErrorMessage } from './password.js';
import { toggleEyeIcon } from './password-icon.js';

const formSignIn = document.querySelector('#sign-in');
const inputEmail = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-msg');
const inputPassword = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-msg');
const eyeIcon = document.querySelector('.hide-password');

// 로그인 시도 시 등록된 이메일이 아닐 경우 에러 메시지를 표시하는 함수
function unResisteredEmailErrorMessage() {
  const userEmail = inputEmail.value;
  if (userEmail !== 'test@codeit.com') {
    emailErrorMessage.textContent = '이메일을 확인해주세요.';
    inputEmail.classList.add('input__error');
    return false;
  } else {
    emailErrorMessage.textContent = '';
    inputEmail.classList.remove('input__error');
    return true;
  }
}

// 로그인 시도 시 등록된 비밀번호가 아닐 경우 에러 메시지를 표시하는 함수
function unResisteredPasswordErrorMessage() {
  const userPassword = inputPassword.value;
  if (userPassword !== 'codeit101') {
    passwordErrorMessage.textContent = '비밀번호를 확인해주세요.';
    inputPassword.classList.add('input__error');
    return false;
  } else {
    passwordErrorMessage.textContent = '';
    inputPassword.classList.remove('input__error');
    return true;
  }
}

// 로그인 시도 시 등록된 데이터일 경우 /folder 파일로 이동
function signIn(e) {
  e.preventDefault();
  if (!printEmailErrorMessage() || !printPasswordErrorMessage()) {
    printEmailErrorMessage();
    printPasswordErrorMessage();
    return;
  }
  const isResisteredEmail = unResisteredEmailErrorMessage();
  const isResisteredPassword = unResisteredPasswordErrorMessage();
  if (isResisteredEmail && isResisteredPassword) {
    window.location.href = '../folder.html';
  }
}

inputEmail.addEventListener('focusout', printEmailErrorMessage);
inputPassword.addEventListener('focusout', printPasswordErrorMessage);
formSignIn.addEventListener('submit', signIn);

eyeIcon.addEventListener('click', toggleEyeIcon);
