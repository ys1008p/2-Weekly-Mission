const form = document.querySelector(".sign-form");
const inputs = form.querySelectorAll("input");

const submit = document.querySelector(".cta");
const authType = submit.dataset.auth;

const SUCCESS_ACCOUNT = {
  email: "test@codeit.com",
  password: "codeit101",
};

const ERROR_MESSAGE = {
  signin: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "이메일을 확인해주세요",
    INVALID_PASSWORD: "비밀번호를 확인해주세요.",
  },
  signup: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
    INVALID_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    EXIST_EMAIL: "이미 존재하는 이메일입니다.",
    PASSWORD_EQUAL: "비밀번호가 일치하지 않아요.",
  },
};

const PATTERN = {
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  "confirm-password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const emailInput = document.querySelector('.sign-input[type="email"]');
const passwordInput = document.querySelector('.sign-input[type="password"]');
const confirmPasswordInput = document.querySelector(".confirm-password");

function resetErrorMessage() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));
}

const getErrorMessage = (type, condition) => {
  const errorType = condition ? "EMPTY_" : "INVALID_";
  return ERROR_MESSAGE[authType][errorType + type.toUpperCase()];
};

function displayError(input, errorMessage) {
  const errorDisplay = input.parentNode.nextElementSibling;
  errorDisplay.textContent = errorMessage;
}

const validationState = {};

function validateInput(input) {
  const { name, value } = input;
  let errorMessage = "";

  if (value === "") {
    errorMessage = getErrorMessage(name, true);
  } else if (!PATTERN[name].test(value)) {
    errorMessage = getErrorMessage(name, false);
  } else if (
    authType === "signup" &&
    name === "email" &&
    value === SUCCESS_ACCOUNT.email
  ) {
    errorMessage = ERROR_MESSAGE[authType]["EXIST_EMAIL"];
  }

  validationState[name] = errorMessage ? false : true;

  return errorMessage;
}

const focusHandler = (e) => {
  if (e.target.tagName === "INPUT") {
    const errorMessage = validateInput(e.target);
    displayError(e.target, errorMessage);
  }
};

const submitHandler = (e) => {
  e.preventDefault();
  resetErrorMessage();
  let isValid = true;
  let account = {};

  inputs.forEach((input) => {
    const { type, value } = input;
    if (validationState[input.name] === undefined) {
      const errorMessage = validateInput(input);
      if (errorMessage) {
        displayError(input, errorMessage);
        isValid = false;
      }
    } else if (!validationState[input.name]) {
      displayError(
        input,
        ERROR_MESSAGE[authType]["INVALID_" + type.toUpperCase()]
      );
      isValid = false;
    }
    account[type] = value;
  });

  let isSubmit = false;

  if (authType === "signin" && isValid) {
    if (account.email !== SUCCESS_ACCOUNT.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["INVALID_EMAIL"]);
      isValid = false;
    } else if (account.password !== SUCCESS_ACCOUNT.password) {
      displayError(passwordInput, ERROR_MESSAGE[authType]["INVALID_PASSWORD"]);
      isValid = false;
    } else {
      isSubmit = true;
    }
  }

  if (authType === "signup" && isValid) {
    if (account.email === SUCCESS_ACCOUNT.email) {
      displayError(emailInput, ERROR_MESSAGE[authType]["EXIST_EMAIL"]);
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      displayError(
        confirmPasswordInput,
        ERROR_MESSAGE[authType]["PASSWORD_EQUAL"]
      );
      isValid = false;
    }
    if (isValid) {
      isSubmit = true;
    }
  }
  if (isSubmit) {
    form.submit();
  }
};

const keyupHandler = (e) => {
  if (e.key === "Enter") {
    submit.click();
  }
};

document.querySelectorAll(".eye-button").forEach((button) => {
  button.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const img = this.querySelector("img");

    if (input.type === "password") {
      input.type = "text";
      img.src = "../images/eye-on.svg";
    } else {
      input.type = "password";
      img.src = "../images/eye-off.svg";
    }
  });
});

form.addEventListener("focusout", focusHandler);
form.addEventListener("submit", submitHandler);
document.addEventListener("keyup", keyupHandler);
