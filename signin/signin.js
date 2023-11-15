const idEvent = document.querySelector('#username');
const passwordEvent = document.querySelector('#password');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const buttonEvent = document.querySelector('button');
const eyeEvent = document.querySelector('.eye-icon');

idEvent.addEventListener('focusout', function (e) {
 if (e.target.value === '') {
  emailError.textContent = '이메일을 입력해주세요.';
  idEvent.classList.add('cell-error');
 } else {
  if(!e.target.value.includes('.com') && !e.target.value.includes('@')) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    idEvent.classList.add('cell-error');
  } else {
    emailError.textContent = '';
    idEvent.classList.remove('cell-error');
    }
 }
}) 

passwordEvent.addEventListener('focusout', function (e) {
  if (e.target.value === '') {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordEvent.classList.add('cell-error');
  } else {
    passwordError.textContent = '';
    passwordEvent.classList.remove('cell-error');
  }
})

buttonEvent.addEventListener('click', function () {
  if ( passwordEvent.value !== 'codeit101' && idEvent.value !== 'test@codeit.com') {
    passwordError.textContent = '비밀번호를 확인해주세요.';
    passwordEvent.classList.add('cell-error');
    emailError.textContent = '이메일을 확인해주세요.';
    idEvent.classList.add('cell-error');
    } else if (passwordEvent.value !== 'codeit101') {
      passwordError.textContent = '비밀번호를 확인해주세요.';
      passwordEvent.classList.add('cell-error');
      } else if (idEvent.value !== 'test@codeit.com') {
        emailError.textContent = '이메일을 확인해주세요.';
        idEvent.classList.add('cell-error');
      } else {

      }
})

eyeEvent.addEventListener('click', function (e) {
  if (e.target.getAttribute('src') === "./images/eye-off.svg") {
    e.target.removeAttribute('src');
    e.target.setAttribute('src', "./images/eye-on.svg");
    passwordEvent.removeAttribute('type')
  } else {
    e.target.removeAttribute('src');
    e.target.setAttribute('src', "./images/eye-off.svg");
    passwordEvent.setAttribute('type', "password")
  }
})