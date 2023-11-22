import deleteError from "./deleteError.js";
import showError from "./showError.js";

export const checkEmpty = (inputElement) => {
  if(inputElement.value === '') {
    if(inputElement.id === 'email'){
      showError(inputElement, '이메일을 입력해주세요.');
    }
    if(inputElement.id === 'password') {
      showError(inputElement, '비밀번호를 입력해주세요.');
    }
    if(inputElement.id === 'password-check') {
      showError(inputElement, '비밀번호를 입력해주세요.');
    }
    return false;
  }
  return true;
}

export const checkEmail = (inputElement) => {
  if(inputElement.value === '') return false;
  const emailValue = inputElement.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(emailValue)) {
    deleteError(inputElement);
    return true;
  }
  else {
    showError(inputElement, '올바른 이메일 주소가 아닙니다.');
    return false;
  }
}

export const checkPassword = (inputElement) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (passwordRegex.test(inputElement.value)) return true;
  else {
    if(inputElement.value === '') return false;
    showError(inputElement, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }
}

export const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    window.location.href = './folder.html';
  }
}
