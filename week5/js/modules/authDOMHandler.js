const resetInputValidationError = (e) => {
  // focusIn 대상이 input일때만 동작
  if (!e.target.tagName === "INPUT") return;

  e.target.classList.remove("warning-alert-border");
  e.target.parentElement.lastElementChild.textContent = "";
};

const setWarningBorder = (element) => {
  // 인자로 받은 요소(input)에 클래스 추가
  element.classList.add("warning-alert-border");
};

const setWarningText = (element, message) => {
  // 마지막 요소인 경고메세지 div에 메세지 기입
  element.parentElement.lastElementChild.textContent = message;
};

const triggerInputValidationError = (input, message) => {
  // 인자로 받은 input에 경고성 테두리 추가, 아래에 경고메세지 기입
  setWarningBorder(input);
  setWarningText(input, message);
};

export { resetInputValidationError, triggerInputValidationError };
