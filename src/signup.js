import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  userID,
  TokenStorage,
} from "./shared.js";

TokenStorage("./folder");

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);

function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  if (email === userID.email) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이미 사용 중인 이메일입니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#pwd");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);

function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  if (!isPasswordValid(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문,숫자 조합8자 이상 입력해 주세요."
    );
    return;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

const checkPasswordInput = document.querySelector("#pwd-check");
const checkPasswordErrorMessage = document.querySelector(
  "#check-error-message"
);
checkPasswordInput.addEventListener("focusout", (event) =>
  validateCheckPasswordInput(event.target.value)
);

function validateCheckPasswordInput(checkPassword) {
  if (passwordInput.value !== checkPassword) {
    setInputError(
      {
        input: checkPasswordInput,
        errorMessage: checkPasswordErrorMessage,
      },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({
    input: checkPasswordInput,
    errorMessage: checkPasswordErrorMessage,
  });
  return true;
}

const passwordToggleButton = document.querySelector("#eye-btn");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const eyeCheckButton = document.querySelector("#eye-btn-check");
eyeCheckButton.addEventListener("click", () =>
  togglePassword(checkPasswordInput, eyeCheckButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);

async function submitForm(event) {
  event.preventDefault();
  const signUpSuccess =
    emailInput.value && passwordInput.value && checkPasswordInput.value;

  if (signUpSuccess) {
    const isDuplicate = await checkDuplicateEmail(emailInput.value);

    if (isDuplicate) {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "이미 사용 중인 이메일입니다."
      );
      return;
    }

    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
          }),
        }
      );

      if (!response.ok) {
        throw Error();
      }

      const data = await response.json();
      const accessToken = data?.accessToken;
      if (!accessToken) {
        alert("회원가입에 실패했습니다.");
        return;
      }

      localStorage.setItem("j_1644", accessToken);
      location.href = "./folder";
    } catch {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "이메일 또는 비밀번호를 확인해주세요."
      );
      setInputError(
        { input: passwordInput, errorMessage: passwordErrorMessage },
        "이메일 또는 비밀번호를 확인해주세요."
      );
    }
  } else {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 확인해주세요."
    );
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 확인해주세요."
    );
  }
}

async function checkDuplicateEmail(email) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    throw Error();
  }

  const data = await response.json();
  return data.isDuplicate;
}
