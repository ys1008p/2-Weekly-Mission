import showError from "./showError.js";

export const checkEmpty = (tag) => {
  if(tag.value === '') {
    if(tag.id === 'email'){
      showError(tag, '이메일을 입력해주세요.');
      return false;
    }
    if(tag.id === 'password') {
      showError(tag, '비밀번호를 입력해주세요.');
      return false;
    }
    if(tag.id === 'password-check') {
      showError(tag, '비밀번호를 입력해주세요.');
      return false;
    }
  }
  return true;
}

export const checkEmail = (tag) => {
  if(tag.value === '') return;
  const emailValue = tag.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(emailValue)) {
    if(tag.parentNode.lastChild.className ==='error-message') {
      tag.parentNode.removeChild(tag.parentNode.lastChild);
      tag.classList.remove('input--error')
      return true;
    }
    else return true;
  }
  else {
    showError(tag, '올바른 이메일 주소가 아닙니다.');
    return false;
  }
}

export const checkPassword = (tag) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (passwordRegex.test(tag.value)) return true;
  else {
    if(tag.value === '') return false;
    showError(tag, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }
}
