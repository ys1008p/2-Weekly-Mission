// 비밀번호 표시 여부를 결정하는 함수
function changePasswordVision (e) {
  e.target.classList.toggle('active');
  if (e.target.className.includes('active')) {
    e.target.parentElement.children[1].type = 'text';
  } else {
    e.target.parentElement.children[1].type = 'password';
  }
}

export default changePasswordVision;