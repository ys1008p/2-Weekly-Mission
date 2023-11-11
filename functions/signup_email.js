import { inputEmail } from "../tags.js";

let emailValid = false;

// 인풋 박스에 나타난 에러를 초기화하는 함수
function removeRedMessage(inputBox) {
  if (inputBox.nextSibling.className == 'message') {
    inputBox.nextSibling.remove();
    inputBox.classList.remove('redBox');
  }
}

// 인풋 박스에 에러 메세지를 나타내는 함수
function createRedMessage (inputBox, notice){
  inputBox.classList.add('redBox');

  const message = document.createElement('div');
  message.textContent = notice;
  message.classList.add('message');
  inputBox.after(message);
}

// 이메일 유효성을 검증하는 함수
function enterEmailMessage(e) {
  const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  removeRedMessage(inputEmail);

  if (!inputEmail.value) {
    createRedMessage(inputEmail, '이메일을 입력해주세요.');
  } else if (inputEmail.value === 'test@codeit.com') {
    createRedMessage(inputEmail, '이미 사용 중인 이메일입니다.');
  } else if (!emailFormat.test(inputEmail.value)) {
    createRedMessage(inputEmail, '올바른 이메일 주소가 아닙니다.');
  } else {
    emailValid = true;
  }
}

export { enterEmailMessage, emailValid };