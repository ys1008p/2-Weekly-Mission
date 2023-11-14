'use strict';

import { printEmailErrorMessage } from './email.js';
import { toggleEyeIcon } from './password-icon.js';

const formSignUp = document.querySelector('#sign-up');
const inputEmail = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-msg');
const inputPassword = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-msg');
const inputCheckPassword = document.querySelector('#check-password');
const checkPasswordErrorMessage = document.querySelector(
  '.check-password-error-msg'
);
const eyeIcon = document.querySelectorAll('.hide-password');

// 비밀번호 생성 유효성 검사
function isStrongPassword(value) {
  let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regExp.test(value);
}

// 비밀번호 생성 유효성 검사 후 에러 메시지 표시
function createPasswordErrorMessage() {
  const value = inputPassword.value;
  if (value === '') {
    passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
    inputPassword.classList.add('input__error');
    return false;
  } else if (!isStrongPassword(value)) {
    passwordErrorMessage.textContent =
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
    inputPassword.classList.add('input__error');
    return false;
  } else {
    passwordErrorMessage.textContent = '';
    inputPassword.classList.remove('input__error');
    return true;
  }
}

// 비밀번호와 비밀번호 확인이 같지 않다면 에러 메시지 표시
function doubleCheckPasswordErrormessage() {
  const password = inputPassword.value;
  const checkPassword = inputCheckPassword.value;
  if (checkPassword === '' || password !== checkPassword) {
    checkPasswordErrorMessage.textContent = '비밀번호가 일치하지 않아요.';
    inputCheckPassword.classList.add('input__error');
    return false;
  } else {
    checkPasswordErrorMessage.textContent = '';
    inputCheckPassword.classList.remove('input__error');
    return true;
  }
}

// 이미 존재하는 이메일인지 확인
function isUnresisteredEmail() {
  const value = inputEmail.value;
  if (value === 'test@codeit.com') {
    emailErrorMessage.textContent = '이미 사용 중인 이메일입니다.';
    inputEmail.classList.add('input__error');
    return false;
  } else {
    emailErrorMessage.textContent = '';
    inputEmail.classList.remove('input__error');
    return true;
  }
}

function signUp(e) {
  e.preventDefault();
  const checkEmail = emailCheckBeforeSubmit();
  const checkPassword = passwordCheckBeforeSubmit();
  const doubleCheckPassword = doubleCheckPasswordBeforeSubmit();
  if (checkEmail && checkPassword && doubleCheckPassword) {
    window.location.href = '../folder.html';
  }
}

function emailCheckBeforeSubmit() {
  const isCorrectEmail = printEmailErrorMessage();
  if (!isCorrectEmail) {
    return false;
  }
  const unresisteredEmail = isUnresisteredEmail();
  unresisteredEmail ? true : false;
}

function passwordCheckBeforeSubmit() {
  const isCorrectPassword = createPasswordErrorMessage();
  isCorrectPassword ? true : false;
}

function doubleCheckPasswordBeforeSubmit() {
  const isCorrectdoubleCheck = doubleCheckPasswordErrormessage();
  isCorrectdoubleCheck ? true : false;
}

inputEmail.addEventListener('focusout', printEmailErrorMessage);
inputPassword.addEventListener('focusout', createPasswordErrorMessage);
inputCheckPassword.addEventListener(
  'focusout',
  doubleCheckPasswordErrormessage
);
formSignUp.addEventListener('submit', signUp);
eyeIcon.forEach((icon) => {
  icon.addEventListener('click', toggleEyeIcon);
});

// 비밀번호 확인란에 이미 입력 후, 비밀번호란에 추가로 입력 시, 비밀번호 확인란에 에러 메시지 표시
inputPassword.addEventListener('keyup', checkAgainDoubleCheckPassword);

function checkAgainDoubleCheckPassword(e) {
  const password = e.target.value;
  const doubleCheckPassword = inputCheckPassword.value;
  if (doubleCheckPassword !== '' && password !== doubleCheckPassword) {
    checkPasswordErrorMessage.textContent = '비밀번호가 일치하지 않아요.';
    inputCheckPassword.classList.add('input__error');
  } else {
    checkPasswordErrorMessage.textContent = '';
    inputCheckPassword.classList.remove('input__error');
  }
}
