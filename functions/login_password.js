import { inputPassword } from "../tags.js";

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
  removeRedMessage(inputPassword);

  if (!inputPassword.value) {
    createRedMessage (inputPassword, '비밀번호를 입력해주세요.');
  } else if (e.type === 'click') {
      createRedMessage(inputPassword, '비밀번호를 확인해주세요.')
    }
  }

  export default enterPasswordMessage;