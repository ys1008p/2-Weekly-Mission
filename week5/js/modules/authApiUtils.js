import { $emailInput, $passwordInput, $passwordVerifyInput } from "./domElements.js";
import { triggerInputValidationError } from "./authDOMHandler.js";

const API_URL = "https://bootcamp-api.codeit.kr/api";

// accessToken 존재여부 확인 후 리다이렉트 하는 함수
const redirectIfAccessTokenExists = (directURL) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    location.replace(directURL);
  }
};

// 로그인 api에 접근하는 함수
const postSignIn = async (user) => {
  try {
    const response = await fetch(`${API_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    // code 200이 아닐 시 에러 발생으로 동작 중지
    if (!response.ok) {
      throw new Error();
    }
    // 성공시 로컬 스토리지에 값 저장 및 페이지 이동
    const result = await response.json();
    const { data } = result;

    for (const key in data) {
      localStorage.setItem(key, data[key]);
    }

    location.href = "./folder.html";
  } catch {
    // 입력창에 경고 메세지 출력
    triggerInputValidationError($emailInput, "이메일을 확인해주세요");
    triggerInputValidationError($passwordInput, "비밀번호를 확인해주세요.");
  }
};

// 이메일 중복 여부 확인하는 함수
const checkEmailExist = async (email) => {
  try {
    const userEmail = {
      email: email,
    };
    const response = await fetch(`${API_URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });
    // code 200 아니면 에러 전송
    if (!response.ok) {
      throw new Error();
    }
    // 사용 가능여부 출력
    alert("사용가능한 이메일입니다.");
  } catch {
    // 이메일 입력창에 경고 메세지 출력
    triggerInputValidationError($emailInput, "이미 사용 중인 이메일입니다.");
    return;
  }
};

// 회원가입을 시도하는 함수
const postSignUp = async (user, emailValidation, passwordValidation, passwordVerifyValidation) => {
  try {
    // 인자로 받은 유효성 값이 옳지 않으면 에러 전송 후 동작 중지
    if (!(emailValidation.result && passwordValidation.result && passwordVerifyValidation.result)) {
      throw new Error();
    }

    const response = await fetch(`${API_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    // code 200 아니면 에러 전송
    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();
    const { data } = result;

    for (const key in data) {
      localStorage.setItem(key, data[key]);
    }

    location.href = "./folder.html";
  } catch {
    // 유효성 결과값을 참조해 문제가 있는 입력창에 경고 메세지 출력
    if (!emailValidation.result) triggerInputValidationError($emailInput, emailValidation.message);
    if (!passwordValidation.result) triggerInputValidationError($passwordInput, passwordValidation.message);
    if (!passwordVerifyValidation.result)
      triggerInputValidationError($passwordVerifyInput, passwordVerifyValidation.message);
  }
};

export { postSignIn, checkEmailExist, postSignUp, redirectIfAccessTokenExists };
