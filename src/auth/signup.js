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

const signupForm = document.querySelector(".signup");
const [_, emailInputEl, emailMessageEl] = getChildElementsAsNode(".email");
const [__, passwordInputEl, passwordMessageEl] =
  getChildElementsAsNode(".password");
const [___, passwordConfirmInputEl, passwordConfirmMessageEl] =
  getChildElementsAsNode(".password-confirm");
const passwordToggleButtonEls = document.querySelectorAll(".password-toggle");

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
  else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    )
  )
    return { ok: false, message: InputMessage.ERROR_INVALID_EMAIL_FORMAT };
  else if (email === "test@codeit.com")
    return { ok: false, message: InputMessage.ERROR_DUPLICATE_EMAIL };
  return { ok: true, message: "" };
};

const validatePassword = (password) => {
  if (
    password.length < 8 ||
    /^[A-Za-z]*$/.test(password) ||
    /^\d*$/.test(password)
  )
    return { ok: false, message: InputMessage.ERROR_INVALID_PASSWORD_FORMAT };
  return { ok: true, message: "" };
};

const validatePasswordConfirm = (passwordConfirm) => {
  const password = passwordInputEl.children[0].value;
  if (passwordConfirm !== password)
    return { ok: false, message: InputMessage.ERROR_DIFFER_PASSWORD_CONFIRM };
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

const handlePasswordConfirmFocusOut = (e) => {
  const { ok, message } = validatePasswordConfirm(e.target.value);
  if (!ok) {
    passwordConfirmInputEl.dataset.state = "error";
    showInputErrorMessage(passwordConfirmInputEl, message);
  } else {
    passwordConfirmInputEl.dataset.state = "normal";
    hideInputErrorMessage(passwordConfirmInputEl);
  }
};

const handleSubmitSignup = (e) => {
  e.preventDefault();
  const [email, password, passwordConfirm] = Array.from(e.srcElement)
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
  const { ok: passwordConfirmOk, message: passwordConfirmMessage } =
    validatePasswordConfirm(passwordConfirm);
  if (!passwordConfirmOk) {
    passwordConfirmInputEl.dataset.state = "error";
    showInputErrorMessage(passwordConfirmInputEl, passwordConfirmMessage);
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
passwordConfirmInputEl.addEventListener(
  "focusout",
  handlePasswordConfirmFocusOut
);
signupForm.addEventListener("submit", handleSubmitSignup);
passwordToggleButtonEls.forEach((el) =>
  el.addEventListener("click", handlePasswordToggle)
);
