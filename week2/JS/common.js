const form = document.querySelector('#login_form');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input')
const passwordInputs = document.querySelectorAll('.password');
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#password_check')
const btn = document.querySelector('button');
const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const text = document.createElement('p');
import { usersData } from "./userData.js";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

function errActionAll (e) {
  text.classList.add('errText')
  const deleteErrText = document.querySelector('.errText');

  if (e.target.nextElementSibling === deleteErrText) {
   e.target.nextElementSibling.remove(); 
    }else {
      return;
    }

  if (e.target === email) {
    if (email.value === '') {
      text.textContent = '이메일을 입력해 주세요.';
    } else if (!isValidEmail(email.value)) {
      text.textContent = '올바른 이메일 주소가 아닙니다.';
    }for(let user of usersData){
      if (email.value === user[0] && checkPassword) {
        text.textContent = '이미 사용 중인 이메일입니다.';
        }
    }
    e.target.classList.add('err');
    email.after(text);
  } else if (e.target === checkPassword) {
    if (password.value !== checkPassword.value) {
      text.textContent = '비밀번호가 일치하지 않아요.';
      e.target.classList.add('err');
      e.target.after(text);
    }
  } else if (e.target === checkPassword || e.target == password) {
    if (!isValidPassword(e.target.value)) {
      text.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    } else if (e.target.value === '') {
      text.textContent = '비밀번호를 입력해 주세요.';
    }
    e.target.classList.add('err');
    e.target.after(text);
  }
}

function eyeToggle (e) {
  if (e.target.nextElementSibling.getAttribute('type') === 'password') {
    e.target.src = "../img/eye-on.png";
    e.target.nextElementSibling.setAttribute('type','text');
  } else {
    e.target.src = "../img/eye-off.png"
    e.target.nextElementSibling.setAttribute('type','password');
  }
}
//  eyeToggle 함수를 forEach 로 묶어봤지만 중복적용이 안됩니다...

inputs.forEach(input => {
  input.addEventListener('focusout',errActionAll);
});

export {email, password, btn, checkPassword, inputs,eye1 ,eye2, isValidEmail, isValidPassword, errActionAll, eyeToggle};