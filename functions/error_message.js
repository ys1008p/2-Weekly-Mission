// 인풋 박스에 나타난 에러를 초기화하는 함수
function removeRedMessage(inputBox) {
  if (inputBox.nextSibling.className == 'message') {
    inputBox.nextSibling.remove();
    inputBox.classList.remove('redBox');
  }
}

// 인풋 박스에 에러 메세지를 나타내는 함수
function createRedMessage (inputBox, notice) {
  inputBox.classList.add('redBox');

  const div = document.createElement('div');
  div.textContent = notice;
  div.classList.add('message');
  inputBox.after(div);
}

export { removeRedMessage, createRedMessage };