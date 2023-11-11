import { ERROR_MESSAGES } from "./errorMessage.js";
import { USER_DATA } from "./userData.js";
import { isValidEmail, isValidPassword } from "./regPatterns.js";
import { emailInput, passwordInput, passwordCheckInput, emailError, passwordError, passwordCheckError, signBtn } from "./seletors.js";
  

// signin 이메일 에러메세지
export function signinEmailErrorMessage() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showEmailError(ERROR_MESSAGES.emptyEmail);
  } else if (!isValidEmail(emailValue)) {
    showEmailError(ERROR_MESSAGES.wrongEmail);
  } else {
    hideError(emailInput, emailError);
  }
};


// signup 이메일 에러메세지
export function signupEmailErrorMessage() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showEmailError(ERROR_MESSAGES.emptyEmail);
  } else if (!isValidEmail(emailValue)) {
    showEmailError(ERROR_MESSAGES.wrongEmail);
  } else if (emailValue === USER_DATA[0].email) { 
  // 나중에 user@codeit.com 말고 다른 회원가입 정보들이 추가되면 [0]으로 지정하면 안될 것 같은데 어떻게 해야하지.... 반복문...?
    showEmailError(ERROR_MESSAGES.exsistEmail);
  } else {
    hideError(emailInput, emailError);
  }
};


// 패스워드 에러메세지
export function passwordErrorMessage() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showPasswordError(ERROR_MESSAGES.emptyPassword);
  } else if (!isValidPassword(passwordValue)) {
    showPasswordError(ERROR_MESSAGES.formatPassword);
  } else {
    hideError(passwordInput, passwordError);
  }
};


// 패스워드확인 에러메세지
export function passwordCheckErrorMessage() {
  const passwordValue =  passwordInput.value.trim();
  const passwordCheckValue = passwordCheckInput.value.trim();

  if (passwordCheckValue === '') {
    showPasswordCheckError(ERROR_MESSAGES.emptyPassword);
  } else if (!isValidPassword(passwordCheckValue)) {
    showPasswordCheckError(ERROR_MESSAGES.formatPassword);
  } else if (passwordValue !== passwordCheckValue) {
    showPasswordCheckError(ERROR_MESSAGES.mismatchPassword);
  } else {
    hideError(passwordCheckInput, passwordCheckError);
  }
}


// signin 시도
export function signinBtn() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === USER_DATA[0].email && passwordValue === USER_DATA[0].password) {
    window.location.href = '/folder';
  } else {
    showEmailError(ERROR_MESSAGES.checkEmail);
    showPasswordError(ERROR_MESSAGES.checkPassword);
  }
}


// signup 시도
export function signupBtn() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const passwordCheckValue = passwordCheckInput.value.trim();

  if (isValidEmail(emailValue) && isValidPassword(passwordValue) && passwordValue === passwordCheckValue) {
    window.location.href = '/folder';
  } else {
    showEmailError(ERROR_MESSAGES.checkEmail);
    showPasswordError(ERROR_MESSAGES.checkPassword);
    showPasswordCheckError(ERROR_MESSAGES.checkPassword);
  }
}


// 에러 클래스 추가
function showEmailError(message) {
  emailInput.classList.add('error');
  emailError.textContent = message;
  emailError.style.display = 'block';
}
  
function showPasswordError(message) {
  passwordInput.classList.add('error');
  passwordError.textContent = message;
  passwordError.style.display = 'block';
}

function showPasswordCheckError(message) {
  passwordCheckInput.classList.add('error');
  passwordCheckError.textContent = message;
  passwordCheckError.style.display = 'block';
}

function hideError (input, error) {
  input.classList.remove('error');
  error.textContent = '';
  error.style.display = 'none';
}
