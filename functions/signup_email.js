import { inputEmail } from "../tags.js";
import { removeRedMessage, createRedMessage } from './error_message.js';

const userInfo = { 'test@codeit.com': 'codeit101' };
let emailValid = false;

function printEmpty () {
  createRedMessage(inputEmail, '이메일을 입력해주세요.');
} 

function printTaken () {
  createRedMessage(inputEmail, '이미 사용 중인 이메일입니다.');
}

function printWrong () {
  createRedMessage(inputEmail, '올바른 이메일 주소가 아닙니다.');
}

// 이메일 유효성을 검증하는 함수
function enterEmailMessage(e) {
  const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const emailValue = inputEmail.value;

  removeRedMessage(inputEmail);

  if (!emailValue) {
    printEmpty();
  } else if (userInfo[emailValue]) {
    printTaken();
  } else if (!emailFormat.test(emailValue)) {
    printWrong();
  } else {
    emailValid = true;
  }
}

export { enterEmailMessage, emailValid };