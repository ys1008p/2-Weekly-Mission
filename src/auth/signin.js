const InputMessage = {
  ERROR_EMPTY_EMAIL: "이메일을 입력해주세요.",
  ERROR_INVALID_EMAIL_FORMAT: "올바른 이메일 주소가 아닙니다.",
  ERROR_DUPLICATE_EMAIL: "이미 사용 중인 이메일입니다.",
  ERROR_EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
  ERROR_INVALID_PASSWORD_FORMAT:
    "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
  ERROR_DIFFER_PASSWORD_CONFIRM: "비밀번호가 일치하지 않아요",
  ERROR_NO_MATCHING_EMAIL: "이메일을 확인해 주세요.",
  ERROR_NO_MATCHING_PASSWORD: "비밀번호를 확인해 주세요.",
};

const getChildElementsAsNode = (query) =>
  Array.from(document.querySelector(query)?.childNodes).filter(
    (node) => node.nodeType === Node.ELEMENT_NODE
  );

const signinForm = document.querySelector(".signin");
const [_, emailInputEl, emailMessageEl] = getChildElementsAsNode(".email");
const [__, passwordInputEl, passwordMessageEl] =
  getChildElementsAsNode(".password");
const passwordToggleButtonEl = document.querySelector(".password-toggle");

const showInputErrorMessage = (inputEl, message) => {
  const messageEl = inputEl.parentElement.lastElementChild;
  messageEl.textContent = message;
  messageEl.dataset.state = "error";
};

const hideInputErrorMessage = (inputEl) => {
  inputEl.parentElement.lastElementChild.dataset.state = "normal";
};

const validateEmail = (email) => {
  if (email === "")
    return { ok: false, message: InputMessage.ERROR_EMPTY_EMAIL };
  return { ok: true, message: "" };
};

const validatePassword = (password) => {
  if (password === "")
    return { ok: false, message: InputMessage.ERROR_EMPTY_PASSWORD };
  return { ok: true, message: "" };
};

const togglePassword = (inputEl) => {
  if (inputEl.type === "password") {
    inputEl.type = "text";
  } else {
    inputEl.type = "password";
  }
};

const handleEmailFocusOut = (e) => {
  const { ok, message } = validateEmail(e.target.value);
  if (!ok) {
    emailInputEl.dataset.state = "error";
    showInputErrorMessage(emailInputEl, message);
  } else {
    emailInputEl.dataset.state = "normal";
    hideInputErrorMessage(emailInputEl);
  }
};

const handlePasswordFocusOut = (e) => {
  const { ok, message } = validatePassword(e.target.value);
  if (!ok) {
    passwordInputEl.dataset.state = "error";
    showInputErrorMessage(passwordInputEl, message);
  } else {
    passwordInputEl.dataset.state = "normal";
    hideInputErrorMessage(passwordInputEl);
  }
};

const handleSubmitSignin = (e) => {
  e.preventDefault();
  const [email, password] = Array.from(e.srcElement)
    .filter((node) => node.nodeName === "INPUT")
    .map((input) => input.value);
  const { ok: emailOk, message: emailMessage } = validateEmail(email);
  if (!emailOk) {
    emailInputEl.dataset.state = "error";
    showInputErrorMessage(emailInputEl, emailMessage);
    return;
  }
  const { ok: passwordOk, message: passwordMessage } =
    validatePassword(password);
  if (!passwordOk) {
    passwordInputEl.dataset.state = "error";
    showInputErrorMessage(passwordInputEl, passwordMessage);
    return;
  }
  if (email !== "test@codeit.com" || password !== "codeit101") {
    emailInputEl.dataset.state = "error";
    showInputErrorMessage(emailInputEl, InputMessage.ERROR_NO_MATCHING_EMAIL);
    passwordInputEl.dataset.state = "error";
    showInputErrorMessage(
      passwordInputEl,
      InputMessage.ERROR_NO_MATCHING_PASSWORD
    );
    return;
  }
  location.href = "/folder";
};

const handlePasswordToggle = (e) => {
  const [inputEl] = Array.from(e.currentTarget.parentElement.children).filter(
    (el) => el.nodeName === "INPUT"
  );
  togglePassword(inputEl);
};

emailInputEl.addEventListener("focusout", handleEmailFocusOut);
passwordInputEl.addEventListener("focusout", handlePasswordFocusOut);
signinForm.addEventListener("submit", handleSubmitSignin);
passwordToggleButtonEl.addEventListener("click", handlePasswordToggle);
