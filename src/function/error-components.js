const signErrorMsg = {
  emailNull: "이메일을 입력해주세요.",
  emailFormat: "올바른 이메일 주소가 아닙니다.",
  passwordNull: "비밀번호를 입력해주세요.",
  emailAlreadyInUse: "이미 사용 중인 이메일입니다.",
  passwordFormat: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordMatch: "비밀번호가 일치하지 않아요.",
  emailCheck: "이메일을 확인해주세요.",
  passwordCheck: "비밀번호를 확인해주세요.",
};

function signErrorCase(errorTag, errorMsg, input) {
  errorTag.textContent = errorMsg;
  errorTag.classList.add("sign-error");
  input.classList.add("sign-error-color");
}

function errorMessageClear(errorTag, input) {
  errorTag.classList.remove("sign-error");
  errorTag.textContent = "";
  input.classList.remove("sign-error-color");
}
export { signErrorMsg, signErrorCase, errorMessageClear };
