import { checkAccessToken, checkEmail, checkEmpty, checkPassword } from "./check.js";
import showError from "./showError.js";
import deleteError from "./deleteError.js";
import togglePasswordVisibility from "./togglePasswordVisibility.js";
import { API_URL } from "../constant/constant.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');

const confirmPassword = (passwordTag, passwordCheckTag) => {
  if(passwordTag.value === passwordCheckTag.value) return true;
  if(passwordCheckTag.value === '') return false;
  if(passwordCheckTag.parentNode.querySelector('.error-message')) return false;
  showError(passwordCheckTag, '비밀번호가 일치하지 않아요.');
  return false;
}

// const checkEmptyEvent = (e) => {
//   if(e.target === emailInput || e.target === passwordInput || e.target === passwordCheckInput) checkEmpty(e.target);
// }

// const deleteErrorEvent = (e) => {
//   if(e.target === emailInput || e.target === passwordInput || e.target === passwordCheckInput) deleteError(e.target);
// }

// const checkEmailEvent = (e) => {
//   if(e.target.id === 'email') checkEmail(e.target);
// }

// const checkPasswordEvent = (e) => {
//   if(e.target.id === 'password') checkPassword(e.target);
// }

// const confirmPasswordEvent = (e) => {
//   if(e.target.id === 'password-check') confirmPassword(passwordInput, passwordCheckInput);
// }

const togglePasswordVisibilityEvent = (e) => {
  if(e.target.classList.contains('eye')) togglePasswordVisibility(e.target);
}

const checkEmailDuplication = async(emailInputElement) => {
  if(emailInputElement.value === '') return;
  try{
    const response = await fetch(`${API_URL}/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInputElement.value,
      })
    });
    if(!response.ok) showError(emailInput, '이미 사용 중인 이메일입니다.');
  } catch (error) {
    alert(error);
  }
}

const checkSignUp = async(emailInputElement, passwordInputElement) => {
  try{
    const response = await fetch(`${API_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInputElement.value,
        password: passwordInputElement.value
      })
    });
    if(response.ok) {
      window.location.href = './folder.html';
      const { data } = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
    }
  } catch(error) {
    alert(error);
  }
}

const testSignUp = () => {
  if(checkEmail(emailInput) && checkPassword(passwordInput) && confirmPassword(passwordInput, passwordCheckInput)){
    checkEmailDuplication(emailInput);
    checkSignUp(emailInput, passwordInput);
  } else {
    checkEmpty(emailInput);
    checkEmpty(passwordInput);
    checkEmpty(passwordCheckInput);
    checkEmail(emailInput);
    checkPassword(passwordInput);
    confirmPassword(passwordInput, passwordCheckInput);
  }
}

const handleEmailInputFocusOutEvent = (e) => {
  if(e.target === emailInput){
    checkEmpty(emailInput);
    checkEmail(emailInput);
    checkEmailDuplication(emailInput);
  }
};
const handleEmailInputFocusInEvent = (e) => {
  if(e.target === emailInput){
    deleteError(emailInput);
  }
};
const handleEmailInputInputEvent = (e) => {
  if(e.target === emailInput){
    checkEmail(emailInput);
    checkEmailDuplication(emailInput);
  }
};
const handlePasswordInputFocusOutEvent = (e) => {
  if(e.target === passwordInput) {
    checkEmpty(passwordInput);
    checkPassword(passwordInput);
  }
};
const handlePasswordInputFocusInEvent = (e) => {
  if(e.target === passwordInput) {
    deleteError(passwordInput);
  }
};
const handlePasswordInputInputEvent = (e) => {
  if(e.target === passwordInput) {
    checkPassword(passwordInput);
  }
};
const handlePasswordCheckInputFocusOutEvent = (e) => {
  if(e.target === passwordCheckInput) {
    checkEmpty(passwordCheckInput);
    confirmPassword(passwordInput, passwordCheckInput);
  }
};
const handlePasswordCheckInputFocusInEvent = (e) => {
  if(e.target === passwordCheckInput) {
    deleteError(passwordCheckInput);
  }
};

emailInput.addEventListener('focusout', handleEmailInputFocusOutEvent);
emailInput.addEventListener('focusin', handleEmailInputFocusInEvent);
emailInput.addEventListener('input', handleEmailInputInputEvent);
passwordInput.addEventListener('focusout', handlePasswordInputFocusOutEvent);
passwordInput.addEventListener('focusin', handlePasswordInputFocusInEvent);
passwordInput.addEventListener('input', handlePasswordInputInputEvent);
passwordCheckInput.addEventListener('focusout', handlePasswordCheckInputFocusOutEvent);
passwordCheckInput.addEventListener('focusin', handlePasswordCheckInputFocusInEvent);



// emailInput.addEventListener('focusout', checkEmptyEvent);
// emailInput.addEventListener('focusout', checkEmailEvent);
// emailInput.addEventListener('focusout', testEmail);
// emailInput.addEventListener('focusin', deleteErrorEvent);
// emailInput.addEventListener('input', checkEmailEvent);
// emailInput.addEventListener('input', testEmail);
// passwordInput.addEventListener('focusout', checkEmptyEvent);
// passwordInput.addEventListener('focusout', checkPasswordEvent);
// passwordInput.addEventListener('focusin', deleteErrorEvent);
// passwordInput.addEventListener('input', checkPasswordEvent);
// passwordCheckInput.addEventListener('focusout', checkEmptyEvent);
// passwordCheckInput.addEventListener('focusout', confirmPasswordEvent);
// passwordCheckInput.addEventListener('focusin', deleteErrorEvent);
document.querySelector('form').addEventListener('submit',(event) => {
  event.preventDefault();
  testSignUp();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    document.querySelector('.signup--btn').click();
  }
});
document.querySelectorAll('.eye').forEach((eyeIconElement) => eyeIconElement.addEventListener('click', togglePasswordVisibilityEvent));
document.addEventListener('DOMContentLoaded', checkAccessToken);
