import { inputPassword } from "../tags.js";

let passwordValid = false;

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

// 비밀번호 유효성을 검증하는 함수
function enterPasswordMessage(e) {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  removeRedMessage(inputPassword);

  if (!passwordFormat.test(inputPassword.value)) {
    createRedMessage (inputPassword, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    passwordValid = true;
  }
}

export { enterPasswordMessage, passwordValid };