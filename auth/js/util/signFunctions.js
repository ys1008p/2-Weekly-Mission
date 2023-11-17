import { ERROR_MESSAGES } from "./errorMessage.js";
import { 
  isValidEmail, 
  isValidPassword, 
} from "./regPatterns.js";
import { 
  emailInput, 
  passwordInput, 
  passwordCheckInput, 
  emailError, 
  passwordError, 
  passwordCheckError, 
} from "./seletors.js";
  

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


// 에러 클래스 추가
export function showEmailError(message) {
  emailInput.classList.add('error');
  emailError.textContent = message;
  emailError.style.display = 'block';
}
  
export function showPasswordError(message) {
  passwordInput.classList.add('error');
  passwordError.textContent = message;
  passwordError.style.display = 'block';
}

export function showPasswordCheckError(message) {
  passwordCheckInput.classList.add('error');
  passwordCheckError.textContent = message;
  passwordCheckError.style.display = 'block';
}

function hideError (input, error) {
  input.classList.remove('error');
  error.textContent = '';
  error.style.display = 'none';
}


// 눈모양 아이콘 변경
export const toggleVisibility = function () {
  const passwordTypes = this.previousElementSibling;
  const img = this.querySelector("img");

  if (passwordTypes.type === "password") {
    passwordTypes.type = "text";
    img.src = "../images/eye-on.svg";
  } else {
    passwordTypes.type = "password";
    img.src = "../images/eye-off.svg";
  }
};
