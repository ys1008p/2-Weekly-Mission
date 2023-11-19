const errMsg = {
  emailNone : "이메일을 입력해주세요.",
  emailInvalid : "올바른 이메일 주소가 아닙니다.",
  emailAlready : "이미 사용 중인 이메일입니다.",
  emailCheck : "이메일을 확인해주세요.",
  passwordNone : "비밀번호를 입력해주세요.",
  passwordNotmatch : "비밀번호가 일치하지 않아요.",
  passwordCombo : "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
  passwordCheck : "비밀번호를 확인해주세요."
}

function errorFunc(errTag, errMsg, input){
  errTag.textContent = errMsg;
  errTag.classList.add("signError");
  input.classList.add("errbox");
}

function errorFuncClear(errTag, input){
  errTag.textContent = "";
  errTag.classList.remove("signError");
  input.classList.remove("errbox");
}

export {errMsg, errorFunc, errorFuncClear};