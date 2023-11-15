'use strict';

export { printEmailErrorMessage, isEmail };

const inputEmail = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-msg');

function isEmail(value) {
  let regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
}

// 이메일 입력란이 비어있거나, 이메일 형식이 아닌 경우 에러 메시지 표시
function printEmailErrorMessage() {
  const value = inputEmail.value;

  if (!value) {
    emailErrorMessage.textContent = '이메일을 입력해주세요.';
    inputEmail.classList.add('input__error');
    return false;
  }

  if (!isEmail(value)) {
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    inputEmail.classList.add('input__error');
    return false;
  }

  emailErrorMessage.textContent = '';
  inputEmail.classList.remove('input__error');
  return true;
}
