import { checkEmailExist } from "./authApiUtils.js";

const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// 정규식 검증 함수들
const isRegEmail = (value) => regEmail.test(value);
const isRegPassword = (value) => regPassword.test(value);

// 입력값 유효성 검증 함수들
const validateEmail = (email, checkCase) => {
  if (email === "") return { result: false, message: "이메일을 입력해주세요." };
  if (!isRegEmail(email)) return { result: false, message: "올바른 이메일 주소가 아닙니다." };
  if (checkCase === "signUp") {
    checkEmailExist(email);
    // return { result: false, message: "이미 사용 중인 이메일입니다." };
  }
  return { result: true, message: null };
};

const validatePassword = (password) => {
  if (password === "") return { result: false, message: "비밀번호를 입력해주세요." };
  if (!isRegPassword(password)) return { result: false, message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." };
  return { result: true, message: null };
};

const validatePasswordVerify = (password, passwordRepeat) => {
  if (password === passwordRepeat) return { result: true, message: null };
  else return { result: false, message: "비밀번호가 일치하지 않아요." };
};

export { validateEmail, validatePassword, validatePasswordVerify };
