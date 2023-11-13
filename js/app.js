const inputEventHandler = document.querySelector("#memberInfo-form");

const membersList = [
  {
    email: "test@codeit.com",
    password: "codeit101",
  },
];

//

const createWarningText = (inputValue, isEmailInput, isSignUp) => {
  if (isEmailInput) {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!inputValue) {
      return "이메일을 입력하세요";
    } else if (!emailRegex.test(inputValue)) {
      return "올바른 이메일 주소가 아닙니다.";
    }
    // 회원가입시 추가되는 검증
    else if (isSignUp && membersList.some((el) => el.email === inputValue)) {
      return "이미 사용 중인 이메일입니다.";
    }
    return null;
  } else {
    const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!inputValue) {
      return "비밀번호를 입력해주세요.";
    } else if (isSignUp && !pwdReg.test(inputValue)) {
      return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }
  }
};

const createCheckPwdText = (check, pwd) => {
  if (!(check === pwd)) {
    return "비밀번호가 일치하지 않아요.";
  }
  return null;
};

const checkInputData = (e) => {
  const inputData = e.target;
  const warningTag = inputData.parentElement.lastElementChild;
  if (inputData.tagName === "BUTTON") {
    return;
  }
  const isWarningMsg = inputData.parentElement.lastElementChild.textContent;
  if (isWarningMsg) {
    warningTag.textContent = "";
    inputData.classList.toggle("error-input");
  }
  const isSignUp = inputData.parentElement.parentElement.children.length === 4;
  const isEmailInput = inputData.id === "email";
  const isPwdCheckBox = inputData.id === "pw-check";
  let warningMsg = "";
  if (!isPwdCheckBox) {
    warningMsg = createWarningText(inputData.value, isEmailInput, isSignUp);
  } else {
    const pwInput = document.querySelector("#pw");
    warningMsg = createCheckPwdText(inputData.value, pwInput.value);
  }
  if (!warningMsg) {
    return;
  }
  console.log(isWarningMsg, warningMsg);
  warningTag.textContent = warningMsg;
  inputData.classList.toggle("error-input");
};

export {
  inputEventHandler,
  membersList,
  checkInputData,
  createCheckPwdText,
  createWarningText,
};
