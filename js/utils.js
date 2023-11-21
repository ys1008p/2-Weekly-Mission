const errorInput = "error-input";
const display = "display";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // 이메일 주소 형식
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 비밀번호 형식
export const NEW_EMAIL = { email: "test@codeit.com", password: "sprint101" };

// 에러 상태 설정
export function setError(ele, msg) {
  ele.input.classList.add(errorInput);
  ele.errorMsg.classList.add(display);
  ele.errorMsg.textContent = msg;
}

// 에러 상태 제거
export function removeError(ele) {
  ele.input.classList.remove(errorInput);
  ele.errorMsg.classList.remove(display);
  ele.errorMsg.textContent = "";
}

// 이메일 주소 조건
export function emailCondition(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

// 비밀번호 조건
export function passwordCondition(password) {
  return new RegExp(PASSWORD_REGEX).test(password);
}

// 비밀번호 눈 버튼
export function eyeToggle(pwInput, toggle) {
  if (pwInput.type === "password") {
    pwInput.setAttribute("type", "text");
    toggle.setAttribute("src", "./assets/eye-on.svg");
    toggle.setAttribute("alt", "open-eye");
  } else if (pwInput.type === "text") {
    pwInput.setAttribute("type", "password");
    toggle.setAttribute("src", "./assets/eye-off.svg");
    toggle.setAttribute("alt", "close-eye");
  }
}

// 고유 이메일과 비밀번호
export const UNIQUE_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
