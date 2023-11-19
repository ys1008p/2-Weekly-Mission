import { returnWarningText, returnCheckPwdText } from "./return-warning-msg.js";
import { WARNING_MSGS } from "./warning-msgs.js";
//

const $memberInfoForm = document.querySelector("#memberInfo-form");
//

//기존 에러메시지를 초기화 하는 함수
const resetWarningMsg = (hasWarningMsg, warningTag, input) => {
  if (hasWarningMsg) {
    warningTag.textContent = "";
    input.classList.toggle("error-input");
  }
};

//에러메시지를 설정하는 함수
const setWarningMsg = (warningMsg, warningTag, input) => {
  if (warningMsg) {
    warningTag.textContent = warningMsg;
    input.classList.toggle("error-input");
  }
};

//중복된 이메일을 확인하는 함수
async function checkDuplicatedEmail(inputEmailEl, msgTag) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: inputEmailEl.value }),
    });
    if (response.status === 409) throw new Error("아이디 중복");
  } catch (e) {
    setWarningMsg(WARNING_MSGS.DUPLICATION_EMAIL, msgTag, inputEmailEl);
  }
}

// input태그 내용 검증 후 에러메시지 추가 및 inpur태그 레이아웃 변경
const validateInputAndSetErrorMsg = (e) => {
  const $inputDataEl = e.target;
  const $warningTag = $inputDataEl.parentElement.lastElementChild;

  const hasWarningMsg = $inputDataEl.parentElement.lastElementChild.textContent;

  const isSignUp = $inputDataEl.parentElement.parentElement.children.length === 4;
  const isEmailInput = $inputDataEl.id === "email";
  const isPwdCheckBox = $inputDataEl.id === "pw-check";

  const pwInput = document.querySelector("#pw");
  let warningMsg = "";

  //

  if ($inputDataEl.tagName === "BUTTON") return;

  resetWarningMsg(hasWarningMsg, $warningTag, $inputDataEl);

  if (isSignUp && isEmailInput) checkDuplicatedEmail($inputDataEl, $warningTag);

  if (!isPwdCheckBox) warningMsg = returnWarningText($inputDataEl.value, isEmailInput, isSignUp);
  else warningMsg = returnCheckPwdText($inputDataEl.value, pwInput.value);

  setWarningMsg(warningMsg, $warningTag, $inputDataEl);
};

export { $memberInfoForm, validateInputAndSetErrorMsg, returnCheckPwdText };
