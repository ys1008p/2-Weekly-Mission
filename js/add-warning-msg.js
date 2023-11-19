import { returnWarningText, returnCheckPwdText } from "./return-warning-msg.js";
import { WARNING_MSGS } from "./warning-msgs.js";
//

const $memberInfoForm = document.querySelector("#memberInfo-form");
//

const resetWarningMsg = (hasWarningMsg, warningTag, input) => {
  if (hasWarningMsg) {
    warningTag.textContent = "";
    input.classList.toggle("error-input");
  }
};

const setWarningMsg = (warningMsg, warningTag, input) => {
  if (warningMsg) {
    warningTag.textContent = warningMsg;
    input.classList.toggle("error-input");
  }
};

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

const checkWarningMsg = (e) => {
  // input태그 내용 검증 후 에러메시지 추가 및 inpur태그 레이아웃 변경
  const $inputDataEl = e.target;
  const $warningTag = $inputDataEl.parentElement.lastElementChild;

  const hasWarningMsg = $inputDataEl.parentElement.lastElementChild.textContent; // 경고메시지 존재여부 확인

  const isSignUp = $inputDataEl.parentElement.parentElement.children.length === 4; //signUp 페이지인지 확인
  const isEmailInput = $inputDataEl.id === "email"; // email 입력창 확인
  const isPwdCheckBox = $inputDataEl.id === "pw-check"; // pwd 비교창 확인

  const pwInput = document.querySelector("#pw");
  let warningMsg = ""; // 경고메시지 작성할 변수 선언

  //

  if ($inputDataEl.tagName === "BUTTON") return;

  resetWarningMsg(hasWarningMsg, $warningTag, $inputDataEl);

  if (isSignUp && isEmailInput) checkDuplicatedEmail($inputDataEl, $warningTag);

  if (!isPwdCheckBox) warningMsg = returnWarningText($inputDataEl.value, isEmailInput, isSignUp);
  else warningMsg = returnCheckPwdText($inputDataEl.value, pwInput.value);

  setWarningMsg(warningMsg, $warningTag, $inputDataEl);
};

export { $memberInfoForm, checkWarningMsg, returnCheckPwdText };
