import { membersList } from "./membersList.js";
import { createCheckPwdText, createWarningText } from "./makeText.js";
//

const $memberInfoForm = document.querySelector("#memberInfo-form");

//

const checkInputData = (e) => {
  // input태그 내용 검증 후 에러메시지 추가 및 inpur태그 레이아웃 변경
  const $inputData = e.target;
  const $warningTag = $inputData.parentElement.lastElementChild;
  if (inputData.tagName === "BUTTON") {
    //이벤트 발생 위치 button일 때 이벤트 종료
    return;
  }
  const isWarningMsg = $inputData.parentElement.lastElementChild.textContent; // 경고메시지 존재여부 확인
  if (isWarningMsg) {
    // 경고메시지가 있으면 경고메시지, inpur 태그 레이아웃 초기화
    $warningTag.textContent = "";
    $inputData.classList.toggle("error-input");
  }
  const isSignUp = $inputData.parentElement.parentElement.children.length === 4; //signUp 페이지인지 확인
  const isEmailInput = $inputData.id === "email"; // email 입력창 확인
  const isPwdCheckBox = $inputData.id === "pw-check"; // pwd 비교창 확인
  let warningMsg = ""; // 경고메시지 작성할 변수 선언
  if (!isPwdCheckBox) {
    // pwd 비교창 아닐 경우, email,pwd 입력 inpu에 맞는 경고메시지 작성
    warningMsg = createWarningText(inputData.value, isEmailInput, isSignUp);
  } else {
    //pwd 비교창일 때, 비밀번호 비교 후 메시지 작성
    const pwInput = document.querySelector("#pw");
    warningMsg = createCheckPwdText(inputData.value, pwInput.value);
  }
  if (!warningMsg) {
    // input 내용에 이상이 없을 경우 이벤트 종료
    return;
  }
  $warningTag.textContent = warningMsg; //경고메시지 태그에 경고메시지 추가
  $inputData.classList.toggle("error-input"); // input 레이아웃 변경
};

export {
  $memberInfoForm,
  membersList,
  checkInputData,
  createCheckPwdText,
  createWarningText,
};
