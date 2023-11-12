const form = document.querySelector('#login_form');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input')
const passwordInputs = document.querySelectorAll('.password');
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#passWord_check')
const btn = document.querySelector('button');
const eyes = document.querySelectorAll('.eye');

export {email, password, btn, checkPassword, inputs};
const pwIp = Array.from(passwordInputs);

function errActionAll (e) {
  const text = document.createElement('p');
  text.classList.add('errText')
  const deleteErrText = document.querySelector('.errText');
 
  if (deleteErrText) {
    deleteErrText.previousElementSibling.classList.remove('err');
    deleteErrText.remove(); 
    };

  if (e.target === email) {
    if (email.value === '') {
      text.textContent = '이메일을 입력해 주세요.';
    } else if (!isValidEmail(email.value)) {
      text.textContent = '올바른 이메일 주소가 아닙니다.';
    }
    e.target.classList.add('err');
    email.after(text);
  } else if (pwIp.includes(e.target)) {
    if (pwIp[0].value !== pwIp[1].value) {
      text.textContent = '비밀번호가 일치하지 않아요.';
      e.target.classList.add('err');
      e.target.after(text);
    }
  } else if (e.target === password || e.target === checkPassword) {
    if (e.target.value.length < 8 || /^\d+$/.test(e.target.value) || /^[a-zA-Z]+$/.test(e.target.value)) {
      text.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    } else if (e.target.value === '') {
      text.textContent = '비밀번호를 입력해 주세요.';
    }
    e.target.classList.add('err');
    e.target.after(text);
  }
}
  
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout', errActionAll);
});

// eyes.forEach ((eye,index) =>{
//   eye.addEventListener('click', function () {
//     const passwordInput = pwIp[index];
//     const type = passwordInput.getAttribute('type');
//     eye.src = type === 'password' ? 'img/eye-off.png' : 'img/eye-on.png';
//     passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
//   });
// })
