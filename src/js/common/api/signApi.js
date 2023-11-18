const codeitPath = "https://bootcamp-api.codeit.kr/api";
import { accessTokenValid } from "../util/storage.js";

/**
 * 로그인 POST
 */
async function signInPost(inputValue) {
  try {
    const response = await fetch(`${codeitPath}/sign-in`, {
      method: "POST",

      body: JSON.stringify(inputValue),

      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 400) {
      throw new Error(`HTTP ERROR CODE : ${response.status}`);
    }
    const { data } = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    window.location.href = "/folder.html";
    return response.ok;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 이메일 중복 확인 POST
 */
async function emailValidkPost(inputValue) {
  try {
    const response = await fetch(`${codeitPath}/check-email`, {
      method: "POST",

      body: JSON.stringify(inputValue),

      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 409) {
      throw new Error(`HTTP ERROR CODE : ${response.status}`);
    }
    const { data } = await response.json();
    return data.isUsableNickname;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 회원가입 POST
 */
async function signUpPost(inputValue) {
  try {
    const response = await fetch(`${codeitPath}/sign-up`, {
      method: "POST",

      body: JSON.stringify(inputValue),

      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 400) {
      throw new Error(`HTTP ERROR CODE : ${response.status}`);
    }

    const { data } = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    window.location.href = "/folder.html";
  } catch (e) {
    console.log(e);
  }
}

export { signInPost, signUpPost, emailValidkPost };
