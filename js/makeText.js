export const createWarningText = (inputValue, isEmailInput, isSignUp) => {
  //email, pwd 검증후 텍스트 반환
  if (isEmailInput) {
    //email 입력창일 때
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!inputValue) {
      //email이 입력되지 않거나 올바르지 않을 때
      return "이메일을 입력하세요";
    } else if (!emailRegex.test(inputValue)) {
      return "올바른 이메일 주소가 아닙니다.";
    }
    // 회원가입시 추가되는 검증
    else if (isSignUp && membersList.some((el) => el.email === inputValue)) {
      return "이미 사용 중인 이메일입니다.";
    }
    return null; // 이상이 없으면 null값 반환
  } else {
    const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!inputValue) {
      // 비밀번호 칸이 비었을 때
      return "비밀번호를 입력해주세요.";
    } else if (isSignUp && !pwdReg.test(inputValue)) {
      //비밀번호가 조건이 맞지 않을 떄
      return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }
  }
};

export const createCheckPwdText = (check, pwd) => {
  //pwd 체크 인풋에서 비밀번호 일치 비교
  if (!(check === pwd)) {
    // 비밀번호가 다를 떄
    return "비밀번호가 일치하지 않아요.";
  }
  return null; // 이상없으면 null값 반환
};
