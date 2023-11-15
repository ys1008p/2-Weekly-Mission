'use strict';

export { printPasswordErrorMessage };

const inputPassword = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-msg');

// 비밀번호 입력칸이 비어있다면 에러 메시지 표시
function printPasswordErrorMessage() {
  const value = inputPassword.value;

  if (!value) {
    passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
    inputPassword.classList.add('input__error');
    return false;
  }

  passwordErrorMessage.textContent = '';
  inputPassword.classList.remove('input__error');
  return true;
}
