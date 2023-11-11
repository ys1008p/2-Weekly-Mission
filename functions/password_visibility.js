// 비밀번호 표시 여부를 결정하는 함수
function changePasswordVision (e) {
  const eyeBtnClass = e.target.classList;
  let password = e.target.parentElement.children[1];

  eyeBtnClass.toggle('active');
  password.type = eyeBtnClass.contains('active') ? 'text' : 'password';
}

export default changePasswordVision;