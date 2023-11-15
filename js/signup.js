import { checkEmail, checkEmpty, checkPassword } from "./check.js";
import showError from "./showError.js";
import deleteError from "./deleteError.js";
import showPassword from "./showPassword.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');
const inputList = Array.from(document.querySelectorAll('input'));
const signUpBtn = document.querySelector('.signup--btn');

const confirmPassword = (passwordTag, passwordCheckTag) => {
  if(passwordTag.value === passwordCheckTag.value) return true;
  else {
    if(passwordCheckTag.value === '') return;
    if(passwordCheckTag.parentNode.lastChild.className ==='error-message') return;
    showError(passwordCheckTag, '비밀번호가 일치하지 않아요.');
    return false;
  }
}

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const deleteErrorEvent = (e) => {
  if(inputList.includes(e.target)) deleteError(e.target);
}

const checkEmailEvent = (e) => {
  if(e.target === document.querySelector('#email')) checkEmail(e.target);
}

const checkPasswordEvent = (e) => {
  if(e.target.id === 'password') checkPassword(e.target);
}

const confirmPasswordEvent = (e) => {
  if(e.target.id === 'password-check') confirmPassword(passwordInput, passwordCheckInput);
}

const showPasswordEvent = (e) => {
  if(e.target.classList.contains('eye')) showPassword(e.target);
}

const testEmail = (e) => {
  if(e.target === emailInput) {
    if(e.target.value === 'test@codeit.com') {
      showError(e.target, '이미 사용 중인 이메일입니다.');
    }
  }
};

const testSignUp = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signup--btn')) {
    if(checkEmail(emailInput) && checkPassword(passwordInput) && confirmPassword(passwordInput, passwordCheckInput)){
      window.location.href = './folder.html';
    } else {
      inputList.forEach( element => checkEmpty(element));
      checkEmail(emailInput);
      checkPassword(passwordInput);
      confirmPassword(passwordInput, passwordCheckInput);
    }
  }
}

inputList.forEach((element) => {element.addEventListener('focusout', checkEmptyEvent)});
inputList.forEach((element) => {element.addEventListener('focusin', deleteErrorEvent)});
emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
emailInput.addEventListener('focusout', testEmail);
emailInput.addEventListener('input', testEmail);
passwordCheckInput.addEventListener('focusout', confirmPasswordEvent);
passwordInput.addEventListener('focusout', checkPasswordEvent);
passwordInput.addEventListener('input', checkPasswordEvent);
document.body.addEventListener('click', showPasswordEvent);
signUpBtn.addEventListener('click', testSignUp);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    document.querySelector('.signup--btn').click();
  }
});
