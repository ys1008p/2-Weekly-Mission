import { checkEmail, checkEmpty } from "./check.js";
import deleteError from "./deleteError.js";
import showError from "./showError.js";
import showPassword from "./showPassword.js";

const emailInput = document.querySelector('#email');
const signInBtn = document.querySelector('.signin--btn');
const inputList = Array.from(document.querySelectorAll('input'));

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const deleteErrorEvent = (e) => {
  if(inputList.includes(e.target)) deleteError(e.target);
}

const checkEmailEvent = (e) => {
  if(e.target === document.querySelector('#email')) checkEmail(e.target);
}

const showPasswordEvent = (e) => {
  if(e.target.classList.contains('eye')) showPassword(e.target);
}

const testSignIn = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signin--btn')){
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    
    if(emailInput.value !== 'test@codeit.com') {
      showError(emailInput, '이메일을 확인해주세요');
    }
    if(passwordInput.value !== 'codeit101') {
      showError(passwordInput, '비밀번호를 확인해주세요');
    }
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
      window.location.href = './folder.html';
    }
  }
};

inputList.forEach((element) => {element.addEventListener('focusout', checkEmptyEvent)});
inputList.forEach((element) => {element.addEventListener('focusin', deleteErrorEvent)});
emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
signInBtn.addEventListener('click', testSignIn);
document.body.addEventListener('click', showPasswordEvent);
