const form = document.querySelector('#login_form');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input')
const password = document.querySelector('#password');
const checkPassword = document.querySelector('#passWord_check')
const btn = document.querySelector('button');
const eye = document.querySelectorAll('.eye');

function errAction (e) {
  const text = document.createElement('p');
  text.classList.add('errText')
  const deleteErrText = document.querySelector('.errText');
 
  if (deleteErrText) {
    deleteErrText.remove(); 
    e.target.classList.remove('err');
    };

  if (e.target === email) {
    if (email.value === null) {
      text.textContent = '이메일을 입력해 주세요.';
    } else if (!isValidEmail(email.value)) {
      text.textContent = '올바른 이메일 주소가 아닙니다.';
    } else if (email.value === 'test@codeit.com') {
      text.textContent = '이미 사용 중인 이메일입니다.';
    }
    e.target.classList.add('err');
    email.after(text);

  } else if (e.target === password) {
    if (password.value.length < 8 || /^\d+$/.test(password.value) || /^[a-zA-Z]+$/.test(password.value)) {
      text.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    } else if (password.value === null) {
      text.textContent = '비밀번호를 입력해 주세요'
    } 
    password.after(text);
    e.target.classList.add('err');

  } else if (e.target === checkPassword) {
    if (password.value !== checkPassword.value) {
      text.textContent = '비밀번호가 일치하지 않아요.';
      checkPassword.after(text);
      e.target.classList.add('err');
    }
  }
}
  
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout', errAction);
});