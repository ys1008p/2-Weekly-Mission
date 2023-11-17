'use strict';

import { printEmailErrorMessage } from './email.js';
import { printPasswordErrorMessage } from './password.js';
import { toggleEyeIcon } from './password-icon.js';
import { getAccessToken } from './fetch.js';

const formSignIn = document.querySelector('#sign-in');
const inputEmail = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-msg');
const inputPassword = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-msg');
const eyeIcon = document.querySelector('.hide-password');

// 로그인 시도 시 등록된 이메일이 아닐 경우 에러 메시지를 표시하는 함수
function unResisteredEmailErrorMessage() {
  emailErrorMessage.textContent = '이메일을 확인해주세요.';
  inputEmail.classList.add('input__error');
}

// 로그인 시도 시 등록된 비밀번호가 아닐 경우 에러 메시지를 표시하는 함수
function unResisteredPasswordErrorMessage() {
  passwordErrorMessage.textContent = '비밀번호를 확인해주세요.';
  inputPassword.classList.add('input__error');
}

// 로그인 시도 시 등록된 데이터일 경우 /folder 파일로 이동
async function signIn(e) {
  e.preventDefault();
  const checkEmail = printEmailErrorMessage();
  const checkPassword = printPasswordErrorMessage();
  if (!checkEmail || !checkPassword) {
    return;
  }

  try {
    const email = inputEmail.value;
    const password = inputPassword.value;
    await getAccessToken(email, password);
    location.href = '../folder.html';
  } catch (err) {
    unResisteredEmailErrorMessage();
    unResisteredPasswordErrorMessage();
  }
}

inputEmail.addEventListener('focusout', printEmailErrorMessage);
inputPassword.addEventListener('focusout', printPasswordErrorMessage);
eyeIcon.addEventListener('click', toggleEyeIcon);
formSignIn.addEventListener('submit', signIn);
