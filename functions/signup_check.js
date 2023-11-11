
import { inputPassword, inputPasswordCheck } from "../tags.js";

let checkValid = false;

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

// 비밀번호 확인 유효성을 검증하는 함수
function enterPasswordCheckMessage(e) {

  removeRedMessage(inputPasswordCheck);

  if (inputPassword.value !== inputPasswordCheck.value) {
    createRedMessage (inputPasswordCheck, '비밀번호가 일치하지 않아요.');
  } else {
    checkValid = true;
  }
}

export { enterPasswordCheckMessage, checkValid };